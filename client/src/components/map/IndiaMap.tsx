import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import {
  Canvas,
} from "@react-three/fiber"

import type {
  ThreeEvent,
} from "@react-three/fiber"

import {
  Line,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"

import * as THREE from "three"


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
   MAP COLORS
========================================================= */

const TOP_COLOR = "#f4f7fb"

const SIDE_COLOR = "#172b4d"

const HOVER_COLOR = "#f5b82e"


/*
 * These colors are used for the individual
 * state boundaries.
 *
 * The colors are intentionally muted rather
 * than extremely bright so the map still
 * looks premium.
 */
const STATE_BORDER_COLORS = [
  "#264f8f",
  "#3b6db3",
  "#496f9f",
  "#5b82b5",
  "#385d8a",
  "#6c8fb8",
  "#4f759f",
  "#315c9b",
  "#587ca8",
  "#416b9c",
  "#6a88a8",
  "#2e568c",
  "#4c78a8",
  "#668bb0",
  "#385f91",
  "#567da5",
  "#31558a",
  "#7193b8",
  "#426a96",
  "#5d82a9",
  "#355d91",
  "#6f8faf",
  "#4770a0",
  "#547aa5",
  "#3d6393",
  "#6686aa",
  "#2d5287",
  "#7896b8",
  "#416791",
  "#5c80a6",
  "#345a8d",
  "#6a8bad",
  "#486f9c",
  "#597fa7",
  "#3a6090",
  "#718fb0",
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
        depth: 0.30,

        bevelEnabled: true,

        bevelSegments: 2,

        bevelSize: 0.035,

        bevelThickness: 0.035,

        curveSegments: 2,
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
     * the map surface so it remains
     * clearly visible.
     */
    points.push(
      new THREE.Vector3(
        x,
        0.385,
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

  /* =======================================================
     EXTRUDED GEOMETRY
  ======================================================= */

  const geometry =
    useMemo(
      () =>
        createExtrudedGeometry(
          state.geometry,
        ),
      [
        state.geometry,
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
     HOVER
  ======================================================= */

  const [
    hovered,
    setHovered,
  ] = useState(false)


  /* =======================================================
     CLEANUP
  ======================================================= */

  useEffect(() => {

    return () => {

      geometry?.dispose()

    }

  }, [
    geometry,
  ])


  if (!geometry) {
    return null
  }


  /* =======================================================
     TOP COLOR
  ======================================================= */

  const currentColor =
    hovered ||
    selected
      ? HOVER_COLOR
      : TOP_COLOR


  /* =======================================================
     THIS STATE'S BORDER COLOR
  ======================================================= */

  const borderColor =
    STATE_BORDER_COLORS[
      stateIndex %
        STATE_BORDER_COLORS.length
    ]


  return (
    <group>

      {/* =================================================
         STATE BODY
      ================================================= */}

      <mesh
        geometry={
          geometry
        }

        castShadow

        receiveShadow

        onPointerEnter={(
          event,
        ) => {

          event.stopPropagation()

          setHovered(
            true,
          )

          onHover(
            event,
            state.name,
          )
        }}

        onPointerMove={(
          event,
        ) => {

          event.stopPropagation()

          onHover(
            event,
            state.name,
          )
        }}

        onPointerLeave={(
          event,
        ) => {

          event.stopPropagation()

          setHovered(
            false,
          )

          onLeave()
        }}

        onClick={(
          event,
        ) => {

          event.stopPropagation()

          onSelect(
            event,
            state.name,
          )
        }}
      >

        {/* =================================================
           TOP SURFACE
        ================================================= */}

        <meshStandardMaterial
          attach="material-0"

          color={
            currentColor
          }

          roughness={
            0.48
          }

          metalness={
            0.025
          }

          side={
            THREE.DoubleSide
          }
        />


        {/* =================================================
           3D SIDES
        ================================================= */}

        <meshStandardMaterial
          attach="material-1"

          color={
            SIDE_COLOR
          }

          roughness={
            0.68
          }

          metalness={
            0.12
          }

          side={
            THREE.DoubleSide
          }
        />

      </mesh>


      {/* =================================================
         COLORED STATE BOUNDARIES
         
         Each state gets its own color.
      ================================================= */}

      {borderRings.map(
        (
          ring,
          index,
        ) => {

          if (
            ring.length < 2
          ) {
            return null
          }


          const points =
            ringToLinePoints(
              ring,
            )


          return (
            <Line
              key={
                `${state.id}-border-${index}`
              }

              points={
                points
              }

              color={
                borderColor
              }

              /*
               * Clear but not overly thick.
               */
              lineWidth={
                2.4
              }

              transparent={
                false
              }

              opacity={
                1
              }

              /*
               * Keep borders visible
               * over the white surface.
               */
              depthTest={
                false
              }

              depthWrite={
                false
              }
            />
          )
        },
      )}

    </group>
  )
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
}) {

  return (
    <>

      {/* =================================================
         CAMERA
         
         KEEPING THE CURRENT SIZE
      ================================================= */}

      <PerspectiveCamera
        makeDefault

        position={[
          0,
          7.6,
          5.1,
        ]}

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
         INDIA
      ================================================= */}

      <group
        position={[
          0,
          -0.2,
          0,
        ]}
      >

        {states.map(
          (
            state,
            index,
          ) => (

            <StateShape
              key={
                state.id
              }

              state={
                state
              }

              stateIndex={
                index
              }

              selected={
                selectedState ===
                state.name
              }

              onHover={
                onHover
              }

              onLeave={
                onLeave
              }

              onSelect={
                onSelect
              }
            />

          ),
        )}

      </group>


      {/* =================================================
         ORBIT CONTROLS
         
         ROTATION = ON
         ZOOM = OFF
         PAN = OFF
      ================================================= */}

      <OrbitControls
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
   MAIN INDIA MAP
========================================================= */

export default function IndiaMap() {

  /* =======================================================
     STATES
  ======================================================= */

  const [
    states,
    setStates,
  ] =
    useState<StateData[]>(
      [],
    )


  /* =======================================================
     LOADING
  ======================================================= */

  const [
    loading,
    setLoading,
  ] =
    useState(
      true,
    )


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

    let cancelled =
      false


    async function loadIndiaMap() {

      try {

        setLoading(
          true,
        )


        const response =
          await fetch(
            "/data/india-states.geojson",
          )


        if (
          !response.ok
        ) {

          throw new Error(
            `Failed to load India GeoJSON: ${response.status}`,
          )

        }


        const data =
          (await response.json()) as IndiaGeoJSON


        if (
          cancelled
        ) {
          return
        }


        const loadedStates:
          StateData[] =
          data.features
            .map(
              (
                feature,
                index,
              ) => {

                return {
                  id:
                    `state-${index}`,

                  name:
                    getStateName(
                      feature.properties,
                      index,
                    ),

                  geometry:
                    feature.geometry,
                }
              },
            )
            .filter(
              (
                state,
              ) =>
                state.geometry
                  .type ===
                  "Polygon" ||
                state.geometry
                  .type ===
                  "MultiPolygon",
            )


        setStates(
          loadedStates,
        )


        console.log(
          "India map loaded:",
          loadedStates.map(
            (
              state,
            ) =>
              state.name,
          ),
        )

      } catch (
        error
      ) {

        console.error(
          "Unable to load India map:",
          error,
        )

      } finally {

        if (
          !cancelled
        ) {

          setLoading(
            false,
          )

        }

      }

    }


    loadIndiaMap()


    return () => {

      cancelled =
        true

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
      visible:
        true,

      name:
        name,

      x:
        event.clientX +
        18,

      y:
        event.clientY +
        18,
    })

  }


  /* =======================================================
     LEAVE
  ======================================================= */

  function handleLeave() {

    setTooltip(
      (
        previous,
      ) => ({
        ...previous,

        visible:
          false,
      }),
    )

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

      {tooltip.visible && (

        <div
          style={{
            position:
              "fixed",

            left:
              tooltip.x,

            top:
              tooltip.y,

            zIndex:
              1000,

            pointerEvents:
              "none",

            padding:
              "11px 17px",

            borderRadius:
              "11px",

            border:
              "1px solid rgba(245, 184, 46, 0.7)",

            background:
              "rgba(17, 35, 70, 0.94)",

            color:
              "#f8fafc",

            fontSize:
              "13px",

            fontWeight:
              800,

            letterSpacing:
              "0.3px",

            boxShadow:
              "0 12px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(245, 184, 46, 0.08)",

            backdropFilter:
              "blur(12px)",

            WebkitBackdropFilter:
              "blur(12px)",

            whiteSpace:
              "nowrap",
          }}
        >
          {
            tooltip.name
          }
        </div>

      )}


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
            "31px",

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
            "5px",

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
        H O V E R&nbsp;&nbsp;A&nbsp;&nbsp;S T A T E&nbsp;&nbsp;T O&nbsp;&nbsp;E X P L O R E
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
              "none",

            whiteSpace:
              "nowrap",

            textShadow:
              "0 2px 18px rgba(245, 184, 46, 0.3)",
          }}
        >
          {
            selectedState
          }
        </div>

      )}

    </div>
  )
}