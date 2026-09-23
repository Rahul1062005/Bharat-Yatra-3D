import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import {
  ArrowLeft,
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
  Globe2,
  Navigation,
  MoveUp,
  MoveDown,
  Calendar,
  Layers,
  ExternalLink,
  Printer,
} from "lucide-react"
import { statesRegistry } from "../../data/states"
import "./MyYatraPage.css"

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
    description: "The classic historical circuit connecting the Mughal capitals and majestic Rajput forts.",
    stateIds: ["delhi", "uttar-pradesh", "rajasthan"],
  },
  {
    id: "western-ghats",
    name: "Western Ghats & Arabian Coast",
    subtitle: "Maharashtra • Goa • Karnataka • Kerala",
    icon: "🌴",
    description: "Biodiversity hotspots, lush rainforests, fragrant spices, and serene Arabian Sea coastlines.",
    stateIds: ["maharashtra", "goa", "karnataka", "kerala"],
  },
  {
    id: "seven-sisters",
    name: "Seven Sisters Frontier",
    subtitle: "Assam • Meghalaya • Arunachal • Nagaland",
    icon: "🏔️",
    description: "Misty mountains, living root bridges, tea garden valleys, and ancient tribal heritage.",
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
  {
    id: "southern-grandeur",
    name: "Dravidian Temple Corridor",
    subtitle: "Tamil Nadu • Kerala • Andhra Pradesh • Telangana",
    icon: "🏛️",
    description: "Towering sculptured gopurams, ancient Chola architectures, and backwater lagoons.",
    stateIds: ["tamil-nadu", "kerala", "andhra-pradesh", "telangana"],
  },
]

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

export default function MyYatraPage() {
  const navigate = useNavigate()
  const [selectedStops, setSelectedStops] = useState<string[]>([
    "delhi",
    "uttar-pradesh",
    "rajasthan",
  ])
  const [copied, setCopied] = useState(false)
  const [searchFilter, setSearchFilter] = useState("")

  // Available states deduplicated
  const availableStates = useMemo(() => {
    return Object.entries(statesRegistry).reduce((acc, [id, bundle]) => {
      if (!acc.some((s) => s.name === bundle.data.name)) {
        acc.push({
          id,
          name: bundle.data.name,
          hindiName: bundle.data.hindiName,
          capital: bundle.data.capital,
          tagline: bundle.data.tagline,
          centerLat: bundle.config.centerLat,
          centerLon: bundle.config.centerLon,
        })
      }
      return acc
    }, [] as { id: string; name: string; hindiName?: string; capital?: string; tagline?: string; centerLat: number; centerLon: number }[]).sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }, [])

  // Calculate total route distance
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

  const handleMoveStop = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index > 0) {
      const updated = [...selectedStops]
      const temp = updated[index - 1]
      updated[index - 1] = updated[index]
      updated[index] = temp
      setSelectedStops(updated)
    } else if (direction === "down" && index < selectedStops.length - 1) {
      const updated = [...selectedStops]
      const temp = updated[index + 1]
      updated[index + 1] = updated[index]
      updated[index] = temp
      setSelectedStops(updated)
    }
  }

  const handleClear = () => {
    setSelectedStops([])
  }

  const handleCopyItinerary = () => {
    const names = selectedStops
      .map((id, idx) => `${idx + 1}. ${statesRegistry[id]?.data.name || id} (${statesRegistry[id]?.data.capital || ""})`)
      .join("\n")
    const text = `🇮🇳 My Bharat Yatra Custom Route (${selectedStops.length} States, ~${totalDistanceKm.toLocaleString()} km):\n\n${names}\n\nPlanned with Bharat Yatra 3D!`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleStartJourney = () => {
    if (selectedStops.length > 0) {
      navigate(`/state/${selectedStops[0]}`)
    }
  }

  const handleOpenGoogleMaps = () => {
    if (selectedStops.length === 0) return
    const destinations = selectedStops.map((id) => {
      const s = statesRegistry[id]?.data
      return encodeURIComponent(`${s?.name || id}, India`)
    })
    const url = `https://www.google.com/maps/dir/${destinations.join("/")}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handlePrintPDF = () => {
    if (selectedStops.length === 0) return
    window.print()
  }

  const filteredAvailable = availableStates.filter(
    (st) =>
      st.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (st.capital && st.capital.toLowerCase().includes(searchFilter.toLowerCase()))
  )

  return (
    <div className="my-yatra-page">
      {/* Navigation Top Bar */}
      <header className="yatra-nav-bar">
        <div className="yatra-nav-left">
          <button
            type="button"
            className="yatra-back-btn"
            onClick={() => navigate("/india")}
          >
            <ArrowLeft size={16} />
            <span>Back to India Map</span>
          </button>
        </div>

        <div className="yatra-nav-brand">
          <span className="yatra-brand-tag">BHARAT YATRA 3D</span>
          <span className="yatra-brand-title">EXPEDITION ARCHITECT</span>
        </div>

        <div className="yatra-nav-right">
          <button
            type="button"
            className="yatra-globe-btn"
            onClick={() => navigate("/explore")}
          >
            <Globe2 size={16} />
            <span>3D Globe</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="yatra-container">
        {/* Hero Section */}
        <section className="yatra-hero">
          <div className="yatra-badge">
            <Compass size={14} />
            <span>BESPOKE EXPEDITION PLANNER</span>
          </div>
          <h1 className="yatra-main-title">My Bharat Yatra</h1>
          <p className="yatra-main-subtitle">
            Curate your journey across India's sacred river confluences, ancient empires, Himalayan passes, and tropical coasts.
          </p>
        </section>

        {/* Section 1: Curated Trails Carousel */}
        <section className="yatra-card-section">
          <div className="section-title-row">
            <Sparkles size={18} className="text-amber-500" />
            <h2>Iconic Curated Circuits</h2>
            <span className="section-hint">Select a preset to load a curated itinerary</span>
          </div>

          <div className="curated-grid">
            {CURATED_TRAILS.map((trail) => {
              const isSelected = JSON.stringify(trail.stateIds) === JSON.stringify(selectedStops)
              return (
                <div
                  key={trail.id}
                  className={`curated-card ${isSelected ? "card-active" : ""}`}
                  onClick={() => handleApplyPreset(trail)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="curated-card-top">
                    <span className="curated-icon">{trail.icon}</span>
                    <span className="curated-count">{trail.stateIds.length} States</span>
                  </div>
                  <h3 className="curated-name">{trail.name}</h3>
                  <p className="curated-subtitle">{trail.subtitle}</p>
                  <p className="curated-desc">{trail.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 2: Custom Route Sequence & Stats */}
        <section className="yatra-card-section">
          <div className="section-title-row">
            <Route size={18} className="text-amber-500" />
            <h2>Your Journey Route ({selectedStops.length} Destinations)</h2>
            {selectedStops.length > 0 && (
              <button type="button" className="yatra-clear-btn" onClick={handleClear}>
                <Trash2 size={14} /> Clear All
              </button>
            )}
          </div>

          {/* Sequence Flow */}
          {selectedStops.length === 0 ? (
            <div className="yatra-empty-box">
              <MapPin size={40} className="empty-pin-icon" />
              <h3>Your itinerary is empty</h3>
              <p>Pick one of the curated circuits above or add states from the list below to begin building your custom Yatra!</p>
            </div>
          ) : (
            <div className="yatra-stops-grid">
              {selectedStops.map((stateId, idx) => {
                const stateBundle = statesRegistry[stateId]
                const stateName = stateBundle?.data.name || stateId
                const tagline = stateBundle?.data.tagline || "Cultural Heritage of India"
                const capital = stateBundle?.data.capital || ""

                return (
                  <div key={`${stateId}-${idx}`} className="yatra-stop-card">
                    <div className="stop-left">
                      <div className="stop-step-num">{idx + 1}</div>
                      <div className="stop-details">
                        <div className="stop-name-row">
                          <span className="stop-title">{stateName}</span>
                          {capital && <span className="stop-capital">• Capital: {capital}</span>}
                        </div>
                        <p className="stop-tagline-text">{tagline}</p>
                      </div>
                    </div>

                    <div className="stop-actions">
                      <button
                        type="button"
                        className="stop-move-btn"
                        onClick={() => handleMoveStop(idx, "up")}
                        disabled={idx === 0}
                        title="Move up"
                      >
                        <MoveUp size={14} />
                      </button>
                      <button
                        type="button"
                        className="stop-move-btn"
                        onClick={() => handleMoveStop(idx, "down")}
                        disabled={idx === selectedStops.length - 1}
                        title="Move down"
                      >
                        <MoveDown size={14} />
                      </button>
                      <button
                        type="button"
                        className="stop-delete-btn"
                        onClick={() => handleRemoveStop(idx)}
                        title="Remove stop"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Stats Bar */}
          {selectedStops.length > 0 && (
            <div className="yatra-telemetry-bar">
              <div className="telemetry-item">
                <Layers size={18} className="telemetry-icon" />
                <div>
                  <span className="telemetry-label">Total States</span>
                  <span className="telemetry-value">{selectedStops.length} Destinations</span>
                </div>
              </div>

              <div className="telemetry-item">
                <Navigation size={18} className="telemetry-icon" />
                <div>
                  <span className="telemetry-label">Estimated Route</span>
                  <span className="telemetry-value">~{totalDistanceKm.toLocaleString()} km</span>
                </div>
              </div>

              <div className="telemetry-item">
                <Calendar size={18} className="telemetry-icon" />
                <div>
                  <span className="telemetry-label">Recommended Duration</span>
                  <span className="telemetry-value">{selectedStops.length * 3}–{selectedStops.length * 5} Days</span>
                </div>
              </div>

              <div className="telemetry-actions">
                <button
                  type="button"
                  className="yatra-gmaps-btn"
                  onClick={handleOpenGoogleMaps}
                  title="Open turnkey navigation in Google Maps"
                >
                  <MapPin size={16} className="text-red-maps" />
                  <span>Google Maps</span>
                  <ExternalLink size={13} />
                </button>

                <button
                  type="button"
                  className="yatra-pdf-btn"
                  onClick={handlePrintPDF}
                  title="Save or print royal itinerary PDF"
                >
                  <Printer size={16} />
                  <span>Save / Print PDF</span>
                </button>

                <button
                  type="button"
                  className="yatra-share-btn"
                  onClick={handleCopyItinerary}
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>Copied Summary!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      <span>Copy Summary</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="yatra-launch-btn"
                  onClick={handleStartJourney}
                >
                  <PlaneTakeoff size={18} />
                  <span>Begin Yatra from {statesRegistry[selectedStops[0]]?.data.name || "First Stop"}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Section 3: Add Destination States */}
        <section className="yatra-card-section">
          <div className="section-title-row">
            <Plus size={18} className="text-amber-500" />
            <h2>Add More Destinations ({availableStates.length} States & UTs)</h2>
          </div>

          <div className="state-search-box">
            <input
              type="text"
              placeholder="Filter states by name or capital..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="state-search-input"
            />
          </div>

          <div className="states-chips-grid">
            {filteredAvailable.map((st) => {
              const isAdded = selectedStops.includes(st.id)
              return (
                <button
                  key={st.id}
                  type="button"
                  className={`state-chip-btn ${isAdded ? "chip-added" : ""}`}
                  onClick={() => handleAddStop(st.id)}
                  disabled={isAdded}
                >
                  <div className="chip-content">
                    <span className="chip-name">{st.name}</span>
                    {st.capital && <span className="chip-cap">{st.capital}</span>}
                  </div>
                  {isAdded ? (
                    <Check size={15} className="chip-status-icon text-emerald" />
                  ) : (
                    <Plus size={15} className="chip-status-icon" />
                  )}
                </button>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
