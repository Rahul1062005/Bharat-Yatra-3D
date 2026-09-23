import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { useRef, useState, useEffect } from "react"

import earthTexture from "../../assets/textures/earth.png"

// India's coordinates on the unrotated sphere of radius 2:
const INDIA_SPHERE_POS: [number, number, number] = [0.25, 0.72, -1.86]

/* =====================================================
   INDIA BEACON / LOCATOR
   A golden pulsing locator target on India that invites
   the user to click, and triggers the dive transition.
===================================================== */

interface IndiaBeaconProps {
  onClick: () => void
  isDiving: boolean
  onTargetPosResolved: (pos: THREE.Vector3) => void
}

function IndiaBeacon({ onClick, isDiving, onTargetPosResolved }: IndiaBeaconProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (meshRef.current) {
      const worldPos = new THREE.Vector3()
      meshRef.current.getWorldPosition(worldPos)
      onTargetPosResolved(worldPos)
    }
  }, [onTargetPosResolved])

  useFrame((state) => {
    if (ringRef.current && !isDiving) {
      const t = state.clock.getElapsedTime()
      const s = 1 + Math.sin(t * 3.5) * 0.15
      ringRef.current.scale.set(s, s, s)
    }
  })

  return (
    <group position={INDIA_SPHERE_POS}>
      {/* Interactive hit region */}
      <mesh
        ref={meshRef}
        scale={[1.15, 1.4, 0.55]}
        onClick={(e) => {
          e.stopPropagation()
          if (!isDiving) onClick()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          if (!isDiving) {
            setHovered(true)
            document.body.style.cursor = "pointer"
          }
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = "default"
        }}
      >
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* Pulsing golden locator beacon ring */}
      <mesh
        ref={ringRef}
        position={[0, 0, 0.08]}
        rotation={[0.1, 0.1, 0]}
      >
        <ringGeometry args={[0.07, 0.12, 32]} />
        <meshBasicMaterial
          color={hovered ? "#fbbf24" : "#f59e0b"}
          transparent
          opacity={hovered ? 0.95 : 0.75}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Center glowing dot */}
      <mesh position={[0, 0, 0.09]}>
        <circleGeometry args={[0.045, 32]} />
        <meshBasicMaterial
          color={hovered ? "#ffffff" : "#fef08a"}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

/* =====================================================
   CAMERA DIVE CONTROLLER
   Smoothly interpolates camera position & lookAt from
   orbit view down directly into India's subcontinent.
===================================================== */

function CameraDiveController({
  isDiving,
  targetWorldPos,
  onDiveComplete,
}: {
  isDiving: boolean
  targetWorldPos: THREE.Vector3 | null
  onDiveComplete?: () => void
}) {
  const { camera } = useThree()
  const progressRef = useRef(0)
  const startPosRef = useRef<THREE.Vector3 | null>(null)
  const targetCamPosRef = useRef<THREE.Vector3 | null>(null)
  const startLookAtRef = useRef<THREE.Vector3 | null>(null)
  const targetLookAtRef = useRef<THREE.Vector3 | null>(null)
  const completedRef = useRef(false)

  useEffect(() => {
    if (isDiving && targetWorldPos) {
      progressRef.current = 0
      completedRef.current = false
      startPosRef.current = camera.position.clone()

      // Calculate camera arrival position just 0.08 units in front of India for deep zoom-in
      const normal = targetWorldPos.clone().normalize()
      targetCamPosRef.current = targetWorldPos.clone().add(normal.multiplyScalar(0.08))
      startLookAtRef.current = new THREE.Vector3(0, 0, 0)
      targetLookAtRef.current = targetWorldPos.clone()
    }
  }, [isDiving, targetWorldPos, camera])

  useFrame((_, delta) => {
    if (!isDiving || completedRef.current) return
    if (!startPosRef.current || !targetCamPosRef.current || !targetLookAtRef.current) return

    // Smooth ~1.3s cinematic dive
    progressRef.current = Math.min(progressRef.current + delta * 0.76, 1)
    const t = progressRef.current

    // Quintic in-out easing for high-velocity forward rush
    const ease = t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2

    camera.position.lerpVectors(startPosRef.current, targetCamPosRef.current, ease)

    // Dynamic dolly zoom effect: zoom FOV from 40 down to 22
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = THREE.MathUtils.lerp(40, 22, ease)
      camera.updateProjectionMatrix()
    }

    const look = new THREE.Vector3().lerpVectors(
      startLookAtRef.current || new THREE.Vector3(),
      targetLookAtRef.current,
      ease
    )
    camera.lookAt(look)

    if (t >= 1 && !completedRef.current) {
      completedRef.current = true
      if (onDiveComplete) {
        onDiveComplete()
      }
    }
  })

  return null
}

/* =====================================================
   GLOBE
===================================================== */

function Globe({
  onIndiaClick,
  isDiving,
  onTargetPosResolved,
}: {
  onIndiaClick: () => void
  isDiving: boolean
  onTargetPosResolved: (pos: THREE.Vector3) => void
}) {
  const texture = useLoader(THREE.TextureLoader, earthTexture)
  const { gl } = useThree()

  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = gl.capabilities.getMaxAnisotropy()

  const atmosphereRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (atmosphereRef.current && isDiving) {
      const mat = atmosphereRef.current.material as THREE.MeshBasicMaterial
      if (mat) {
        mat.opacity = Math.min(mat.opacity + delta * 0.1, 0.12)
      }
    }
  })

  return (
    <group
      position={[0.08, -0.62, 0]}
      scale={0.88}
      rotation={[-0.04, Math.PI + 0.12, 0]}
    >
      {/* Earth Sphere */}
      <mesh>
        <sphereGeometry args={[2, 160, 160]} />
        <meshStandardMaterial map={texture} roughness={0.9} metalness={0} />
      </mesh>

      {/* India Beacon Target */}
      <IndiaBeacon
        onClick={onIndiaClick}
        isDiving={isDiving}
        onTargetPosResolved={onTargetPosResolved}
      />

      {/* Atmosphere Ring */}
      <mesh ref={atmosphereRef} scale={1.009}>
        <sphereGeometry args={[1.8, 160, 160]} />
        <meshBasicMaterial
          color="#4aa3ff"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

/* =====================================================
   EARTH SCENE
===================================================== */

export interface EarthProps {
  onStartDive?: () => void
  onDiveComplete?: () => void
  isDiving?: boolean
}

function Earth({ onStartDive, onDiveComplete, isDiving = false }: EarthProps) {
  const [targetWorldPos, setTargetWorldPos] = useState<THREE.Vector3 | null>(null)
  const orbitRef = useRef<any>(null)

  const handleIndiaClick = () => {
    if (isDiving) return
    if (orbitRef.current) {
      orbitRef.current.enabled = false
    }
    if (onStartDive) {
      onStartDive()
    }
  }

  return (
    <div className="earth-canvas">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 40,
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[-6, 4, 6]} intensity={3.8} />
        <directionalLight position={[4, -1, -4]} intensity={0.45} color="#3b82f6" />

        <Globe
          onIndiaClick={handleIndiaClick}
          isDiving={isDiving}
          onTargetPosResolved={setTargetWorldPos}
        />

        <CameraDiveController
          isDiving={isDiving}
          targetWorldPos={targetWorldPos}
          onDiveComplete={onDiveComplete}
        />

        <OrbitControls
          ref={orbitRef}
          enabled={!isDiving}
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          rotateSpeed={0.45}
          enableDamping={true}
          dampingFactor={0.06}
        />
      </Canvas>
    </div>
  )
}

export default Earth