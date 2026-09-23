import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import {
  X,
  Maximize2,
  Minimize2,
  Calendar,
  Sparkles,
  Sun,
  Compass,
  MapPin,
  Search,
  ArrowRight,
  Filter,
  CheckCircle,
} from "lucide-react"
import {
  BHARAT_FESTIVALS,
  BHARAT_SEASONS,
  STATE_TRAVEL_WINDOWS,
  type BharatSeason,
} from "../../data/bharatFestivals"
import "./BharatUtsavModal.css"

interface BharatUtsavModalProps {
  isOpen: boolean
  onClose: () => void
  onExploreState?: (stateId: string) => void
}

type TabType = "festivals" | "seasons" | "best-time"

const MONTH_NAMES = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function BharatUtsavModal({
  isOpen,
  onClose,
  onExploreState,
}: BharatUtsavModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("festivals")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<number>(0) // 0 = all
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSeason, setSelectedSeason] = useState<BharatSeason>(BHARAT_SEASONS[0])
  const [selectedStateKey, setSelectedStateKey] = useState<string>("rajasthan")

  // Lock background scroll when open
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false)
        } else {
          onClose()
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, isFullscreen, onClose])

  if (!isOpen) return null

  // Filter festivals based on month, category, and search query
  const filteredFestivals = BHARAT_FESTIVALS.filter((fest) => {
    const matchesMonth =
      selectedMonth === 0 || fest.monthNum === selectedMonth
    const matchesCategory =
      selectedCategory === "All" || fest.category === selectedCategory
    const q = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !q ||
      fest.name.toLowerCase().includes(q) ||
      fest.hindiName.toLowerCase().includes(q) ||
      fest.states.some((s) => s.toLowerCase().includes(q)) ||
      fest.tagline.toLowerCase().includes(q)

    return matchesMonth && matchesCategory && matchesSearch
  })

  const currentStateData = STATE_TRAVEL_WINDOWS[selectedStateKey] || STATE_TRAVEL_WINDOWS["rajasthan"]

  const modalContent = (
    <div
      className={`bharat-utsav-backdrop ${isFullscreen ? "is-fullscreen-backdrop" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bharat-utsav-card ${isFullscreen ? "is-fullscreen-card" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= RADIANT PAINTING BACKGROUND LAYER ================= */}
        <div className="utsav-painting-bg" aria-hidden="true" />
        <div className="utsav-painting-radiance" aria-hidden="true" />

        {/* ================= MODAL HEADER ================= */}
        <header className="utsav-header">
          <div className="utsav-header-left">
            <div className="utsav-header-kicker">
              <Sparkles size={14} className="utsav-sparkle-icon" />
              <span>BHARAT UTSAV & RITU GUIDE • उत्सव एवं ऋतु चक्र</span>
            </div>
            <h2 className="utsav-header-title">
              Living Festivals & Sacred Seasons of India
            </h2>
            <p className="utsav-header-subtitle">
              Plan your travel around vibrant regional fairs, temple celebrations, and golden weather windows
            </p>
          </div>

          <div className="utsav-header-actions">
            {/* Fullscreen Toggle */}
            <button
              type="button"
              className="utsav-action-btn"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Mode"}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Mode"}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              <span className="utsav-action-label">
                {isFullscreen ? "Exit Full" : "Full Screen"}
              </span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              className="utsav-close-btn"
              onClick={onClose}
              title="Close Utsav Guide"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* ================= NAVIGATION TABS ================= */}
        <nav className="utsav-nav-tabs">
          <button
            type="button"
            className={`utsav-tab-btn ${activeTab === "festivals" ? "active" : ""}`}
            onClick={() => setActiveTab("festivals")}
          >
            <Calendar size={16} />
            <span>Grand Cultural Festivals</span>
            <span className="utsav-tab-count">{BHARAT_FESTIVALS.length}</span>
          </button>

          <button
            type="button"
            className={`utsav-tab-btn ${activeTab === "seasons" ? "active" : ""}`}
            onClick={() => setActiveTab("seasons")}
          >
            <Sun size={16} />
            <span>The 6 Seasons (षड्ऋतु)</span>
            <span className="utsav-tab-count">6 Ritus</span>
          </button>

          <button
            type="button"
            className={`utsav-tab-btn ${activeTab === "best-time" ? "active" : ""}`}
            onClick={() => setActiveTab("best-time")}
          >
            <Compass size={16} />
            <span>State Best Time to Visit</span>
            <span className="utsav-tab-count">36 Realms</span>
          </button>
        </nav>

        {/* ================= TAB 1: GRAND FESTIVALS ================= */}
        {activeTab === "festivals" && (
          <div className="utsav-tab-panel">
            {/* Controls Bar: Search, Month, and Category filters */}
            <div className="utsav-filter-bar">
              <div className="utsav-search-wrap">
                <Search size={15} className="utsav-search-icon" />
                <input
                  type="text"
                  placeholder="Search festival, state, or ritual..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="utsav-search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="utsav-clear-search"
                    onClick={() => setSearchQuery("")}
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Month Selector Pills */}
              <div className="utsav-month-scroll">
                {MONTH_NAMES.map((m, idx) => (
                  <button
                    key={m}
                    type="button"
                    className={`utsav-month-pill ${selectedMonth === idx ? "active" : ""}`}
                    onClick={() => setSelectedMonth(idx)}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Category Selector */}
              <div className="utsav-category-pills">
                <span className="utsav-filter-label">
                  <Filter size={12} />
                  <span>Genre:</span>
                </span>
                {["All", "Spiritual", "Harvest & Folk", "Desert & Fair", "Classical Art & Music"].map(
                  (cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`utsav-cat-pill ${selectedCategory === cat ? "active" : ""}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Festival Cards Grid */}
            <div className="utsav-festivals-grid">
              {filteredFestivals.map((fest) => (
                <article key={fest.id} className="utsav-card-item">
                  <div className="utsav-card-top-row">
                    <span
                      className="utsav-category-badge"
                      style={{ borderColor: fest.color, color: fest.color }}
                    >
                      {fest.category}
                    </span>
                    <span className="utsav-month-tag">
                      <Calendar size={12} />
                      <span>{fest.month}</span>
                    </span>
                  </div>

                  <div className="utsav-card-heading">
                    <h3 className="utsav-fest-name">{fest.name}</h3>
                    <span className="utsav-hindi-script">{fest.hindiName}</span>
                  </div>

                  <p className="utsav-fest-tagline">“{fest.tagline}”</p>

                  <div className="utsav-states-row">
                    <MapPin size={13} className="utsav-pin-icon" />
                    <span>{fest.states.join(" • ")}</span>
                  </div>

                  <div className="utsav-highlights-box">
                    <span className="utsav-box-title">Key Sacred Highlights:</span>
                    <ul className="utsav-highlights-list">
                      {fest.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="utsav-prasad-row">
                    <span className="utsav-prasad-label">Traditional Foods:</span>
                    <span className="utsav-prasad-value">{fest.traditionalFood}</span>
                  </div>

                  <div className="utsav-travel-tip">
                    <span className="utsav-tip-badge">Travel Insider Tip</span>
                    <p className="utsav-tip-text">{fest.travelTip}</p>
                  </div>
                </article>
              ))}

              {filteredFestivals.length === 0 && (
                <div className="utsav-empty-state">
                  <Calendar size={32} />
                  <h4>No festivals found matching your criteria</h4>
                  <p>Try switching to "All Months" or clear your search query.</p>
                  <button
                    type="button"
                    className="utsav-reset-btn"
                    onClick={() => {
                      setSelectedMonth(0)
                      setSelectedCategory("All")
                      setSearchQuery("")
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 2: THE 6 SEASONS (षड्ऋतु) ================= */}
        {activeTab === "seasons" && (
          <div className="utsav-tab-panel utsav-seasons-layout">
            <div className="utsav-seasons-sidebar">
              <span className="utsav-sidebar-title">Select Classical Ritu</span>
              {BHARAT_SEASONS.map((season) => (
                <button
                  key={season.name}
                  type="button"
                  className={`utsav-season-btn ${
                    selectedSeason.name === season.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedSeason(season)}
                  style={{
                    borderLeftColor:
                      selectedSeason.name === season.name ? season.accentColor : "transparent",
                  }}
                >
                  <div className="utsav-season-btn-main">
                    <span className="utsav-season-name">{season.name}</span>
                    <span className="utsav-season-sanskrit">{season.sanskritName}</span>
                  </div>
                  <span className="utsav-season-months">{season.gregorianMonths}</span>
                </button>
              ))}
            </div>

            <div className="utsav-season-detail-card">
              <div className="utsav-season-detail-header">
                <div>
                  <span
                    className="utsav-season-element-tag"
                    style={{ background: `${selectedSeason.accentColor}18`, color: selectedSeason.accentColor }}
                  >
                    {selectedSeason.element}
                  </span>
                  <h3 className="utsav-season-hero-title">
                    {selectedSeason.name} • {selectedSeason.sanskritName}
                  </h3>
                  <span className="utsav-season-hero-months">
                    Typical Months: {selectedSeason.gregorianMonths}
                  </span>
                </div>
              </div>

              <blockquote className="utsav-season-poetic">
                {selectedSeason.poeticDesc}
              </blockquote>

              <div className="utsav-climate-box">
                <Sun size={16} className="utsav-climate-icon" />
                <div>
                  <span className="utsav-climate-label">Typical Subcontinent Climate:</span>
                  <p className="utsav-climate-desc">{selectedSeason.climate}</p>
                </div>
              </div>

              <div className="utsav-destinations-section">
                <h4 className="utsav-dest-title">
                  Ideal Places to Travel During {selectedSeason.name.split(" ")[0]}
                </h4>
                <div className="utsav-dest-grid">
                  {selectedSeason.idealDestinations.map((dest, i) => (
                    <div key={i} className="utsav-dest-chip">
                      <CheckCircle size={14} className="utsav-check-icon" />
                      <span>{dest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: STATE BEST TIME TO VISIT ================= */}
        {activeTab === "best-time" && (
          <div className="utsav-tab-panel utsav-states-layout">
            <div className="utsav-states-sidebar">
              <span className="utsav-sidebar-title">Pick a State / Union Territory</span>
              <div className="utsav-states-list">
                {Object.values(STATE_TRAVEL_WINDOWS).map((st) => (
                  <button
                    key={st.stateId}
                    type="button"
                    className={`utsav-state-select-btn ${
                      selectedStateKey === st.stateId ? "active" : ""
                    }`}
                    onClick={() => setSelectedStateKey(st.stateId)}
                  >
                    <span className="utsav-st-name">{st.stateName}</span>
                    <span className="utsav-st-tag">{st.bestTime.split("(")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="utsav-state-weather-card">
              <div className="utsav-st-header-banner">
                <div>
                  <span className="utsav-st-kicker">OPTIMAL TRAVEL WINDOW</span>
                  <h3 className="utsav-st-title">{currentStateData.stateName}</h3>
                </div>
                <div className="utsav-st-temp-pill">
                  <Sun size={15} />
                  <span>{currentStateData.temperature}</span>
                </div>
              </div>

              <div className="utsav-st-details-body">
                <div className="utsav-st-metric-row">
                  <div className="utsav-st-metric">
                    <span className="utsav-metric-label">Best Months to Visit:</span>
                    <span className="utsav-metric-value">{currentStateData.bestTime}</span>
                  </div>

                  <div className="utsav-st-metric">
                    <span className="utsav-metric-label">Peak Season Months:</span>
                    <div className="utsav-peak-pills">
                      {currentStateData.peakMonths.map((m) => (
                        <span key={m} className="utsav-peak-chip">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="utsav-st-why-box">
                  <span className="utsav-why-label">Why This Is The Golden Window:</span>
                  <p className="utsav-why-text">{currentStateData.whyVisit}</p>
                </div>

                <div className="utsav-st-fest-highlight">
                  <span className="utsav-fest-chip-label">Signature State Festival:</span>
                  <span className="utsav-fest-chip-val">{currentStateData.signatureFestival}</span>
                </div>

                {onExploreState && (
                  <button
                    type="button"
                    className="utsav-dive-state-btn"
                    onClick={() => {
                      onClose()
                      onExploreState(currentStateData.stateName)
                    }}
                  >
                    <Compass size={16} />
                    <span>Explore {currentStateData.stateName} on 3D Map</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
