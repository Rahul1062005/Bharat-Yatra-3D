import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import * as THREE from "three"
import {
  X,
  RotateCw,
  Sun,
  Moon,
  Layers,
  Sparkles,
  Info,
  MapPin,
  Calendar,
  Compass,
} from "lucide-react"
import { MONUMENTS_3D_CATALOG, type Monument3DData, type MonumentPOI } from "../../data/monumentsData"
import "./Monument3DViewerModal.css"

interface Monument3DViewerModalProps {
  isOpen: boolean
  onClose: () => void
  initialMonumentId?: string
}

/* ============================================================
   PROCEDURAL ARCHITECTURAL 3D MESHES
   Artfully constructed geometry reflecting iconic Indian architecture
============================================================ */

interface MonumentMeshProps {
  monument: Monument3DData
  wireframe: boolean
  selectedPOI: MonumentPOI | null
  onSelectPOI: (poi: MonumentPOI) => void
  autoRotate: boolean
}

function Monument3DModel({
  monument,
  wireframe,
  selectedPOI,
  onSelectPOI,
  autoRotate,
}: MonumentMeshProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35
    }
  })

  // Colors
  const matProps = {
    wireframe,
    roughness: 0.35,
    metalness: 0.15,
  }

  return (
    <group ref={groupRef}>
      {/* BASE PLINTH FOR ALL MONUMENTS */}
      <mesh position={[0, -0.85, 0]}>
        <boxGeometry args={[4.4, 0.3, 4.4]} />
        <meshStandardMaterial color="#1e293b" {...matProps} />
      </mesh>
      <mesh position={[0, -0.65, 0]}>
        <boxGeometry args={[3.8, 0.15, 3.8]} />
        <meshStandardMaterial color="#334155" {...matProps} />
      </mesh>

      {/* MONUMENT SPECIFIC ARCHITECTURE */}
      {monument.modelType === "taj-mahal" && (
        <group>
          {/* Main Central Cube with Chamfered Corners */}
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[2.0, 1.8, 2.0]} />
            <meshStandardMaterial color="#f8fafc" {...matProps} />
          </mesh>
          {/* Central Grand Iwan (Front Arch indent) */}
          <mesh position={[0, 0.4, 1.02]}>
            <boxGeometry args={[0.9, 1.3, 0.1]} />
            <meshStandardMaterial color="#e2e8f0" {...matProps} />
          </mesh>
          {/* Central Drum */}
          <mesh position={[0, 1.45, 0]}>
            <cylinderGeometry args={[0.7, 0.7, 0.5, 32]} />
            <meshStandardMaterial color="#f1f5f9" {...matProps} />
          </mesh>
          {/* Main Onion Dome */}
          <mesh position={[0, 2.05, 0]}>
            <sphereGeometry args={[0.85, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.8]} />
            <meshStandardMaterial color="#ffffff" {...matProps} />
          </mesh>
          {/* Golden Finial */}
          <mesh position={[0, 2.7, 0]}>
            <coneGeometry args={[0.08, 0.5, 16]} />
            <meshStandardMaterial {...matProps} color="#f59e0b" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* 4 Corner Chhatris */}
          {[-0.85, 0.85].map((x) =>
            [-0.85, 0.85].map((z) => (
              <group key={`chhatri-${x}-${z}`} position={[x, 1.5, z]}>
                <mesh position={[0, 0, 0]}>
                  <cylinderGeometry args={[0.2, 0.2, 0.35, 16]} />
                  <meshStandardMaterial color="#f8fafc" {...matProps} />
                </mesh>
                <mesh position={[0, 0.25, 0]}>
                  <sphereGeometry args={[0.22, 16, 12]} />
                  <meshStandardMaterial color="#ffffff" {...matProps} />
                </mesh>
              </group>
            ))
          )}
          {/* 4 Corner Minarets */}
          {[-1.8, 1.8].map((x) =>
            [-1.8, 1.8].map((z) => (
              <group key={`minaret-${x}-${z}`} position={[x, 0.55, z]}>
                <mesh>
                  <cylinderGeometry args={[0.13, 0.16, 2.4, 24]} />
                  <meshStandardMaterial color="#f8fafc" {...matProps} />
                </mesh>
                {/* Minaret Balconies */}
                <mesh position={[0, 0.3, 0]}>
                  <cylinderGeometry args={[0.2, 0.2, 0.06, 16]} />
                  <meshStandardMaterial color="#e2e8f0" {...matProps} />
                </mesh>
                <mesh position={[0, 0.85, 0]}>
                  <cylinderGeometry args={[0.18, 0.18, 0.06, 16]} />
                  <meshStandardMaterial color="#e2e8f0" {...matProps} />
                </mesh>
                {/* Minaret Dome */}
                <mesh position={[0, 1.3, 0]}>
                  <sphereGeometry args={[0.17, 16, 12]} />
                  <meshStandardMaterial color="#ffffff" {...matProps} />
                </mesh>
              </group>
            ))
          )}
        </group>
      )}

      {monument.modelType === "konark-chariot" && (
        <group>
          {/* Pyramidal Jagamohana (Audience Hall) */}
          <mesh position={[0, 0.1, 0]}>
            <boxGeometry args={[2.2, 1.0, 2.2]} />
            <meshStandardMaterial color="#b45309" {...matProps} />
          </mesh>
          {/* Stepped Pidhas (Tiers) */}
          {[0, 1, 2, 3].map((tier) => (
            <mesh key={`tier-${tier}`} position={[0, 0.7 + tier * 0.28, 0]}>
              <boxGeometry args={[1.9 - tier * 0.35, 0.22, 1.9 - tier * 0.35]} />
              <meshStandardMaterial color="#d97706" {...matProps} />
            </mesh>
          ))}
          {/* Crown Amalaka Stone */}
          <mesh position={[0, 1.9, 0]}>
            <cylinderGeometry args={[0.45, 0.45, 0.2, 24]} />
            <meshStandardMaterial color="#f59e0b" {...matProps} />
          </mesh>
          <mesh position={[0, 2.1, 0]}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial color="#fbbf24" {...matProps} />
          </mesh>
          {/* Chariot Wheels on both sides */}
          {[-0.9, 0, 0.9].map((z, i) => (
            <group key={`wheel-pair-${i}`}>
              {/* Left Wheel */}
              <group position={[-1.25, -0.3, z]} rotation={[0, 0, Math.PI / 2]}>
                <mesh>
                  <torusGeometry args={[0.38, 0.06, 16, 32]} />
                  <meshStandardMaterial color="#ca8a04" {...matProps} />
                </mesh>
                <mesh>
                  <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
                  <meshStandardMaterial color="#78350f" {...matProps} />
                </mesh>
              </group>
              {/* Right Wheel */}
              <group position={[1.25, -0.3, z]} rotation={[0, 0, Math.PI / 2]}>
                <mesh>
                  <torusGeometry args={[0.38, 0.06, 16, 32]} />
                  <meshStandardMaterial color="#ca8a04" {...matProps} />
                </mesh>
                <mesh>
                  <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
                  <meshStandardMaterial color="#78350f" {...matProps} />
                </mesh>
              </group>
            </group>
          ))}
        </group>
      )}

      {monument.modelType === "kailasa-temple" && (
        <group>
          {/* Monolithic Basalt Rock Wall Backdrop */}
          <mesh position={[0, 0.8, -2.0]}>
            <boxGeometry args={[4.2, 3.2, 0.6]} />
            <meshStandardMaterial {...matProps} color="#475569" roughness={0.9} />
          </mesh>
          {/* Main Vimana / Sanctuary */}
          <mesh position={[0, 0.2, -0.7]}>
            <boxGeometry args={[1.8, 1.4, 1.8]} />
            <meshStandardMaterial color="#78716c" {...matProps} />
          </mesh>
          {/* Stepped Dravidian Shikhara */}
          {[0, 1, 2].map((s) => (
            <mesh key={`kailasa-step-${s}`} position={[0, 1.05 + s * 0.35, -0.7]}>
              <boxGeometry args={[1.4 - s * 0.3, 0.3, 1.4 - s * 0.3]} />
              <meshStandardMaterial color="#57534e" {...matProps} />
            </mesh>
          ))}
          {/* Stupika Dome */}
          <mesh position={[0, 2.1, -0.7]}>
            <sphereGeometry args={[0.32, 16, 16]} />
            <meshStandardMaterial color="#d97706" {...matProps} />
          </mesh>
          {/* Nandi Mandapa in Front */}
          <mesh position={[0, 0.1, 0.6]}>
            <boxGeometry args={[1.1, 0.9, 1.1]} />
            <meshStandardMaterial color="#78716c" {...matProps} />
          </mesh>
          {/* Stone Bridge Connecting Pavilions */}
          <mesh position={[0, 0.45, -0.05]}>
            <boxGeometry args={[0.4, 0.15, 0.5]} />
            <meshStandardMaterial color="#57534e" {...matProps} />
          </mesh>
          {/* Free-standing Dhwaja Victory Pillar */}
          <mesh position={[-1.3, 0.4, 0.7]}>
            <cylinderGeometry args={[0.1, 0.14, 2.0, 16]} />
            <meshStandardMaterial color="#a8a29e" {...matProps} />
          </mesh>
          <mesh position={[1.3, 0.4, 0.7]}>
            <cylinderGeometry args={[0.1, 0.14, 2.0, 16]} />
            <meshStandardMaterial color="#a8a29e" {...matProps} />
          </mesh>
        </group>
      )}

      {monument.modelType === "hampi-chariot" && (
        <group>
          {/* Ornate Chariot Body */}
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[1.6, 1.2, 1.8]} />
            <meshStandardMaterial color="#ca8a04" {...matProps} />
          </mesh>
          {/* Garuda Sanctum Niches */}
          <mesh position={[0, 0.2, 0.92]}>
            <boxGeometry args={[0.6, 0.7, 0.1]} />
            <meshStandardMaterial color="#854d0e" {...matProps} />
          </mesh>
          {/* Stepped Shrine Tower */}
          {[0, 1, 2].map((lvl) => (
            <mesh key={`hampi-lvl-${lvl}`} position={[0, 0.95 + lvl * 0.25, 0]}>
              <boxGeometry args={[1.3 - lvl * 0.28, 0.2, 1.5 - lvl * 0.28]} />
              <meshStandardMaterial color="#eab308" {...matProps} />
            </mesh>
          ))}
          {/* Kalasha Pinnacle */}
          <mesh position={[0, 1.7, 0]}>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial color="#facc15" {...matProps} />
          </mesh>
          {/* 4 Carved Stone Wheels */}
          {[-0.95, 0.95].map((x) =>
            [-0.6, 0.6].map((z) => (
              <group key={`hampi-wheel-${x}-${z}`} position={[x, -0.35, z]} rotation={[0, 0, Math.PI / 2]}>
                <mesh>
                  <torusGeometry args={[0.35, 0.08, 16, 32]} />
                  <meshStandardMaterial color="#78350f" {...matProps} />
                </mesh>
                <mesh>
                  <cylinderGeometry args={[0.1, 0.1, 0.15, 16]} />
                  <meshStandardMaterial color="#ca8a04" {...matProps} />
                </mesh>
              </group>
            ))
          )}
          {/* Front Sculpted Elephants */}
          <mesh position={[-0.45, -0.4, 1.15]}>
            <boxGeometry args={[0.3, 0.35, 0.45]} />
            <meshStandardMaterial color="#92400e" {...matProps} />
          </mesh>
          <mesh position={[0.45, -0.4, 1.15]}>
            <boxGeometry args={[0.3, 0.35, 0.45]} />
            <meshStandardMaterial color="#92400e" {...matProps} />
          </mesh>
        </group>
      )}

      {monument.modelType === "mahabodhi-temple" && (
        <group>
          {/* Lower Sanctuary Cube */}
          <mesh position={[0, -0.1, 0]}>
            <boxGeometry args={[1.8, 0.8, 1.8]} />
            <meshStandardMaterial color="#92400e" {...matProps} />
          </mesh>
          {/* Towering Pyramidal Shikhara */}
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.25, 0.85, 2.0, 4]} />
            <meshStandardMaterial color="#b45309" {...matProps} />
          </mesh>
          {/* Golden Amalaka and Stupa Finial */}
          <mesh position={[0, 2.3, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.15, 16]} />
            <meshStandardMaterial color="#f59e0b" {...matProps} />
          </mesh>
          <mesh position={[0, 2.5, 0]}>
            <coneGeometry args={[0.12, 0.35, 16]} />
            <meshStandardMaterial {...matProps} color="#fbbf24" metalness={0.7} />
          </mesh>
          {/* 4 Corner Miniature Shikharas */}
          {[-0.7, 0.7].map((x) =>
            [-0.7, 0.7].map((z) => (
              <mesh key={`mini-stupa-${x}-${z}`} position={[x, 0.55, z]}>
                <cylinderGeometry args={[0.08, 0.22, 0.7, 4]} />
                <meshStandardMaterial color="#d97706" {...matProps} />
              </mesh>
            ))
          )}
        </group>
      )}

      {monument.modelType === "golden-temple" && (
        <group>
          {/* Sacred Amrit Sarovar Water Floor */}
          <mesh position={[0, -0.78, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[5.2, 5.2]} />
            <meshStandardMaterial color="#0284c7" metalness={0.7} roughness={0.1} />
          </mesh>
          {/* Marble Island Platform */}
          <mesh position={[0, -0.65, 0]}>
            <boxGeometry args={[2.5, 0.15, 2.5]} />
            <meshStandardMaterial color="#f8fafc" {...matProps} />
          </mesh>
          {/* Marble Lower Level */}
          <mesh position={[0, -0.15, 0]}>
            <boxGeometry args={[1.9, 0.8, 1.9]} />
            <meshStandardMaterial color="#f1f5f9" {...matProps} />
          </mesh>
          {/* Gilded Pure Gold Upper Level */}
          <mesh position={[0, 0.55, 0]}>
            <boxGeometry args={[1.7, 0.65, 1.7]} />
            <meshStandardMaterial {...matProps} color="#f59e0b" metalness={0.85} roughness={0.2} />
          </mesh>
          {/* Gold Fluted Dome */}
          <mesh position={[0, 1.2, 0]}>
            <sphereGeometry args={[0.65, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.75]} />
            <meshStandardMaterial {...matProps} color="#fbbf24" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Pinnacle */}
          <mesh position={[0, 1.75, 0]}>
            <coneGeometry args={[0.08, 0.4, 16]} />
            <meshStandardMaterial {...matProps} color="#f59e0b" metalness={0.9} />
          </mesh>
          {/* Marble Causeway Bridge */}
          <mesh position={[-1.8, -0.65, 0]}>
            <boxGeometry args={[1.3, 0.15, 0.6]} />
            <meshStandardMaterial color="#f8fafc" {...matProps} />
          </mesh>
        </group>
      )}

      {/* 3D POI PINS */}
      {monument.pointsOfInterest.map((poi, idx) => {
        const isSelected = selectedPOI?.name === poi.name

        return (
          <group key={`poi-${idx}`} position={poi.position}>
            {/* Pulsing visual core */}
            <mesh onClick={() => onSelectPOI(poi)}>
              <sphereGeometry args={[isSelected ? 0.14 : 0.09, 16, 16]} />
              <meshStandardMaterial
                color={isSelected ? "#10b981" : "#f59e0b"}
                emissive={isSelected ? "#10b981" : "#f59e0b"}
                emissiveIntensity={0.8}
              />
            </mesh>

            {/* Floating Label */}
            <Html distanceFactor={8} position={[0, 0.22, 0]} center>
              <div
                className={`poi-3d-tag ${isSelected ? "selected-tag" : ""}`}
                onClick={() => onSelectPOI(poi)}
              >
                <span>{poi.name}</span>
              </div>
            </Html>
          </group>
        )
      })}
    </group>
  )
}

/* ============================================================
   MAIN MODAL CONTAINER
============================================================ */

export default function Monument3DViewerModal({
  isOpen,
  onClose,
  initialMonumentId = "taj-mahal",
}: Monument3DViewerModalProps) {
  const [activeMonumentId, setActiveMonumentId] = useState(initialMonumentId)
  const [wireframe, setWireframe] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)
  const [timeOfDay, setTimeOfDay] = useState<"day" | "sunset" | "night">("day")
  const [selectedPOI, setSelectedPOI] = useState<MonumentPOI | null>(null)

  if (!isOpen) return null

  const currentMonument =
    MONUMENTS_3D_CATALOG.find((m) => m.id === activeMonumentId) || MONUMENTS_3D_CATALOG[0]

  const handleSelectMonument = (id: string) => {
    setActiveMonumentId(id)
    setSelectedPOI(null)
  }

  // Lighting environment configurations
  const lightingPresets = {
    day: {
      ambient: 0.8,
      sunColor: "#ffffff",
      sunIntensity: 1.4,
      bgColor: "#090d16",
    },
    sunset: {
      ambient: 0.6,
      sunColor: "#f97316",
      sunIntensity: 1.8,
      bgColor: "#130914",
    },
    night: {
      ambient: 0.35,
      sunColor: "#60a5fa",
      sunIntensity: 0.8,
      bgColor: "#030712",
    },
  }

  const currentLight = lightingPresets[timeOfDay]

  return (
    <div className="monument-modal-overlay" onClick={onClose}>
      <div
        className="monument-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="monument-modal-header">
          <div className="monument-header-left">
            <div className="monument-tag">
              <Compass size={13} />
              <span>3D ARCHITECTURAL INSPECTOR</span>
            </div>
            <div className="monument-title-row">
              <h2 className="monument-title">{currentMonument.name}</h2>
              {currentMonument.hindiName && (
                <span className="monument-hindi-badge">{currentMonument.hindiName}</span>
              )}
              {currentMonument.unesco && (
                <span className="unesco-pill">
                  <Sparkles size={11} /> UNESCO World Heritage
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            className="monument-close-btn"
            onClick={onClose}
            aria-label="Close Monument Viewer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Monument Switcher Pills Bar */}
        <div className="monument-switcher-bar">
          {MONUMENTS_3D_CATALOG.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`monument-tab-pill ${m.id === currentMonument.id ? "active" : ""}`}
              onClick={() => handleSelectMonument(m.id)}
            >
              <span>{m.name}</span>
              <span className="pill-state-tag">({m.stateName})</span>
            </button>
          ))}
        </div>

        {/* Main Split Layout: 3D Canvas + Architectural Facts Sidebar */}
        <div className="monument-main-layout">
          {/* Left / Center 3D Canvas */}
          <div className="monument-canvas-container">
            <Canvas
              camera={{ position: [3.8, 2.5, 4.2], fov: 45 }}
              style={{ background: currentLight.bgColor }}
            >
              <ambientLight intensity={currentLight.ambient} />
              <directionalLight
                position={[5, 8, 4]}
                intensity={currentLight.sunIntensity}
                color={currentLight.sunColor}
              />
              <directionalLight position={[-4, 3, -3]} intensity={0.4} color="#94a3b8" />

              <Monument3DModel
                monument={currentMonument}
                wireframe={wireframe}
                selectedPOI={selectedPOI}
                onSelectPOI={setSelectedPOI}
                autoRotate={autoRotate}
              />

              <OrbitControls
                enablePan={true}
                enableZoom={true}
                minDistance={2.5}
                maxDistance={9.0}
                maxPolarAngle={Math.PI / 2 + 0.05} // don't go below ground
              />
            </Canvas>

            {/* On-Canvas Interactive HUD Controls */}
            <div className="canvas-hud-toolbar">
              <button
                type="button"
                className={`hud-btn ${autoRotate ? "active" : ""}`}
                onClick={() => setAutoRotate(!autoRotate)}
                title="Toggle Auto Rotation"
              >
                <RotateCw size={15} />
                <span>{autoRotate ? "Pause Spin" : "Rotate"}</span>
              </button>

              <button
                type="button"
                className={`hud-btn ${wireframe ? "active" : ""}`}
                onClick={() => setWireframe(!wireframe)}
                title="Toggle Wireframe Structural Mesh"
              >
                <Layers size={15} />
                <span>{wireframe ? "Solid" : "Wireframe"}</span>
              </button>

              {/* Time of Day Toggle */}
              <div className="hud-light-group">
                <button
                  type="button"
                  className={`hud-btn mini ${timeOfDay === "day" ? "active" : ""}`}
                  onClick={() => setTimeOfDay("day")}
                  title="Daylight"
                >
                  <Sun size={14} />
                </button>
                <button
                  type="button"
                  className={`hud-btn mini ${timeOfDay === "sunset" ? "active" : ""}`}
                  onClick={() => setTimeOfDay("sunset")}
                  title="Sunset Golden Hour"
                >
                  🌅
                </button>
                <button
                  type="button"
                  className={`hud-btn mini ${timeOfDay === "night" ? "active" : ""}`}
                  onClick={() => setTimeOfDay("night")}
                  title="Nocturnal Illumination"
                >
                  <Moon size={14} />
                </button>
              </div>
            </div>

            <div className="canvas-interaction-hint">
              <span>🖱️ Drag to rotate 360° • Scroll to zoom • Click golden pins to inspect features</span>
            </div>
          </div>

          {/* Right Side: Architectural Telemetry & Details Panel */}
          <div className="monument-sidebar-panel">
            {/* Meta Attributes */}
            <div className="sidebar-meta-list">
              <div className="meta-card">
                <MapPin size={15} className="meta-icon" />
                <div className="meta-text">
                  <span className="meta-title">Location</span>
                  <span className="meta-val">{currentMonument.location}, {currentMonument.stateName}</span>
                </div>
              </div>

              <div className="meta-card">
                <Calendar size={15} className="meta-icon" />
                <div className="meta-text">
                  <span className="meta-title">Historical Era</span>
                  <span className="meta-val">{currentMonument.era}</span>
                </div>
              </div>

              <div className="meta-card">
                <Info size={15} className="meta-icon" />
                <div className="meta-text">
                  <span className="meta-title">Style & Material</span>
                  <span className="meta-val">{currentMonument.style} • {currentMonument.material}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="sidebar-section">
              <h4 className="sidebar-sec-title">Architectural Legacy</h4>
              <p className="sidebar-desc">{currentMonument.description}</p>
            </div>

            {/* Active POI Focus or Highlights */}
            {selectedPOI ? (
              <div className="active-poi-card">
                <div className="active-poi-header">
                  <Sparkles size={14} className="poi-star-icon" />
                  <span className="active-poi-badge">Selected Architectural Feature</span>
                </div>
                <h5 className="active-poi-name">{selectedPOI.name}</h5>
                <p className="active-poi-desc">{selectedPOI.description}</p>
                <button
                  type="button"
                  className="poi-clear-btn"
                  onClick={() => setSelectedPOI(null)}
                >
                  View All Highlights
                </button>
              </div>
            ) : (
              <div className="sidebar-section">
                <h4 className="sidebar-sec-title">Key Architectural Innovations</h4>
                <ul className="highlights-list">
                  {currentMonument.architecturalHighlights.map((hl, i) => (
                    <li key={i} className="highlight-item">
                      <span className="hl-bullet">✦</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
