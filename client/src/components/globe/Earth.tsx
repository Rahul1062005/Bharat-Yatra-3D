import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { useNavigate } from "react-router-dom"

import earthTexture from "../../assets/textures/earth.png"


// =====================================================
// INDIA CLICK AREA
// =====================================================

const indiaPoints: [number, number][] = [
  [68, 24],
  [70, 22],
  [72, 21],
  [73, 19],
  [73, 16],
  [75, 13],
  [77, 8],
  [79, 9],
  [81, 13],
  [83, 16],
  [86, 18],
  [88, 21],
  [89, 24],
  [91, 26],
  [94, 27],
  [97, 28],
  [96, 31],
  [92, 35],
  [88, 35],
  [84, 34],
  [80, 36],
  [76, 35],
  [73, 33],
  [70, 30],
  [68, 24],
]


function isIndia(
  latitude: number,
  longitude: number
): boolean {
  let inside = false

  for (
    let i = 0, j = indiaPoints.length - 1;
    i < indiaPoints.length;
    j = i++
  ) {
    const xi = indiaPoints[i][0]
    const yi = indiaPoints[i][1]

    const xj = indiaPoints[j][0]
    const yj = indiaPoints[j][1]

    const intersects =
      yi > latitude !== yj > latitude &&
      longitude <
        ((xj - xi) * (latitude - yi)) /
          (yj - yi) +
          xi

    if (intersects) {
      inside = !inside
    }
  }

  return inside
}


// =====================================================
// EARTH
// =====================================================

function Globe() {
  const texture = useLoader(
    THREE.TextureLoader,
    earthTexture
  )

  const navigate = useNavigate()
  const { gl } = useThree()


  // Improve texture quality

  texture.colorSpace = THREE.SRGBColorSpace

  texture.anisotropy =
    gl.capabilities.getMaxAnisotropy()


  // ---------------------------------------------------
  // INDIA CLICK
  // ---------------------------------------------------

  const handleClick = (event: any) => {
    if (!event.uv) {
      return
    }

    const longitude =
      event.uv.x * 360 - 180

    const latitude =
      90 - event.uv.y * 180


    if (
      isIndia(
        latitude,
        longitude
      )
    ) {
      navigate("/india")
    }
  }


  return (
    <group
      position={[0, -0.65, 0]}
      scale={0.88}
    >

      {/* ================================================= */}
      {/* EARTH */}
      {/* ================================================= */}

      <mesh
        onClick={handleClick}

        onPointerOver={() => {
          document.body.style.cursor = "pointer"
        }}

        onPointerOut={() => {
          document.body.style.cursor = "default"
        }}
      >

        <sphereGeometry
          args={[2, 160, 160]}
        />

        <meshStandardMaterial
          map={texture}
          roughness={0.9}
          metalness={0}
        />

      </mesh>


      {/* ================================================= */}
      {/* SUBTLE ATMOSPHERE */}
      {/* ================================================= */}

      <mesh scale={1.009}>

        <sphereGeometry
          args={[1.8, 160, 160]}
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
          position: [0, 0, 7],
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
          position={[-6, 4, 6]}
          intensity={3.8}
        />

        <directionalLight
          position={[4, -1, -4]}
          intensity={0.45}
          color="#3b82f6"
        />


        {/* ================================================= */}
        {/* EARTH */}
        {/* ================================================= */}

        <Globe />


        {/* ================================================= */}
        {/* ROTATION ONLY */}
        {/* ================================================= */}

        <OrbitControls
          enablePan={false}
          enableZoom={false}

          rotateSpeed={0.45}

          enableDamping={true}
          dampingFactor={0.06}
        />

      </Canvas>

    </div>
  )
}


export default Earth