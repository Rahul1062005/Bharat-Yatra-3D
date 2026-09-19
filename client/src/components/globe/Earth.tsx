import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { useNavigate } from "react-router-dom"

import earthTexture from "../../assets/textures/earth.png"


// =====================================================
// INDIA CLICK REGION
// =====================================================

function IndiaClickRegion() {
  const navigate = useNavigate()

  const handleIndiaClick = (event: any) => {
    event.stopPropagation()

    navigate("/india")
  }

  return (
    <mesh
      position={[
        0.25,
        0.72,
        -1.86,
      ]}
      scale={[
        0.95,
        1.25,
        0.45,
      ]}
      onPointerDown={handleIndiaClick}
      onClick={handleIndiaClick}
      onPointerOver={(event) => {
        event.stopPropagation()

        document.body.style.cursor = "pointer"
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default"
      }}
    >
      <sphereGeometry
        args={[
          0.38,
          32,
          32,
        ]}
      />

      <meshBasicMaterial
        transparent
        opacity={0}
        depthWrite={false}
      />
    </mesh>
  )
}


// =====================================================
// GLOBE
// =====================================================

function Globe() {
  const texture = useLoader(
    THREE.TextureLoader,
    earthTexture
  )

  const { gl } = useThree()


  // ===================================================
  // TEXTURE QUALITY
  // ===================================================

  texture.colorSpace = THREE.SRGBColorSpace

  texture.anisotropy =
    gl.capabilities.getMaxAnisotropy()


  return (
    <group

      // =================================================
      // EARTH POSITION
      // =================================================

      position={[
        0.08,
        -0.62,
        0,
      ]}


      // =================================================
      // EARTH SIZE
      // =================================================

      scale={0.88}


      // =================================================
      // DEFAULT STARTING ROTATION
      // =================================================

      rotation={[
        -0.04,
        Math.PI + 0.12,
        0,
      ]}

    >

      {/* ================================================= */}
      {/* EARTH */}
      {/* ================================================= */}

      <mesh>

        <sphereGeometry
          args={[
            2,
            160,
            160,
          ]}
        />

        <meshStandardMaterial
          map={texture}
          roughness={0.9}
          metalness={0}
        />

      </mesh>


      {/* ================================================= */}
      {/* INDIA CLICK REGION */}
      {/* ================================================= */}

      <IndiaClickRegion />


      {/* ================================================= */}
      {/* SUBTLE ATMOSPHERE */}
      {/* ================================================= */}

      <mesh
        scale={1.009}
      >

        <sphereGeometry
          args={[
            1.8,
            160,
            160,
          ]}
        />

        <meshBasicMaterial
          color="#4aa3ff"
          transparent
          opacity={0.025}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />

      </mesh>

    </group>
  )
}


// =====================================================
// EARTH SCENE
// =====================================================

function Earth() {
  return (
    <div className="earth-canvas">

      <Canvas
        camera={{
          position: [
            0,
            0,
            7,
          ],
          fov: 40,
        }}

        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >

        {/* ================================================= */}
        {/* LIGHTING */}
        {/* ================================================= */}

        <ambientLight
          intensity={0.9}
        />

        <directionalLight
          position={[
            -6,
            4,
            6,
          ]}
          intensity={3.8}
        />

        <directionalLight
          position={[
            4,
            -1,
            -4,
          ]}
          intensity={0.45}
          color="#3b82f6"
        />


        {/* ================================================= */}
        {/* EARTH */}
        {/* ================================================= */}

        <Globe />


        {/* ================================================= */}
        {/* MOUSE ROTATION */}
        {/* ================================================= */}

        <OrbitControls
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