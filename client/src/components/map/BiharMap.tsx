import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"
import * as THREE from "three"
import { Compass, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"

import { biharData } from "../../data/bihar"
import type { LandmarkPin } from "../../types/state"

/* =========================================================
   TYPES & PROJECTION CONSTANTS
========================================================= */

type Coordinate = [number, number]

interface DistrictFeature {
  type: "Feature"
  properties: {
    district?: string
    dtname?: string
    st_nm?: string
    [key: string]: unknown
  }
  geometry: {
    type: "Polygon" | "MultiPolygon"
    coordinates: Coordinate[][] | Coordinate[][][]
  }
}

interface BiharGeoJSON {
  type: "FeatureCollection"
  features: DistrictFeature[]
}

interface DistrictMeshInfo {
  id: string
  name: string
  shapes: THREE.Shape[]
  centroid: [number, number]
}

const BIHAR_SCALE = 1.25
const BIHAR_CENTER_LON = 85.65
const BIHAR_CENTER_LAT = 25.75

function projectBiharCoord(coord: Coordinate): [number, number] {
  const [lon, lat] = coord
  const x = (lon - BIHAR_CENTER_LON) * BIHAR_SCALE
  const y = (lat - BIHAR_CENTER_LAT) * BIHAR_SCALE
  return [x, y]
}

function createDistrictShape(ring: Coordinate[]): THREE.Shape {
  const shape = new THREE.Shape()
  if (!ring || ring.length === 0) return shape

  const [firstX, firstY] = projectBiharCoord(ring[0])
  shape.moveTo(firstX, firstY)

  for (let i = 1; i < ring.length; i++) {
    const [x, y] = projectBiharCoord(ring[i])
    shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

// A palette of harmonious, rich royal hues for districts
const DISTRICT_PALETTE = [
  "#264478",
  "#2c5291",
  "#1e3b6a",
  "#325c9f",
  "#244a84",
  "#3866ae",
  "#213e70",
  "#29508d",
  "#365fa4",
  "#1d3966",
]

/* =========================================================
   3D LANDMARK PIN
========================================================= */

function LandmarkMarker({
  pin,
  onSelect,
}: {
  pin: LandmarkPin
  onSelect: (pin: LandmarkPin) => void
}) {
  const [x, y] = projectBiharCoord([pin.lon, pin.lat])
  const [hovered, setHovered] = useState(false)
  const pulseRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (pulseRef.current) {
      const t = state.clock.getElapsedTime()
      const s = 1 + Math.sin(t * 4 + pin.lat) * 0.25
      pulseRef.current.scale.set(s, s, s)
    }
  })

  return (
    <group position={[x, y, 0.28]}>
      {/* Pin base hover target */}
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          onSelect(pin)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = "default"
        }}
      >
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          color={hovered ? "#fbbf24" : "#f59e0b"}
          emissive={hovered ? "#f59e0b" : "#d97706"}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>

      {/* Pulsing beacon halo */}
      <mesh ref={pulseRef} position={[0, 0, -0.02]}>
        <ringGeometry args={[0.06, 0.11, 24]} />
        <meshBasicMaterial
          color={hovered ? "#fef08a" : "#fbbf24"}
          transparent
          opacity={hovered ? 0.9 : 0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Upright pin stalk */}
      <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.16, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

/* =========================================================
   INDIVIDUAL DISTRICT MESH
========================================================= */

interface DistrictMeshProps {
  district: DistrictMeshInfo
  colorIndex: number
  isHovered: boolean
  isSelected: boolean
  onHover: (name: string, e: MouseEvent) => void
  onLeave: () => void
  onSelect: (name: string) => void
}

function DistrictMesh({
  district,
  colorIndex,
  isHovered,
  isSelected,
  onHover,
  onLeave,
  onSelect,
}: DistrictMeshProps) {
  const groupRef = useRef<THREE.Group>(null)
  const baseColor = DISTRICT_PALETTE[colorIndex % DISTRICT_PALETTE.length]

  const extrudeSettings = useMemo(
    () => ({
      depth: 0.18,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.018,
      bevelThickness: 0.018,
    }),
    []
  )

  const geometries = useMemo(() => {
    return district.shapes.map((shape) => new THREE.ExtrudeGeometry(shape, extrudeSettings))
  }, [district.shapes, extrudeSettings])

  const lineGeometries = useMemo(() => {
    return district.shapes.map((shape) => {
      const points = shape.getPoints()
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      return geometry
    })
  }, [district.shapes])

  // Smooth hover elevation
  useFrame((_, delta) => {
    if (!groupRef.current) return
    const targetZ = isSelected ? 0.09 : isHovered ? 0.06 : 0
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetZ,
      12,
      delta
    )
  })

  return (
    <group ref={groupRef}>
      {geometries.map((geo, idx) => (
        <mesh
          key={idx}
          geometry={geo}
          onClick={(e) => {
            e.stopPropagation()
            onSelect(district.name)
          }}
          onPointerOver={(e) => {
            e.stopPropagation()
            onHover(district.name, e.nativeEvent)
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            onLeave()
          }}
        >
          {/* Top surface material */}
          <meshStandardMaterial
            attach="material-0"
            color={
              isSelected
                ? "#f59e0b"
                : isHovered
                ? "#eab308"
                : "#f1f5f9"
            }
            roughness={0.45}
            metalness={0.08}
            polygonOffset
            polygonOffsetFactor={1}
            polygonOffsetUnits={1}
          />
          {/* Extrusion side material */}
          <meshStandardMaterial
            attach="material-1"
            color={isSelected ? "#78350f" : baseColor}
            roughness={0.65}
            metalness={0.15}
          />
        </mesh>
      ))}

      {/* District boundary outline lines */}
      {lineGeometries.map((lineGeo, idx) => (
        <lineLoop key={`line-${idx}`} geometry={lineGeo} position={[0, 0, 0.198]}>
          <lineBasicMaterial
            color={isSelected ? "#ffffff" : isHovered ? "#fef08a" : "#3b82f6"}
            linewidth={1}
            transparent
            opacity={isSelected ? 1 : isHovered ? 0.95 : 0.45}
          />
        </lineLoop>
      ))}
    </group>
  )
}

/* =========================================================
   SCENE WRAPPER
========================================================= */

function BiharScene({
  districts,
  hoveredDistrict,
  selectedDistrict,
  onHover,
  onLeave,
  onSelect,
  onSelectPin,
}: {
  districts: DistrictMeshInfo[]
  hoveredDistrict: string | null
  selectedDistrict: string | null
  onHover: (name: string, e: MouseEvent) => void
  onLeave: () => void
  onSelect: (name: string) => void
  onSelectPin: (pin: LandmarkPin) => void
}) {
  return (
    <>
      <group position={[0.22, 0.22, 0]} rotation={[-0.45, 0, 0]}>
        {districts.map((district, idx) => (
          <DistrictMesh
            key={district.id}
            district={district}
            colorIndex={idx}
            isHovered={hoveredDistrict === district.name}
            isSelected={selectedDistrict === district.name}
            onHover={onHover}
            onLeave={onLeave}
            onSelect={onSelect}
          />
        ))}

        {/* 3D Landmark pins */}
        {(biharData.landmarks || []).map((pin) => (
          <LandmarkMarker key={pin.id} pin={pin} onSelect={onSelectPin} />
        ))}
      </group>
    </>
  )
}

/* =========================================================
   MAIN BIHAR 3D MAP COMPONENT
========================================================= */

interface BiharMapProps {
  selectedDistrict?: string | null
  onDistrictSelect?: (districtName: string) => void
  onLandmarkSelect?: (landmark: LandmarkPin) => void
}

export default function BiharMap({
  selectedDistrict: controlledDistrict,
  onDistrictSelect,
  onLandmarkSelect,
}: BiharMapProps) {
  const [districts, setDistricts] = useState<DistrictMeshInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null)
  const [internalSelectedDistrict, setInternalSelectedDistrict] = useState<string | null>("Patna")

  const selectedDistrict = controlledDistrict !== undefined ? controlledDistrict : internalSelectedDistrict
  const [tooltip, setTooltip] = useState<{
    visible: boolean
    name: string
    x: number
    y: number
  }>({
    visible: false,
    name: "",
    x: 0,
    y: 0,
  })

  const controlsRef = useRef<OrbitControlsImpl>(null)

  // Load Bihar districts GeoJSON
  useEffect(() => {
    let mounted = true
    fetch("/data/bihar-districts.geojson")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load bihar-districts.geojson")
        return res.json() as Promise<BiharGeoJSON>
      })
      .then((geojson) => {
        if (!mounted) return

        const parsedDistricts: DistrictMeshInfo[] = geojson.features.map(
          (feature, index) => {
            const districtName =
              feature.properties.district ||
              feature.properties.dtname ||
              `District-${index + 1}`

            const shapes: THREE.Shape[] = []
            let sumX = 0
            let sumY = 0
            let pointCount = 0

            if (feature.geometry.type === "Polygon") {
              const ring = feature.geometry.coordinates[0] as Coordinate[]
              shapes.push(createDistrictShape(ring))
              ring.forEach((pt) => {
                const [x, y] = projectBiharCoord(pt)
                sumX += x
                sumY += y
                pointCount++
              })
            } else if (feature.geometry.type === "MultiPolygon") {
              const multi = feature.geometry.coordinates as Coordinate[][][]
              multi.forEach((polygonCoords) => {
                const ring = polygonCoords[0]
                shapes.push(createDistrictShape(ring))
                ring.forEach((pt) => {
                  const [x, y] = projectBiharCoord(pt)
                  sumX += x
                  sumY += y
                  pointCount++
                })
              })
            }

            const centroid: [number, number] = [
              pointCount > 0 ? sumX / pointCount : 0,
              pointCount > 0 ? sumY / pointCount : 0,
            ]

            return {
              id: `${districtName}-${index}`,
              name: districtName,
              shapes,
              centroid,
            }
          }
        )

        setDistricts(parsedDistricts)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error loading Bihar GeoJSON:", err)
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const handleHover = (name: string, e: MouseEvent) => {
    setHoveredDistrict(name)
    setTooltip({
      visible: true,
      name,
      x: e.clientX + 16,
      y: e.clientY + 16,
    })
  }

  const handleLeave = () => {
    setHoveredDistrict(null)
    setTooltip((prev) => ({ ...prev, visible: false }))
  }

  const handleSelect = (name: string) => {
    setInternalSelectedDistrict(name)
    if (onDistrictSelect) {
      onDistrictSelect(name)
    }
  }

  const handleSelectPin = (pin: LandmarkPin) => {
    setInternalSelectedDistrict(pin.district)
    if (onDistrictSelect) {
      onDistrictSelect(pin.district)
    }
    if (onLandmarkSelect) {
      onLandmarkSelect(pin)
    }
  }

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0.22, 0.22, 0)
      controlsRef.current.object.position.set(0.22, 0.22, 5.75)
      controlsRef.current.update()
    }
  }

  const zoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(1.25)
      controlsRef.current.update()
    }
  }

  const zoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(1.25)
      controlsRef.current.update()
    }
  }

  return (
    <div className="bihar-map-wrapper">
      {/* ================= 3D CANVAS ================= */}
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0.22, 0.22, 5.75]} fov={38} />

        <ambientLight intensity={0.9} />
        <directionalLight
          position={[5, 8, 7]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-6, -4, 4]} intensity={0.4} color="#3b82f6" />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#fef08a" />

        <OrbitControls
          ref={controlsRef}
          target={[0.22, 0.22, 0]}
          enableRotate={true}
          enablePan={false}
          enableZoom={false}
          minDistance={3.2}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 6}
          dampingFactor={0.06}
        />

        <BiharScene
          districts={districts}
          hoveredDistrict={hoveredDistrict}
          selectedDistrict={selectedDistrict}
          onHover={handleHover}
          onLeave={handleLeave}
          onSelect={handleSelect}
          onSelectPin={handleSelectPin}
        />
      </Canvas>

      {/* ================= CONTROLS OVERLAY ================= */}
      <div className="bihar-map-controls">
        <button
          type="button"
          className="map-control-btn"
          onClick={zoomIn}
          title="Zoom In"
          aria-label="Zoom in"
        >
          <ZoomIn size={18} />
        </button>
        <button
          type="button"
          className="map-control-btn"
          onClick={zoomOut}
          title="Zoom Out"
          aria-label="Zoom out"
        >
          <ZoomOut size={18} />
        </button>
        <button
          type="button"
          className="map-control-btn"
          onClick={resetCamera}
          title="Reset Map Orientation"
          aria-label="Reset map"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {/* ================= COMPASS BADGE ================= */}
      <div className="bihar-compass-badge">
        <Compass size={18} />
        <span>N</span>
      </div>

      {/* ================= FLOATING TOOLTIP ================= */}
      {tooltip.visible && (
        <div
          className="bihar-map-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          <strong>{tooltip.name}</strong>
          {biharData.districts[tooltip.name] && (
            <span className="tooltip-sub">
              {biharData.districts[tooltip.name].tagline}
            </span>
          )}
        </div>
      )}

      {/* ================= LOADING INDICATOR ================= */}
      {loading && (
        <div className="bihar-map-loading">
          <div className="loading-spinner" />
          <span>Extruding 38 Districts of Bihar...</span>
        </div>
      )}
    </div>
  )
}
