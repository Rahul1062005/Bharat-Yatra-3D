import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import {
  X,
  Compass,
  MapPin,
  Route,
  Sparkles,
  Trash2,
  Plus,
  Share2,
  Check,
  ArrowRight,
  PlaneTakeoff,
  Maximize2,
} from "lucide-react"
import { statesRegistry } from "../../data/states"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
import "./JourneyPlannerModal.css"

interface JourneyPlannerModalProps {
  isOpen: boolean
  onClose: () => void
}

interface CuratedTrail {
  id: string
  name: string
  subtitle: string
  icon: string
  description: string
  stateIds: string[]
}

const CURATED_TRAILS: CuratedTrail[] = [
  {
    id: "golden-triangle",
    name: "The Golden Triangle",
    subtitle: "Delhi • Uttar Pradesh • Rajasthan",
    icon: "👑",
    description: "The classic historical circuit connecting the Mughal capitals and Rajput forts.",
    stateIds: ["delhi", "uttar-pradesh", "rajasthan"],
  },
  {
    id: "coastal-malabar",
    name: "Konkan & Malabar Spice Coast",
    subtitle: "Maharashtra • Goa • Karnataka • Kerala",
    icon: "🌴",
    description: "Arabian Sea shorelines, Portuguese cathedrals, spice plantations, and serene lagoons.",
    stateIds: ["maharashtra", "goa", "karnataka", "kerala"],
  },
  {
    id: "seven-sisters",
    name: "Seven Sisters Frontier",
    subtitle: "Assam • Meghalaya • Arunachal • Nagaland",
    icon: "🏔️",
    description: "Misty mountains, living root bridges, tea valleys, and ancient tribal heritage.",
    stateIds: ["assam", "meghalaya", "arunachal-pradesh", "nagaland"],
  },
  {
    id: "spiritual-ganga",
    name: "Sacred Ganga Odyssey",
    subtitle: "Uttarakhand • Uttar Pradesh • Bihar • West Bengal",
    icon: "🪔",
    description: "Follow the holiest river of Bharat from glacial Himalayan sources to the Bay of Bengal.",
    stateIds: ["uttarakhand", "uttar-pradesh", "bihar", "west-bengal"],
  },
  {
    id: "himalayan-heights",
    name: "Trans-Himalayan Pass Circuit",
    subtitle: "Jammu & Kashmir • Ladakh • Himachal Pradesh",
    icon: "❄️",
    description: "High altitude passes, cold deserts, Buddhist gompas, and alpine meadows.",
    stateIds: ["jammu-kashmir", "ladakh", "himachal-pradesh"],
  },
]

// Haversine formula for km distance between coordinates
function calculateHaversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c)
}

export default function JourneyPlannerModal({ isOpen, onClose }: JourneyPlannerModalProps) {
  useBodyScrollLock(isOpen)
  const navigate = useNavigate()
  const [selectedStops, setSelectedStops] = useState<string[]>([
    "delhi",
    "uttar-pradesh",
    "rajasthan",
  ])
  const [copied, setCopied] = useState(false)

  // Deduplicate available states list from statesRegistry
  const availableStates = useMemo(() => {
    return Object.entries(statesRegistry).reduce((acc, [id, bundle]) => {
      if (!acc.some((s) => s.name === bundle.data.name)) {
        acc.push({
          id,
          name: bundle.data.name,
          centerLat: bundle.config.centerLat,
          centerLon: bundle.config.centerLon,
        })
      }
      return acc
    }, [] as { id: string; name: string; centerLat: number; centerLon: number }[]).sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }, [])

  // Calculate total route distance (must be called unconditionally before early returns)
  const totalDistanceKm = useMemo(() => {
    if (selectedStops.length < 2) return 0
    let total = 0
    for (let i = 0; i < selectedStops.length - 1; i++) {
      const from = statesRegistry[selectedStops[i]]?.config
      const to = statesRegistry[selectedStops[i + 1]]?.config
      if (from && to) {
        total += calculateHaversineKm(from.centerLat, from.centerLon, to.centerLat, to.centerLon)
      }
    }
    return total
  }, [selectedStops])

  if (!isOpen) return null

  const handleApplyPreset = (trail: CuratedTrail) => {
    setSelectedStops(trail.stateIds)
  }

  const handleAddStop = (stateId: string) => {
    if (!selectedStops.includes(stateId)) {
      setSelectedStops((prev) => [...prev, stateId])
    }
  }

  const handleRemoveStop = (index: number) => {
    setSelectedStops((prev) => prev.filter((_, i) => i !== index))
  }

  const handleClear = () => {
    setSelectedStops([])
  }

  const handleCopyItinerary = () => {
    const names = selectedStops
      .map((id, idx) => `${idx + 1}. ${statesRegistry[id]?.data.name || id}`)
      .join("\n")
    const text = `🇮🇳 My Bharat Yatra Itinerary (${selectedStops.length} Destinations, ~${totalDistanceKm.toLocaleString()} km):\n\n${names}\n\nPlanned with Bharat Yatra 3D!`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleStartJourney = () => {
    if (selectedStops.length > 0) {
      onClose()
      navigate(`/state/${selectedStops[0]}`)
    }
  }

  return (
    <div
      className="journey-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="journey-modal-content"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="journey-modal-header">
          <div className="journey-header-info">
            <div className="journey-tag">
              <Compass size={14} />
              <span>CUSTOM EXPEDITION BUILDER</span>
            </div>
            <h2 className="journey-title">My Bharat Yatra Planner</h2>
            <p className="journey-subtitle">
              Craft your bespoke dream route across Indian heritage states or pick iconic curated trails.
            </p>
          </div>
          <div className="journey-header-actions-right">
            <button
              type="button"
              className="journey-fullpage-btn"
              onClick={() => {
                onClose()
                navigate("/my-yatra")
              }}
              title="Open dedicated My Yatra page"
            >
              <Maximize2 size={14} />
              <span>Full Page</span>
            </button>
            <button
              type="button"
              className="journey-close-btn"
              onClick={onClose}
              aria-label="Close Journey Planner"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="journey-modal-body">
          {/* Section 1: Curated Trails Carousel / Row */}
          <div className="curated-trails-section">
            <h4 className="trails-heading">
              <Sparkles size={16} /> Iconic Curated Trails
            </h4>
            <div className="curated-trails-row">
              {CURATED_TRAILS.map((trail) => {
                const isSelected =
                  JSON.stringify(trail.stateIds) === JSON.stringify(selectedStops)
                return (
                  <div
                    key={trail.id}
                    className={`curated-trail-card ${isSelected ? "selected-trail" : ""}`}
                    onClick={() => handleApplyPreset(trail)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="trail-card-top">
                      <span className="trail-emoji">{trail.icon}</span>
                      <span className="trail-stops-badge">{trail.stateIds.length} States</span>
                    </div>
                    <h5 className="trail-name">{trail.name}</h5>
                    <p className="trail-sub">{trail.subtitle}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Section 2: Selected Route Canvas */}
          <div className="route-builder-section">
            <div className="route-builder-header">
              <div className="builder-header-left">
                <Route size={18} className="route-icon" />
                <h4 className="builder-heading">Your Custom Route ({selectedStops.length} Stops)</h4>
              </div>
              <div className="builder-header-actions">
                {selectedStops.length > 0 && (
                  <button type="button" className="clear-stops-btn" onClick={handleClear}>
                    <Trash2 size={13} /> Clear All
                  </button>
                )}
              </div>
            </div>

            {/* Stops Sequence Flow */}
            {selectedStops.length === 0 ? (
              <div className="empty-route-notice">
                <MapPin size={32} className="empty-pin-icon" />
                <p>No states added yet. Choose a curated trail above or pick states below to build your itinerary!</p>
              </div>
            ) : (
              <div className="stops-sequence-list">
                {selectedStops.map((stateId, idx) => {
                  const stateBundle = statesRegistry[stateId]
                  const stateName = stateBundle?.data.name || stateId

                  return (
                    <div key={`${stateId}-${idx}`} className="route-stop-item">
                      <div className="stop-badge-idx">{idx + 1}</div>
                      <div className="stop-info">
                        <span className="stop-name">{stateName}</span>
                        <span className="stop-tagline">{stateBundle?.data.tagline || "Land of Heritage"}</span>
                      </div>
                      <button
                        type="button"
                        className="remove-stop-btn"
                        onClick={() => handleRemoveStop(idx)}
                        title="Remove stop"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Route Stats Ribbon */}
            {selectedStops.length > 0 && (
              <div className="route-stats-ribbon">
                <div className="stat-pill">
                  <span className="stat-label">Total Stops:</span>
                  <span className="stat-value">{selectedStops.length} States</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-label">Estimated Route Distance:</span>
                  <span className="stat-value">~{totalDistanceKm.toLocaleString()} km</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-label">Suggested Duration:</span>
                  <span className="stat-value">{selectedStops.length * 3}-{selectedStops.length * 5} Days</span>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Add More States Picker */}
          <div className="state-picker-section">
            <h4 className="picker-heading">
              <Plus size={16} /> Add Destination States
            </h4>
            <div className="picker-chips-grid">
              {availableStates.map((st) => {
                const isAlreadySelected = selectedStops.includes(st.id)
                return (
                  <button
                    key={st.id}
                    type="button"
                    className={`state-picker-chip ${isAlreadySelected ? "already-added" : ""}`}
                    onClick={() => handleAddStop(st.id)}
                    disabled={isAlreadySelected}
                  >
                    <span>{st.name}</span>
                    {isAlreadySelected ? (
                      <Check size={13} className="chip-check" />
                    ) : (
                      <Plus size={13} className="chip-plus" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="journey-modal-footer">
          <button
            type="button"
            className="share-route-btn"
            onClick={handleCopyItinerary}
            disabled={selectedStops.length === 0}
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 size={16} />
                <span>Copy Yatra Summary</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="start-yatra-btn"
            onClick={handleStartJourney}
            disabled={selectedStops.length === 0}
          >
            <PlaneTakeoff size={18} />
            <span>Begin Yatra from {statesRegistry[selectedStops[0]]?.data.name || "First Stop"}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
