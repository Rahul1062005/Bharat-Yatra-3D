import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber"

import type {
  ThreeEvent,
} from "@react-three/fiber"

import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"

import * as THREE from "three"
import { statesRegistry } from "../../data/states"
import { getStateTheme } from "../../data/stateThemes"


/* =========================================================
   TYPES
========================================================= */

type Coordinate = [
  number,
  number,
]

type PolygonGeometry = {
  type: "Polygon"
  coordinates: Coordinate[][]
}

type MultiPolygonGeometry = {
  type: "MultiPolygon"
  coordinates: Coordinate[][][]
}

type StateGeometry =
  | PolygonGeometry
  | MultiPolygonGeometry

type StateFeature = {
  type: "Feature"

  properties?: Record<
    string,
    unknown
  >

  geometry: StateGeometry
}

type IndiaGeoJSON = {
  type: "FeatureCollection"

  features: StateFeature[]
}

type StateData = {
  id: string
  name: string
  geometry: StateGeometry
}

type TooltipData = {
  visible: boolean
  name: string
  x: number
  y: number
}


/* =========================================================
   MAP CONFIGURATION
========================================================= */

const SCALE = 0.145

const CENTER_LON = 79

const CENTER_LAT = 22


/* =========================================================
   MAP COLORS — VIBRANT CULTURAL TAPESTRY OF BHARAT
========================================================= */

export const DEFAULT_TOP_COLOR = "#fef3c7"
const SIDE_COLOR = "#1c2b45"
const HOVER_COLOR = "#f59e0b"
const HOVER_EMISSIVE = "#ea580c"
const HOVER_SIDE_COLOR = "#92400e"

// Cultural pastel base colors for all 36 Indian states & union territories
export const STATE_BASE_COLORS: Record<string, string> = {
  bihar: "#fef3c7",              // Mithila Ochre Sandstone
  maharashtra: "#ffedd5",        // Sahyadri Saffron Apricot
  "uttar-pradesh": "#fed7aa",    // Awadhi Golden Sandstone
  rajasthan: "#fce7f3",          // Jaipur Rose Pink
  kerala: "#dcfce7",             // Malabar Backwater Mint
  gujarat: "#ccfbf1",            // Kutch Seafoam Turquoise
  "west-bengal": "#ffe4e6",      // Kalighat Coral-Terracotta
  "tamil-nadu": "#fef08a",       // Thanjavur Temple Turmeric
  karnataka: "#ede9fe",          // Mysore Lavender-Indigo
  punjab: "#fef9c3",             // Mustard Gold Wheat
  "madhya-pradesh": "#fed7aa",   // Narmada Clay Sandstone
  odisha: "#ffedd5",             // Puri Golden Sand
  "andhra-pradesh": "#fef08a",   // Coastal Amber Gold
  telangana: "#fde68a",          // Kakatiya Warm Saffron
  assam: "#d1fae5",              // Brahmaputra Tea Valley Green
  haryana: "#fef08a",            // Wheatland Gold
  "himachal-pradesh": "#e0f2fe", // Himalayan Pine Sky Blue
  uttarakhand: "#dbeafe",        // Devbhoomi Snow Peak Blue
  goa: "#fef3c7",                // Mandovi Coastal Sand
  "jammu-kashmir": "#ede9fe",    // Kashmir Saffron Orchid
  jharkhand: "#fed7aa",          // Chota Nagpur Ochre
  chhattisgarh: "#ffedd5",       // Bastar Teak Clay
  sikkim: "#dcfce7",             // Kanchenjunga Alpine Green
  meghalaya: "#ccfbf1",          // Khasi Cloud Mist
  manipur: "#fbcfe8",            // Loktak Lotus Pink
  nagaland: "#fef08a",           // Hornbill Ochre
  tripura: "#d1fae5",            // Bamboo Grove Mint
  mizoram: "#e0e7ff",            // Blue Mountain Fog
  "arunachal-pradesh": "#dbeafe",// Dawnlit Peak Glacier Blue
  ladakh: "#e2e8f0",             // High Pass Slate Sand
  delhi: "#fde68a",              // Imperial Sandstone Gold
  "andaman-nicobar": "#99f6e4",  // Coral Reef Turquoise
  lakshadweep: "#a5f3fc",        // Lagoon Aquamarine
  puducherry: "#ffe4e6",         // French Quarter Pastel
  chandigarh: "#fef9c3",         // Modernist Sunbeam
  "dadra-nagar-haveli-daman-diu": "#fef3c7"
}

const STATE_FALLBACK_PALETTE = [
  "#fef3c7", "#ffedd5", "#fce7f3", "#ccfbf1", "#dcfce7",
  "#ffe4e6", "#fef08a", "#ede9fe", "#fed7aa", "#dbeafe",
  "#d1fae5", "#e0f2fe", "#fbcfe8", "#e0e7ff", "#99f6e4"
]

export function getStateBaseColor(stateName: string, stateIndex: number): string {
  const slug = stateName.toLowerCase().replace(/[^a-z0-9]/g, "-")
  if (STATE_BASE_COLORS[slug]) return STATE_BASE_COLORS[slug]
  for (const [key, color] of Object.entries(STATE_BASE_COLORS)) {
    if (slug.includes(key) || key.includes(slug)) return color
  }
  return STATE_FALLBACK_PALETTE[stateIndex % STATE_FALLBACK_PALETTE.length]
}

const STATE_BORDER_COLORS = [
  "#d97706",
  "#c2410c",
  "#b45309",
  "#0d9488",
  "#047857",
  "#b91c1c",
  "#be185d",
  "#ca8a04",
  "#2563eb",
  "#4f46e5",
  "#0891b2",
  "#ea580c"
]


/* =========================================================
   BACKGROUND COLORS
========================================================= */

const BACKGROUND_TOP = "#416fc2"

const BACKGROUND_MIDDLE = "#2d55a0"

const BACKGROUND_BOTTOM = "#182f68"


/* =========================================================
   GET STATE NAME
========================================================= */

function getStateName(
  properties:
    | Record<string, unknown>
    | undefined,
  index: number,
): string {

  if (!properties) {
    return `State ${index + 1}`
  }


  const possibleNames = [
    properties.ST_NM,
    properties.STNAME,
    properties.NAME_1,
    properties.NAME,
    properties.name,
    properties.State,
    properties.state,
    properties.state_name,
    properties.STATE_NAME,
    properties.STATE,
  ]


  for (
    const value of possibleNames
  ) {

    if (
      typeof value ===
        "string" &&
      value.trim().length > 0
    ) {
      return value.trim()
    }

  }


  return `State ${index + 1}`
}


/* =========================================================
   GEOJSON PROJECTION
========================================================= */

function projectCoordinate(
  coordinate: Coordinate,
): [number, number] {

  const [
    longitude,
    latitude,
  ] = coordinate


  const x =
    (longitude -
      CENTER_LON) *
    SCALE


  const y =
    (latitude -
      CENTER_LAT) *
    SCALE


  return [
    x,
    y,
  ]
}


/* =========================================================
   CREATE THREE.JS SHAPE
========================================================= */

function createShapeFromRing(
  ring: Coordinate[],
): THREE.Shape {

  const shape =
    new THREE.Shape()


  if (
    ring.length === 0
  ) {
    return shape
  }


  const [
    firstX,
    firstY,
  ] =
    projectCoordinate(
      ring[0],
    )


  shape.moveTo(
    firstX,
    firstY,
  )


  for (
    let i = 1;
    i < ring.length;
    i += 1
  ) {

    const [
      x,
      y,
    ] =
      projectCoordinate(
        ring[i],
      )


    shape.lineTo(
      x,
      y,
    )
  }


  shape.closePath()


  return shape
}


/* =========================================================
   CREATE 3D EXTRUSION
========================================================= */

function createExtrudedGeometry(
  geometry: StateGeometry,
  depth: number = 0.32,
): THREE.ExtrudeGeometry | null {

  const shapes: THREE.Shape[] =
    []


  /* =======================================================
     POLYGON
  ======================================================= */

  if (
    geometry.type ===
    "Polygon"
  ) {

    const rings =
      geometry.coordinates


    if (
      rings.length === 0
    ) {
      return null
    }


    const outerRing =
      rings[0]


    if (
      outerRing.length < 3
    ) {
      return null
    }


    const shape =
      createShapeFromRing(
        outerRing,
      )


    for (
      let i = 1;
      i < rings.length;
      i += 1
    ) {

      const holeRing =
        rings[i]


      if (
        holeRing.length < 3
      ) {
        continue
      }


      shape.holes.push(
        createShapeFromRing(
          holeRing,
        ),
      )
    }


    shapes.push(
      shape,
    )
  }


  /* =======================================================
     MULTIPOLYGON
  ======================================================= */

  if (
    geometry.type ===
    "MultiPolygon"
  ) {

    for (
      const polygon of
        geometry.coordinates
    ) {

      if (
        polygon.length === 0
      ) {
        continue
      }


      const outerRing =
        polygon[0]


      if (
        outerRing.length < 3
      ) {
        continue
      }


      const shape =
        createShapeFromRing(
          outerRing,
        )


      for (
        let i = 1;
        i < polygon.length;
        i += 1
      ) {

        const holeRing =
          polygon[i]


        if (
          holeRing.length < 3
        ) {
          continue
        }


        shape.holes.push(
          createShapeFromRing(
            holeRing,
          ),
        )
      }


      shapes.push(
        shape,
      )
    }
  }


  if (
    shapes.length === 0
  ) {
    return null
  }


  /* =======================================================
     EXTRUDE
  ======================================================= */

  const geometry3D =
    new THREE.ExtrudeGeometry(
      shapes,
      {
        depth,

        bevelEnabled: false,
      },
    )


  /*
   * Convert GeoJSON XY plane
   * into XZ 3D plane.
   */
  geometry3D.rotateX(
    -Math.PI / 2,
  )


  geometry3D.computeVertexNormals()


  return geometry3D
}


/* =========================================================
   BORDER POINTS
========================================================= */

function ringToLinePoints(
  ring: Coordinate[],
  height: number = 0.323,
): THREE.Vector3[] {

  const points: THREE.Vector3[] =
    []


  for (
    const coordinate of ring
  ) {

    const [
      x,
      y,
    ] =
      projectCoordinate(
        coordinate,
      )


    /*
     * Border is raised slightly above
     * the map surface (0.32) so it remains
     * clearly visible without z-fighting.
     */
    points.push(
      new THREE.Vector3(
        x,
        height,
        -y,
      ),
    )
  }


  return points
}


/* =========================================================
   GET BORDER RINGS
========================================================= */

function getBorderRings(
  geometry: StateGeometry,
): Coordinate[][] {

  if (
    geometry.type ===
    "Polygon"
  ) {
    return geometry.coordinates
  }


  const rings: Coordinate[][] =
    []


  for (
    const polygon of
      geometry.coordinates
  ) {

    for (
      const ring of polygon
    ) {

      rings.push(
        ring,
      )
    }
  }


  return rings
}


/* =========================================================
   STATE BORDER LINES
========================================================= */

function StateBorderLines({
  borderRings,
  color,
  surfaceHeight = 0.323,
}: {
  borderRings: Coordinate[][]
  color: string
  surfaceHeight?: number
}) {
  const geometries = useMemo(() => {
    return borderRings
      .filter((ring) => ring.length >= 2)
      .map((ring) => {
        const points = ringToLinePoints(ring, surfaceHeight)
        return new THREE.BufferGeometry().setFromPoints(points)
      })
  }, [borderRings, surfaceHeight])

  useEffect(() => {
    return () => {
      geometries.forEach((geom) => geom.dispose())
    }
  }, [geometries])

  return (
    <group renderOrder={10}>
      {geometries.map((geometry, index) => (
        <lineLoop key={index} geometry={geometry}>
          <lineBasicMaterial
            color={color}
            depthTest={true}
            depthWrite={false}
          />
        </lineLoop>
      ))}
    </group>
  )
}


/* =========================================================
   STATE 3D OBJECT
========================================================= */

function StateShape({
  state,
  stateIndex,
  selected,
  onHover,
  onLeave,
  onSelect,
}: {
  state: StateData

  stateIndex: number

  selected: boolean

  onHover: (
    event: ThreeEvent<PointerEvent>,
    name: string,
  ) => void

  onLeave: () => void

  onSelect: (
    event: ThreeEvent<MouseEvent>,
    name: string,
  ) => void
}) {

  const isLakshadweep =
    state.name.toLowerCase().includes("lakshadweep")

  const isAndaman =
    state.name.toLowerCase().includes("andaman")

  const isIsland =
    isLakshadweep || isAndaman

  const depth =
    isLakshadweep ? 0.12 : isAndaman ? 0.16 : 0.32

  const surfaceHeight =
    depth + 0.003

  /* =======================================================
     EXTRUDED GEOMETRY
  ======================================================= */

  const geometry =
    useMemo(
      () =>
        createExtrudedGeometry(
          state.geometry,
          depth,
        ),
      [
        state.geometry,
        depth,
      ],
    )


  /* =======================================================
     STATE BOUNDARIES
  ======================================================= */

  const borderRings =
    useMemo(
      () =>
        getBorderRings(
          state.geometry,
        ),
      [
        state.geometry,
      ],
    )


  /* =======================================================
     HOVER & ELEVATION DAMPING (3D POP-UP EFFECT)
  ======================================================= */

  const [hovered, setHovered] = useState(false)
  const groupRef = useRef<THREE.Group>(null)

  // Smooth pop-up 3D elevation animation on hover or selection
  useFrame((_, delta) => {
    if (!groupRef.current) return
    const isElevated = hovered || selected
    const targetY = isElevated ? (isIsland ? 0.22 : 0.38) : 0
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY,
      14,
      delta
    )
  })

  /* =======================================================
     CLEANUP
  ======================================================= */

  useEffect(() => {
    return () => {
      geometry?.dispose()
    }
  }, [geometry])

  if (!geometry) {
    return null
  }

  /* =======================================================
     COLOR & THEME
  ======================================================= */

  const baseColor = getStateBaseColor(state.name, stateIndex)
  const currentColor = (hovered || selected) ? HOVER_COLOR : baseColor

  const borderColor =
    STATE_BORDER_COLORS[
      stateIndex % STATE_BORDER_COLORS.length
    ]

  return (
    <group ref={groupRef}>
      {/* =================================================
         STATE BODY (WITH DYNAMIC CAST SHADOW ON POP-UP)
      ================================================= */}
      <mesh
        geometry={geometry}
        castShadow
        receiveShadow
        onPointerEnter={(event) => {
          event.stopPropagation()
          setHovered(true)
          onHover(event, state.name)
        }}
        onPointerMove={(event) => {
          event.stopPropagation()
          onHover(event, state.name)
        }}
        onPointerLeave={(event) => {
          event.stopPropagation()
          setHovered(false)
          onLeave()
        }}
        onClick={(event) => {
          event.stopPropagation()
          onSelect(event, state.name)
        }}
      >
        {/* TOP SURFACE */}
        <meshStandardMaterial
          attach="material-0"
          color={currentColor}
          roughness={hovered || selected ? 0.3 : 0.46}
          metalness={hovered || selected ? 0.08 : 0.02}
          emissive={hovered || selected ? HOVER_EMISSIVE : "#000000"}
          emissiveIntensity={hovered || selected ? 0.42 : 0}
          side={THREE.DoubleSide}
          polygonOffset
          polygonOffsetFactor={1}
          polygonOffsetUnits={1}
        />

        {/* 3D SIDES - ELEGANT BRONZE/AMBER ON POP-UP */}
        <meshStandardMaterial
          attach="material-1"
          color={hovered || selected ? HOVER_SIDE_COLOR : SIDE_COLOR}
          roughness={0.62}
          metalness={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* =================================================
         STATE BOUNDARIES (ELEVATE TOGETHER WITH STATE)
      ================================================= */}
      <StateBorderLines
        borderRings={borderRings}
        surfaceHeight={surfaceHeight}
        color={hovered || selected ? "#c2410c" : borderColor}
      />
    </group>
  )
}


/* =========================================================
   MAP ENTRANCE CAMERA CONTROLLER
========================================================= */

function MapEntranceController({
  animateEntrance,
}: {
  animateEntrance: boolean
}) {
  const { camera } = useThree()
  const progressRef = useRef(animateEntrance ? 0 : 1)
  const isAnimatingRef = useRef(animateEntrance)

  useFrame((_, delta) => {
    if (!isAnimatingRef.current) return

    progressRef.current = Math.min(progressRef.current + delta * 1.15, 1)
    const t = progressRef.current
    const ease = 1 - Math.pow(1 - t, 3)

    camera.position.x = 0
    camera.position.y = 10.4 + (7.6 - 10.4) * ease
    camera.position.z = 4.0 + (5.1 - 4.0) * ease
    camera.lookAt(0, 0, 0)

    if (t >= 1) {
      isAnimatingRef.current = false
    }
  })

  return null
}

/* =========================================================
   STATE DIVE CAMERA CONTROLLER
   Smoothly swoops camera down into Bihar's coordinates
========================================================= */

function StateDiveCamera({
  divingState,
  onComplete,
}: {
  divingState: string | null
  onComplete?: () => void
}) {
  const { camera } = useThree()
  const isDivingRef = useRef(false)
  const progressRef = useRef(0)
  const startPosRef = useRef<THREE.Vector3 | null>(null)
  const targetCamPosRef = useRef<THREE.Vector3 | null>(null)
  const startLookRef = useRef<THREE.Vector3 | null>(null)
  const targetLookRef = useRef<THREE.Vector3 | null>(null)

  useEffect(() => {
    if (!divingState) return

    let targetX = 0
    let targetY = 0
    let shouldDive = false

    if (/bihar/i.test(divingState)) {
      targetX = 0.97
      targetY = 0.55
      shouldDive = true
    } else if (/maharashtra/i.test(divingState)) {
      targetX = -0.32
      targetY = -0.36
      shouldDive = true
    } else if (/uttar pradesh/i.test(divingState)) {
      targetX = 0.28
      targetY = 0.74
      shouldDive = true
    } else if (/rajasthan/i.test(divingState)) {
      targetX = -0.72
      targetY = 0.65
      shouldDive = true
    } else if (/kerala/i.test(divingState)) {
      targetX = -0.40
      targetY = -1.67
      shouldDive = true
    } else if (/gujarat/i.test(divingState)) {
      targetX = -1.12
      targetY = 0.06
      shouldDive = true
    } else if (/west bengal/i.test(divingState)) {
      targetX = 1.28
      targetY = 0.34
      shouldDive = true
    } else if (/tamil nadu/i.test(divingState)) {
      targetX = -0.09
      targetY = -1.60
      shouldDive = true
    } else if (/karnataka/i.test(divingState)) {
      targetX = -0.46
      targetY = -1.04
      shouldDive = true
    } else if (/punjab/i.test(divingState)) {
      targetX = -0.52
      targetY = 1.30
      shouldDive = true
    } else if (/madhya pradesh/i.test(divingState)) {
      targetX = 0.02
      targetY = 0.20
      shouldDive = true
    } else if (/odisha/i.test(divingState)) {
      targetX = 0.85
      targetY = -0.32
      shouldDive = true
    } else if (/andhra pradesh/i.test(divingState)) {
      targetX = 0.32
      targetY = -0.92
      shouldDive = true
    } else if (/telangana/i.test(divingState)) {
      targetX = 0.14
      targetY = -0.64
      shouldDive = true
    } else if (/assam/i.test(divingState)) {
      targetX = 2.01
      targetY = 0.50
      shouldDive = true
    } else if (/haryana/i.test(divingState)) {
      targetX = -0.35
      targetY = 0.95
      shouldDive = true
    } else if (/himachal pradesh/i.test(divingState)) {
      targetX = -0.17
      targetY = 1.30
      shouldDive = true
    } else if (/uttarakhand/i.test(divingState)) {
      targetX = 0.11
      targetY = 1.06
      shouldDive = true
    } else if (/goa/i.test(divingState)) {
      targetX = -0.63
      targetY = -0.99
      shouldDive = true
    } else if (/jammu/i.test(divingState) || /kashmir/i.test(divingState)) {
      targetX = -0.42
      targetY = 1.57
      shouldDive = true
    } else if (/jharkhand/i.test(divingState)) {
      targetX = 0.99
      targetY = 0.17
      shouldDive = true
    } else if (/chhattisgarh/i.test(divingState)) {
      targetX = 0.53
      targetY = -0.22
      shouldDive = true
    } else if (/sikkim/i.test(divingState)) {
      targetX = 1.40
      targetY = 0.71
      shouldDive = true
    } else if (/meghalaya/i.test(divingState)) {
      targetX = 1.79
      targetY = 0.42
      shouldDive = true
    } else if (/manipur/i.test(divingState)) {
      targetX = 2.15
      targetY = 0.32
      shouldDive = true
    } else if (/nagaland/i.test(divingState)) {
      targetX = 2.21
      targetY = 0.50
      shouldDive = true
    } else if (/tripura/i.test(divingState)) {
      targetX = 1.85
      targetY = 0.17
      shouldDive = true
    } else if (/mizoram/i.test(divingState)) {
      targetX = 2.00
      targetY = 0.10
      shouldDive = true
    } else if (/arunachal/i.test(divingState)) {
      targetX = 2.24
      targetY = 0.78
      shouldDive = true
    } else if (/ladakh/i.test(divingState)) {
      targetX = -0.15
      targetY = 1.60
      shouldDive = true
    } else if (/delhi/i.test(divingState)) {
      targetX = -0.20
      targetY = 0.85
      shouldDive = true
    } else if (/andaman/i.test(divingState) || /nicobar/i.test(divingState)) {
      targetX = 2.06
      targetY = -1.62
      shouldDive = true
    } else if (/lakshadweep/i.test(divingState)) {
      targetX = -0.88
      targetY = -1.74
      shouldDive = true
    } else if (/puducherry/i.test(divingState) || /pondicherry/i.test(divingState)) {
      targetX = 0.12
      targetY = -1.46
      shouldDive = true
    } else if (/chandigarh/i.test(divingState)) {
      targetX = -0.32
      targetY = 1.27
      shouldDive = true
    } else if (/dadra/i.test(divingState) || /daman/i.test(divingState) || /diu/i.test(divingState)) {
      targetX = -1.01
      targetY = -0.23
      shouldDive = true
    }

    if (shouldDive) {
      isDivingRef.current = true
      progressRef.current = 0
      startPosRef.current = camera.position.clone()

      targetCamPosRef.current = new THREE.Vector3(targetX, 2.2, 1.35)
      startLookRef.current = new THREE.Vector3(0, 0, 0)
      targetLookRef.current = new THREE.Vector3(targetX, targetY, 0.1)
    }
  }, [divingState, camera])

  useFrame((_, delta) => {
    if (
      !isDivingRef.current ||
      !startPosRef.current ||
      !targetCamPosRef.current ||
      !targetLookRef.current
    )
      return

    progressRef.current = Math.min(progressRef.current + delta * 1.15, 1)
    const t = progressRef.current
    // Smooth cubic in-out ease
    const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    camera.position.lerpVectors(startPosRef.current, targetCamPosRef.current, ease)
    const currentLook = new THREE.Vector3().lerpVectors(
      startLookRef.current || new THREE.Vector3(),
      targetLookRef.current,
      ease
    )
    camera.lookAt(currentLook)

    if (t >= 1) {
      isDivingRef.current = false
      if (onComplete) onComplete()
    }
  })

  return null
}



/* =========================================================
   STATES ELEVATION GROUP
========================================================= */

function StatesElevationGroup({
  states,
  selectedState,
  onHover,
  onLeave,
  onSelect,
  animateEntrance,
}: {
  states: StateData[]
  selectedState: string | null
  onHover: (
    event: ThreeEvent<PointerEvent>,
    name: string,
  ) => void
  onLeave: () => void
  onSelect: (
    event: ThreeEvent<MouseEvent>,
    name: string,
  ) => void
  animateEntrance: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)
  const progressRef = useRef(animateEntrance ? 0 : 1)
  const isDoneRef = useRef(!animateEntrance)

  useFrame((_, delta) => {
    if (isDoneRef.current || !groupRef.current) return

    progressRef.current = Math.min(progressRef.current + delta * 1.25, 1)
    const t = progressRef.current
    const ease = 1 - Math.pow(1 - t, 3)

    // Smoothly elevate 3D depth from 0.04 up to full 1.0 height
    const currentYScale = Math.max(0.04, ease)
    groupRef.current.scale.set(1.15, currentYScale * 1.15, 1.15)

    if (t >= 1) {
      isDoneRef.current = true
      groupRef.current.scale.set(1.15, 1.15, 1.15)
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={[1.15, 1.15, 1.15]}>
      {states.map((state, index) => (
        <StateShape
          key={state.id}
          state={state}
          stateIndex={index}
          selected={selectedState === state.name}
          onHover={onHover}
          onLeave={onLeave}
          onSelect={onSelect}
        />
      ))}
    </group>
  )
}


/* =========================================================
   RESPONSIVE INDIA CAMERA HOOK FOR MOBILE
   Guarantees zero cropping in portrait orientation while
   preserving 100% exact desktop coordinates on PC.
========================================================= */

function ResponsiveIndiaCamera({ animateEntrance }: { animateEntrance?: boolean }) {
  const { camera, size } = useThree()

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      const aspect = size.width / size.height
      if (aspect < 0.75) {
        // Mobile portrait: back camera up and expand FOV so all of India fits comfortably
        camera.fov = 48
        camera.position.set(0, 10.5, 7.2)
      } else if (aspect < 1.1) {
        // Tablet / square
        camera.fov = 40
        camera.position.set(0, 8.8, 5.8)
      } else {
        // Desktop widescreen: 100% exact original position & FOV
        camera.fov = 34
        camera.position.set(0, animateEntrance ? 10.4 : 7.6, animateEntrance ? 4.0 : 5.1)
      }
      camera.updateProjectionMatrix()
    }
  }, [size.width, size.height, animateEntrance, camera])

  return null
}


/* =========================================================
   INDIA 3D SCENE
========================================================= */

function IndiaScene({
  states,
  selectedState,
  onHover,
  onLeave,
  onSelect,
  animateEntrance = false,
  divingState = null,
  onDiveComplete,
}: {
  states: StateData[]

  selectedState:
    | string
    | null

  onHover: (
    event: ThreeEvent<PointerEvent>,
    name: string,
  ) => void

  onLeave: () => void

  onSelect: (
    event: ThreeEvent<MouseEvent>,
    name: string,
  ) => void

  animateEntrance?: boolean
  divingState?: string | null
  onDiveComplete?: () => void
}) {

  return (
    <>

      {/* =================================================
         CAMERA
         
         KEEPING THE CURRENT SIZE
      ================================================= */}

      <PerspectiveCamera
        makeDefault
        position={
          animateEntrance
            ? [0, 10.4, 4.0]
            : [0, 7.6, 5.1]
        }
        fov={
          34
        }
        near={
          0.1
        }
        far={
          100
        }
      />

      <ResponsiveIndiaCamera animateEntrance={animateEntrance} />
      <MapEntranceController animateEntrance={animateEntrance} />
      <StateDiveCamera divingState={divingState} onComplete={onDiveComplete} />


      {/* =================================================
         LIGHTING
         
         UNCHANGED
      ================================================= */}

      <ambientLight
        intensity={
          1.05
        }
      />


      <hemisphereLight
        intensity={
          1.15
        }

        color={
          "#ffffff"
        }

        groundColor={
          "#18356f"
        }
      />


      <directionalLight
        position={[
          -6,
          12,
          7,
        ]}

        intensity={
          3.0
        }

        color={
          "#fff8e8"
        }

        castShadow

        shadow-mapSize-width={
          2048
        }

        shadow-mapSize-height={
          2048
        }

        shadow-camera-left={
          -15
        }

        shadow-camera-right={
          15
        }

        shadow-camera-top={
          15
        }

        shadow-camera-bottom={
          -15
        }

        shadow-bias={
          -0.0005
        }
      />


      <directionalLight
        position={[
          8,
          7,
          -6,
        ]}

        intensity={
          1.25
        }

        color={
          "#8fb8ff"
        }
      />


      <pointLight
        position={[
          0,
          6,
          6,
        ]}

        intensity={
          7
        }

        distance={
          24
        }

        decay={
          2
        }

        color={
          "#dbeafe"
        }
      />


      {/* =================================================
         INDIA ELEVATION GROUP
      ================================================= */}

      <StatesElevationGroup
        states={states}
        selectedState={selectedState}
        onHover={onHover}
        onLeave={onLeave}
        onSelect={onSelect}
        animateEntrance={animateEntrance}
      />


      {/* =================================================
         ORBIT CONTROLS
         
         ROTATION = ON
         ZOOM = OFF
         PAN = OFF
      ================================================= */}

      <OrbitControls
        enabled={
          !divingState
        }

        enablePan={
          false
        }

        enableZoom={
          false
        }

        enableRotate={
          true
        }

        target={[
          0,
          0,
          0,
        ]}

        minPolarAngle={
          Math.PI / 4.5
        }

        maxPolarAngle={
          Math.PI / 2.12
        }

        enableDamping={
          true
        }

        dampingFactor={
          0.08
        }

        rotateSpeed={
          0.38
        }

        touches={{
          ONE:
            THREE.TOUCH.ROTATE,

          TWO:
            THREE.TOUCH.ROTATE,
        }}

        mouseButtons={{
          LEFT:
            THREE.MOUSE.ROTATE,

          MIDDLE:
            THREE.MOUSE.PAN,

          RIGHT:
            THREE.MOUSE.ROTATE,
        }}
      />


      {/* =================================================
         SHADOW GROUND
      ================================================= */}

      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}

        position={[
          0,
          -0.78,
          0,
        ]}

        receiveShadow
      >

        <planeGeometry
          args={[
            45,
            45,
          ]}
        />

        <shadowMaterial
          transparent

          opacity={
            0.25
          }
        />

      </mesh>

    </>
  )
}


/* =========================================================
   OPTIMIZE ISLAND GEOMETRY
   Filters sub-pixel micro specks that cast tall needle
   shadows and gently scales the primary islands so they
   render with recognizable land area and clean outlines.
========================================================= */

function optimizeIslandGeometry(
  geometry: StateGeometry,
  isLakshadweep: boolean,
): StateGeometry {
  const coords: Coordinate[][][] =
    geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates

  const minArea = isLakshadweep ? 0.000003 : 0.00002
  const scaleMult = isLakshadweep ? 3.0 : 1.35
  const minHalfWidth = isLakshadweep ? 0.006 : 0.002

  const newPolygons: Coordinate[][][] = []

  for (const polygon of coords) {
    if (polygon.length === 0) continue
    const outerRing = polygon[0]
    if (outerRing.length < 5) continue

    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    let sumX = 0
    let sumY = 0

    for (const c of outerRing) {
      const [x, y] = projectCoordinate(c)
      sumX += x
      sumY += y
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }

    const area = (maxX - minX) * (maxY - minY)
    if (area < minArea) continue

    const cx = sumX / outerRing.length
    const cy = sumY / outerRing.length
    const halfWidth = Math.max(maxX - minX, 0.0001) / 2
    const widthBoost = halfWidth < minHalfWidth ? minHalfWidth / halfWidth : 1

    const scaledRing: Coordinate[] = outerRing.map((c) => {
      const [x, y] = projectCoordinate(c)
      const nx = cx + (x - cx) * scaleMult * widthBoost
      const ny = cy + (y - cy) * scaleMult
      return [nx / SCALE + CENTER_LON, ny / SCALE + CENTER_LAT]
    })

    newPolygons.push([scaledRing])
  }

  return {
    type: "MultiPolygon",
    coordinates: newPolygons,
  }
}


/* =========================================================
   GEOJSON PRELOADING & IN-MEMORY CACHE
========================================================= */

let cachedStatesData: StateData[] | null = null
let stateLoadPromise: Promise<StateData[]> | null = null

export function preloadIndiaMapData(): Promise<StateData[]> {
  if (cachedStatesData) {
    return Promise.resolve(cachedStatesData)
  }
  if (stateLoadPromise) {
    return stateLoadPromise
  }
  stateLoadPromise = fetch("/data/india-states.geojson")
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load India GeoJSON: ${res.status}`)
      return res.json() as Promise<IndiaGeoJSON>
    })
    .then((data) => {
      const loadedStates: StateData[] = data.features
        .map((feature, index) => {
          const name = getStateName(feature.properties, index)
          let geometry = feature.geometry

          if (name.toLowerCase().includes("lakshadweep")) {
            geometry = optimizeIslandGeometry(geometry, true)
          } else if (name.toLowerCase().includes("andaman")) {
            geometry = optimizeIslandGeometry(geometry, false)
          }

          return {
            id: `state-${index}`,
            name,
            geometry,
          }
        })
        .filter(
          (state) =>
            state.geometry.type === "Polygon" ||
            state.geometry.type === "MultiPolygon",
        )

      cachedStatesData = loadedStates
      return loadedStates
    })
    .catch((err) => {
      stateLoadPromise = null
      throw err
    })

  return stateLoadPromise
}


/* =========================================================
   MAIN INDIA MAP
========================================================= */

export const ACTIVE_STATES_REGEX =
  /bihar|maharashtra|uttar pradesh|rajasthan|kerala|gujarat|west bengal|tamil nadu|karnataka|punjab|madhya pradesh|odisha|andhra pradesh|telangana|assam|haryana|himachal pradesh|uttarakhand|goa|jammu|kashmir|jharkhand|chhattisgarh|sikkim|meghalaya|manipur|nagaland|tripura|mizoram|arunachal|ladakh|delhi|andaman|nicobar|lakshadweep|puducherry|pondicherry|chandigarh|dadra|daman|diu/i

export interface IndiaMapProps {
  animateEntrance?: boolean
  onStateSelect?: (stateName: string) => void
  onStateDive?: (stateName: string) => void
  onHoverState?: (stateName: string | null) => void
}

export default function IndiaMap({
  animateEntrance = false,
  onStateSelect,
  onStateDive,
  onHoverState,
}: IndiaMapProps) {

  /* =======================================================
     STATES
  ======================================================= */

  const [
    states,
    setStates,
  ] = useState<StateData[]>(() => cachedStatesData || [])

  const [
    divingState,
    setDivingState,
  ] = useState<string | null>(null)


  /* =======================================================
     LOADING
  ======================================================= */

  const [
    loading,
    setLoading,
  ] = useState(() => !cachedStatesData)


  /* =======================================================
     SELECTED STATE
  ======================================================= */

  const [
    selectedState,
    setSelectedState,
  ] =
    useState<
      string | null
    >(null)


  /* =======================================================
     TOOLTIP
  ======================================================= */

  const [
    tooltip,
    setTooltip,
  ] =
    useState<TooltipData>({
      visible:
        false,

      name:
        "",

      x:
        0,

      y:
        0,
    })


  /* =======================================================
     MAP CONTAINER
  ======================================================= */

  const mapContainerRef =
    useRef<
      HTMLDivElement | null
    >(null)


  /* =======================================================
     BLOCK BROWSER WHEEL ZOOM
  ======================================================= */

  useEffect(() => {

    const container =
      mapContainerRef.current


    if (!container) {
      return
    }


    const preventWheelZoom = (
      event: WheelEvent,
    ) => {

      event.preventDefault()

    }


    container.addEventListener(
      "wheel",

      preventWheelZoom,

      {
        passive:
          false,
      },
    )


    return () => {

      container.removeEventListener(
        "wheel",

        preventWheelZoom,
      )

    }

  }, [])


  /* =======================================================
     BLOCK TOUCH / PINCH ZOOM
  ======================================================= */

  useEffect(() => {

    const container =
      mapContainerRef.current


    if (!container) {
      return
    }


    container.style.touchAction =
      "none"


    return () => {

      container.style.touchAction =
        ""

    }

  }, [])


  /* =======================================================
     LOAD INDIA GEOJSON
  ======================================================= */

  useEffect(() => {
    let cancelled = false

    if (cachedStatesData) {
      setStates(cachedStatesData)
      setLoading(false)
      return
    }

    setLoading(true)

    preloadIndiaMapData()
      .then((loaded) => {
        if (!cancelled) {
          setStates(loaded)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.error("Unable to load India map:", error)
        if (!cancelled) {
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])


  /* =======================================================
     HOVER
  ======================================================= */

  function handleHover(
    event: ThreeEvent<PointerEvent>,
    name: string,
  ) {
    setTooltip({
      visible: true,
      name: name,
      x: event.clientX + 18,
      y: event.clientY + 18,
    })
    onHoverState?.(name)
  }

  function handleLeave() {
    setTooltip((previous) => ({
      ...previous,
      visible: false,
    }))
    onHoverState?.(null)
  }


  /* =======================================================
     SELECT
  ======================================================= */

  function handleSelect(
    event: ThreeEvent<MouseEvent>,
    name: string,
  ) {

    event.stopPropagation()


    setSelectedState(
      name,
    )

    if (onStateSelect) {
      onStateSelect(name)
    }

    if (ACTIVE_STATES_REGEX.test(name)) {
      setDivingState(name)
      if (onStateDive) {
        onStateDive(name)
      }
    }


    console.log(
      "Selected state:",
      name,
    )

  }


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      ref={
        mapContainerRef
      }

      style={{
        position:
          "absolute",

        inset:
          0,

        width:
          "100%",

        height:
          "100%",

        overflow:
          "hidden",

        touchAction:
          "none",

        overscrollBehavior:
          "none",

        userSelect:
          "none",

        /*
         * CURRENT BRIGHT BACKGROUND
         * UNCHANGED
         */
        background:
          `radial-gradient(
            circle at 50% 43%,
            ${BACKGROUND_TOP} 0%,
            ${BACKGROUND_MIDDLE} 34%,
            ${BACKGROUND_BOTTOM} 72%,
            #0e1e49 100%
          )`,
      }}
    >

      {/* =================================================
         CENTRAL BLUE GLOW
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          left:
            "50%",

          top:
            "46%",

          width:
            "780px",

          height:
            "620px",

          transform:
            "translate(-50%, -50%)",

          borderRadius:
            "50%",

          background:
            "radial-gradient(circle, rgba(104, 163, 255, 0.32) 0%, rgba(67, 116, 207, 0.18) 35%, rgba(35, 65, 130, 0.04) 70%, transparent 100%)",

          filter:
            "blur(20px)",

          pointerEvents:
            "none",

          zIndex:
            0,
        }}
      />


      {/* =================================================
         SECOND GLOW
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          left:
            "50%",

          top:
            "65%",

          width:
            "1000px",

          height:
            "500px",

          transform:
            "translate(-50%, -50%)",

          borderRadius:
            "50%",

          background:
            "radial-gradient(ellipse, rgba(51, 102, 196, 0.22) 0%, transparent 68%)",

          filter:
            "blur(30px)",

          pointerEvents:
            "none",

          zIndex:
            0,
        }}
      />


      {/* =================================================
         ORBIT ARC
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          left:
            "50%",

          bottom:
            "-470px",

          width:
            "1500px",

          height:
            "720px",

          transform:
            "translateX(-50%)",

          border:
            "1px solid rgba(174, 204, 255, 0.25)",

          borderRadius:
            "50%",

          pointerEvents:
            "none",

          zIndex:
            1,
        }}
      />


      <div
        style={{
          position:
            "absolute",

          left:
            "50%",

          bottom:
            "-510px",

          width:
            "1650px",

          height:
            "780px",

          transform:
            "translateX(-50%)",

          border:
            "1px solid rgba(174, 204, 255, 0.13)",

          borderRadius:
            "50%",

          pointerEvents:
            "none",

          zIndex:
            1,
        }}
      />


      {/* =================================================
         ORBIT DOTS
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          left:
            "calc(50% - 720px)",

          bottom:
            "95px",

          width:
            "7px",

          height:
            "7px",

          borderRadius:
            "50%",

          background:
            "rgba(220, 231, 255, 0.75)",

          boxShadow:
            "0 0 14px rgba(191, 219, 254, 0.7)",

          pointerEvents:
            "none",

          zIndex:
            2,
        }}
      />


      <div
        style={{
          position:
            "absolute",

          left:
            "calc(50% + 510px)",

          bottom:
            "45px",

          width:
            "7px",

          height:
            "7px",

          borderRadius:
            "50%",

          background:
            "rgba(220, 231, 255, 0.75)",

          boxShadow:
            "0 0 14px rgba(191, 219, 254, 0.7)",

          pointerEvents:
            "none",

          zIndex:
            2,
        }}
      />


      {/* =================================================
         THREE.JS
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          inset:
            0,

          zIndex:
            5,
        }}
      >

        <Canvas
          shadows

          dpr={[
            1,
            2,
          ]}

          gl={{
            antialias:
              true,

            alpha:
              true,
          }}

          onPointerMissed={() => {

            setSelectedState(
              null,
            )

          }}
        >

          <fog
            attach="fog"

            args={[
              "#315aa5",
              22,
              45,
            ]}
          />


          <IndiaScene
            states={
              states
            }

            selectedState={
              selectedState
            }

            onHover={
              handleHover
            }

            onLeave={
              handleLeave
            }

            onSelect={
              handleSelect
            }

            animateEntrance={
              animateEntrance
            }

            divingState={
              divingState
            }
          />

        </Canvas>

      </div>


      {/* =================================================
         LOADING
      ================================================= */}

      {loading && (

        <div
          style={{
            position:
              "absolute",

            inset:
              0,

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color:
              "#e2e8f0",

            fontSize:
              "14px",

            letterSpacing:
              "3px",

            textTransform:
              "uppercase",

            pointerEvents:
              "none",

            zIndex:
              50,
          }}
        >
          Loading India...
        </div>

      )}


      {/* =================================================
         TOOLTIP
      ================================================= */}

      {tooltip.visible && (() => {
        const slug = tooltip.name.toLowerCase().replace(/[^a-z0-9]/g, "-")
        const bundle = statesRegistry[slug]
        const theme = getStateTheme(slug)
        const hindiName = bundle?.data?.hindiName
        const artName = theme?.artName || bundle?.data?.tagline || "Cultural Heritage"

        return (
          <div
            style={{
              position: "fixed",
              left: tooltip.x,
              top: tooltip.y,
              zIndex: 1000,
              pointerEvents: "none",
              padding: "10px 16px",
              borderRadius: "14px",
              border: "1.5px solid rgba(245, 158, 11, 0.8)",
              background: "linear-gradient(135deg, rgba(22, 14, 8, 0.95), rgba(38, 20, 12, 0.96))",
              color: "#f8fafc",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(245, 158, 11, 0.22)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "column",
              gap: "3px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "14px", fontWeight: 800, color: "#fef08a", letterSpacing: "0.5px" }}>
                {tooltip.name.toUpperCase()}
              </span>
              {hindiName && (
                <span style={{ fontSize: "12.5px", color: "rgba(254, 240, 138, 0.85)", fontFamily: "serif" }}>
                  • {hindiName}
                </span>
              )}
            </div>
            <div style={{ fontSize: "11px", color: "#fdba74", fontWeight: 600 }}>
              🎨 {artName}
            </div>
            <div style={{ fontSize: "10.5px", color: "rgba(254, 215, 170, 0.8)", fontStyle: "italic", marginTop: "2px" }}>
              Click to step inside 3D State Yatra →
            </div>
          </div>
        )
      })()}


      {/* =================================================
         BOTTOM INSTRUCTION
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          left:
            "50%",

          bottom:
            "28px",

          transform:
            "translateX(-50%)",

          zIndex:
            30,

          color:
            "rgba(220, 231, 255, 0.72)",

          fontSize:
            "11px",

          fontWeight:
            600,

          letterSpacing:
            "4px",

          textTransform:
            "uppercase",

          pointerEvents:
            "none",

          whiteSpace:
            "nowrap",

          textShadow:
            "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        {typeof window !== "undefined" && window.innerWidth < 768
          ? "T A P   A   S T A T E   T O   E X P L O R E"
          : "H O V E R   A   S T A T E   T O   E X P L O R E"}
      </div>


      {/* =================================================
         SELECTED STATE
      ================================================= */}

      {selectedState && (

        <div
          style={{
            position:
              "absolute",

            left:
              "50%",

            bottom:
              "62px",

            transform:
              "translateX(-50%)",

            zIndex:
              30,

            color:
              HOVER_COLOR,

            fontSize:
              "14px",

            fontWeight:
              800,

            letterSpacing:
              "1px",

            pointerEvents:
              ACTIVE_STATES_REGEX.test(selectedState) ? "auto" : "none",

            cursor:
              ACTIVE_STATES_REGEX.test(selectedState) ? "pointer" : "default",

            whiteSpace:
              "nowrap",

            textShadow:
              "0 2px 18px rgba(245, 184, 46, 0.3)",

            display:
              "flex",

            alignItems:
              "center",

            gap:
              "8px",

            padding:
              "6px 16px",

            borderRadius:
              "999px",

            background:
              ACTIVE_STATES_REGEX.test(selectedState) ? "rgba(15, 31, 61, 0.85)" : "transparent",

            border:
              ACTIVE_STATES_REGEX.test(selectedState) ? "1px solid rgba(245, 158, 11, 0.5)" : "none",
          }}
          onClick={() => {
            if (ACTIVE_STATES_REGEX.test(selectedState)) {
              setDivingState(selectedState)
              if (onStateDive) {
                onStateDive(selectedState)
              }
            }
          }}
        >
          <span>{selectedState}</span>
          {ACTIVE_STATES_REGEX.test(selectedState) && (
            <span style={{ fontSize: "12px", color: "#fef08a" }}>
              — Dive into State →
            </span>
          )}
        </div>

      )}

    </div>
  )
}