import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"
import * as THREE from "three"
import { Compass, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"

import type { DistrictInfo, LandmarkPin } from "../../types/state"

/* =========================================================
   TYPES & GEOMETRY HELPERS
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

interface StateGeoJSON {
  type: "FeatureCollection"
  features: DistrictFeature[]
}

interface DistrictMeshInfo {
  id: string
  name: string
  shapes: THREE.Shape[]
  centroid: [number, number]
}

function projectCoord(
  coord: Coordinate,
  centerLon: number,
  centerLat: number,
  scale: number
): [number, number] {
  const [lon, lat] = coord
  const x = (lon - centerLon) * scale
  const y = (lat - centerLat) * scale
  return [x, y]
}

function createDistrictShape(
  ring: Coordinate[],
  centerLon: number,
  centerLat: number,
  scale: number
): THREE.Shape {
  const shape = new THREE.Shape()
  if (!ring || ring.length === 0) return shape

  const [firstX, firstY] = projectCoord(ring[0], centerLon, centerLat, scale)
  shape.moveTo(firstX, firstY)

  for (let i = 1; i < ring.length; i++) {
    const [x, y] = projectCoord(ring[i], centerLon, centerLat, scale)
    shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

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
  centerLon,
  centerLat,
  scale,
  onSelect,
}: {
  pin: LandmarkPin
  centerLon: number
  centerLat: number
  scale: number
  onSelect?: (pin: LandmarkPin) => void
}) {
  const [hovered, setHovered] = useState(false)
  const [x, y] = useMemo(
    () => projectCoord([pin.lon, pin.lat], centerLon, centerLat, scale),
    [pin.lon, pin.lat, centerLon, centerLat, scale]
  )

  const pinGroupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!pinGroupRef.current) return
    const t = state.clock.getElapsedTime()
    pinGroupRef.current.position.z = 0.28 + Math.sin(t * 2.5) * 0.025
  })

  return (
    <group
      position={[x, y, 0.28]}
      ref={pinGroupRef}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
        document.body.style.cursor = "pointer"
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = "auto"
      }}
      onClick={(e) => {
        e.stopPropagation()
        onSelect?.(pin)
      }}
    >
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial
          color={hovered ? "#ffffff" : "#f59e0b"}
          emissive={hovered ? "#fbbf24" : "#b45309"}
          emissiveIntensity={hovered ? 0.9 : 0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <mesh position={[0, 0, -0.01]}>
        <ringGeometry args={[0.07, 0.09, 24]} />
        <meshBasicMaterial
          color="#fef08a"
          transparent
          opacity={hovered ? 0.9 : 0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

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
      return new THREE.BufferGeometry().setFromPoints(points)
    })
  }, [district.shapes])

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
          receiveShadow
          castShadow
          onPointerOver={(e) => {
            e.stopPropagation()
            onHover(district.name, e.nativeEvent)
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            onLeave()
          }}
          onClick={(e) => {
            e.stopPropagation()
            onSelect(district.name)
          }}
        >
          <meshStandardMaterial
            color={isSelected ? "#d97706" : isHovered ? "#3b82f6" : baseColor}
            roughness={0.35}
            metalness={0.25}
            emissive={isSelected ? "#b45309" : isHovered ? "#1d4ed8" : "#000000"}
            emissiveIntensity={isSelected ? 0.45 : isHovered ? 0.35 : 0}
          />
        </mesh>
      ))}

      {lineGeometries.map((lineGeo, idx) => (
        <lineLoop
          key={`line-${idx}`}
          geometry={lineGeo}
          position={[0, 0, 0.198]}
        >
          <lineBasicMaterial
            color={isSelected ? "#fef08a" : isHovered ? "#60a5fa" : "#93c5fd"}
            linewidth={isSelected ? 2 : 1}
            transparent
            opacity={isSelected ? 1.0 : isHovered ? 0.85 : 0.4}
          />
        </lineLoop>
      ))}
    </group>
  )
}

/* =========================================================
   SCENE CONTAINER
========================================================= */

function StateScene({
  districts,
  landmarks,
  centerLon,
  centerLat,
  scale,
  hoveredDistrict,
  selectedDistrict,
  target,
  onHover,
  onLeave,
  onSelect,
  onSelectPin,
}: {
  districts: DistrictMeshInfo[]
  landmarks: LandmarkPin[]
  centerLon: number
  centerLat: number
  scale: number
  hoveredDistrict: string | null
  selectedDistrict: string | null
  target: [number, number, number]
  onHover: (name: string, e: MouseEvent) => void
  onLeave: () => void
  onSelect: (name: string) => void
  onSelectPin: (pin: LandmarkPin) => void
}) {
  return (
    <>
      <group position={target} rotation={[-0.45, 0, 0]}>
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

        {landmarks.map((pin) => (
          <LandmarkMarker
            key={pin.id}
            pin={pin}
            centerLon={centerLon}
            centerLat={centerLat}
            scale={scale}
            onSelect={onSelectPin}
          />
        ))}
      </group>
    </>
  )
}

/* =========================================================
   MAIN STATE DISTRICT MAP COMPONENT
========================================================= */

export interface StateDistrictMapProps {
  geojsonUrl: string
  centerLon: number
  centerLat: number
  scale: number
  cameraPosition: [number, number, number]
  target: [number, number, number]
  fov: number
  landmarks: LandmarkPin[]
  districtsData?: Record<string, DistrictInfo>
  selectedDistrict?: string | null
  onDistrictSelect?: (districtName: string) => void
  onLandmarkSelect?: (landmark: LandmarkPin) => void
}

export default function StateDistrictMap({
  geojsonUrl,
  centerLon,
  centerLat,
  scale,
  cameraPosition: _cameraPosition,
  target: _target,
  fov: _fov,
  landmarks,
  districtsData,
  selectedDistrict: controlledDistrict,
  onDistrictSelect,
  onLandmarkSelect,
}: StateDistrictMapProps) {
  const [districts, setDistricts] = useState<DistrictMeshInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null)
  const [internalSelectedDistrict, setInternalSelectedDistrict] = useState<string | null>(null)

  const selectedDistrict =
    controlledDistrict !== undefined ? controlledDistrict : internalSelectedDistrict

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

  const [stateProjection, setStateProjection] = useState<{
    cLon: number
    cLat: number
    scale: number
  }>({
    cLon: centerLon,
    cLat: centerLat,
    scale: scale || 1.0,
  })

  const controlsRef = useRef<OrbitControlsImpl>(null)

  // Load state GeoJSON and calculate dynamic bounding box & optimal scale
  useEffect(() => {
    let mounted = true
    setLoading(true)

    fetch(geojsonUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${geojsonUrl}`)
        return res.json() as Promise<StateGeoJSON>
      })
      .then((geojson) => {
        if (!mounted) return

        let minLon = Infinity
        let maxLon = -Infinity
        let minLat = Infinity
        let maxLat = -Infinity

        const scanCoords = (c: unknown) => {
          if (Array.isArray(c)) {
            if (typeof c[0] === "number" && typeof c[1] === "number") {
              minLon = Math.min(minLon, c[0])
              maxLon = Math.max(maxLon, c[0])
              minLat = Math.min(minLat, c[1])
              maxLat = Math.max(maxLat, c[1])
            } else {
              c.forEach(scanCoords)
            }
          }
        }

        geojson.features.forEach((feature) => {
          scanCoords(feature.geometry.coordinates)
        })

        const stateCenterLon = isFinite(minLon) ? (minLon + maxLon) / 2 : centerLon
        const stateCenterLat = isFinite(minLat) ? (minLat + maxLat) / 2 : centerLat
        const spanLon = maxLon - minLon
        const spanLat = maxLat - minLat
        const maxSpan = Math.max(spanLon, spanLat)

        // Standard state 3D span: 3.5 units (ensures full state visibility with generous ~15-20% margin)
        const TARGET_SPAN_3D = 3.5
        const activeScale = maxSpan > 0 ? TARGET_SPAN_3D / maxSpan : 1.0

        setStateProjection({
          cLon: stateCenterLon,
          cLat: stateCenterLat,
          scale: activeScale,
        })

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
              const coords = feature.geometry.coordinates as Coordinate[][]
              if (coords.length > 0) {
                shapes.push(createDistrictShape(coords[0], stateCenterLon, stateCenterLat, activeScale))
                coords[0].forEach(([lon, lat]) => {
                  const [px, py] = projectCoord([lon, lat], stateCenterLon, stateCenterLat, activeScale)
                  sumX += px
                  sumY += py
                  pointCount++
                })
              }
            } else if (feature.geometry.type === "MultiPolygon") {
              const coords = feature.geometry.coordinates as Coordinate[][][]
              coords.forEach((poly) => {
                if (poly.length > 0) {
                  shapes.push(createDistrictShape(poly[0], stateCenterLon, stateCenterLat, activeScale))
                  poly[0].forEach(([lon, lat]) => {
                    const [px, py] = projectCoord([lon, lat], stateCenterLon, stateCenterLat, activeScale)
                    sumX += px
                    sumY += py
                    pointCount++
                  })
                }
              })
            }

            const centroid: [number, number] =
              pointCount > 0 ? [sumX / pointCount, sumY / pointCount] : [0, 0]

            return {
              id: `district-${index}`,
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
        console.error("Error loading state GeoJSON:", err)
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [geojsonUrl, centerLon, centerLat, scale])

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
    onDistrictSelect?.(name)
  }

  const handleSelectPin = (pin: LandmarkPin) => {
    setInternalSelectedDistrict(pin.district)
    onDistrictSelect?.(pin.district)
    onLandmarkSelect?.(pin)
  }

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const effectiveTarget = useMemo<[number, number, number]>(() => {
    return [0, 0, 0]
  }, [])

  const effectiveCamPos = useMemo<[number, number, number]>(() => {
    if (!isMobile) return [0, 0, 5.8]
    const distMult = typeof window !== "undefined" && window.innerWidth < 480 ? 1.35 : 1.2
    return [0, 0, 6.6 * distMult]
  }, [isMobile])

  const effectiveFov = useMemo(() => {
    if (!isMobile) return 38
    return typeof window !== "undefined" && window.innerWidth < 480 ? 46 : 42
  }, [isMobile])

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.target.set(effectiveTarget[0], effectiveTarget[1], effectiveTarget[2])
      controlsRef.current.object.position.set(effectiveCamPos[0], effectiveCamPos[1], effectiveCamPos[2])
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
        <PerspectiveCamera makeDefault position={effectiveCamPos} fov={effectiveFov} />

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
          target={effectiveTarget}
          enableRotate={true}
          enablePan={false}
          enableZoom={false}
          minDistance={3.2}
          maxDistance={11}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 6}
          dampingFactor={0.06}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN,
          }}
        />

        <StateScene
          districts={districts}
          landmarks={landmarks}
          centerLon={stateProjection.cLon}
          centerLat={stateProjection.cLat}
          scale={stateProjection.scale}
          hoveredDistrict={hoveredDistrict}
          selectedDistrict={selectedDistrict}
          target={effectiveTarget}
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
          {districtsData && districtsData[tooltip.name] && (
            <span className="tooltip-sub">
              {districtsData[tooltip.name].tagline}
            </span>
          )}
        </div>
      )}

      {/* ================= LOADING INDICATOR ================= */}
      {loading && (
        <div className="bihar-map-loading">
          <div className="loading-spinner" />
          <span>Extruding 3D District Boundaries...</span>
        </div>
      )}
    </div>
  )
}
