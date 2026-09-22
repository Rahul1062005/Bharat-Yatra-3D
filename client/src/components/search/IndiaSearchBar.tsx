import { useState, useMemo, useRef, useEffect } from "react"
import { Search, X, MapPin, Compass, ChevronRight, Sparkles, SlidersHorizontal, MessageCircle, Trophy, Route, Award, Landmark } from "lucide-react"
import { statesRegistry } from "../../data/states"
import { getStateGreeting } from "../../data/greetings"
import "./IndiaSearchBar.css"

export interface IndiaSearchBarProps {
  onSelectState: (stateSlug: string) => void
  onHighlightState?: (stateName: string | null) => void
  onOpenGreetings?: () => void
  onOpenQuiz?: () => void
  onOpenJourneyPlanner?: () => void
  onOpenMasteryTracker?: () => void
  onOpenMonuments?: () => void
}

export interface RegionCategory {
  id: string
  label: string
  shortLabel: string
  states: string[]
}

export const REGIONS: RegionCategory[] = [
  { id: "all", label: "All Bharat", shortLabel: "All (36)", states: [] },
  {
    id: "north",
    label: "Northern",
    shortLabel: "North (8)",
    states: ["jammu-kashmir", "ladakh", "himachal-pradesh", "uttarakhand", "punjab", "haryana", "delhi", "chandigarh"],
  },
  {
    id: "west",
    label: "Western",
    shortLabel: "West (5)",
    states: ["rajasthan", "gujarat", "maharashtra", "goa", "dadra-nagar-haveli-daman-diu"],
  },
  {
    id: "south",
    label: "Southern",
    shortLabel: "South (7)",
    states: ["karnataka", "tamil-nadu", "kerala", "andhra-pradesh", "telangana", "puducherry", "lakshadweep"],
  },
  {
    id: "east",
    label: "Eastern",
    shortLabel: "East (4)",
    states: ["bihar", "west-bengal", "odisha", "jharkhand"],
  },
  {
    id: "central",
    label: "Central",
    shortLabel: "Central (2)",
    states: ["madhya-pradesh", "chhattisgarh"],
  },
  {
    id: "northeast",
    label: "North-East",
    shortLabel: "NE (8)",
    states: ["assam", "sikkim", "meghalaya", "manipur", "nagaland", "tripura", "mizoram", "arunachal-pradesh"],
  },
  {
    id: "ut",
    label: "Islands & UTs",
    shortLabel: "UTs (8)",
    states: [
      "delhi",
      "jammu-kashmir",
      "ladakh",
      "andaman-nicobar",
      "lakshadweep",
      "puducherry",
      "chandigarh",
      "dadra-nagar-haveli-daman-diu",
    ],
  },
]

const ALL_PRIMARY_SLUGS = [
  "bihar", "maharashtra", "uttar-pradesh", "rajasthan", "kerala", "gujarat",
  "west-bengal", "tamil-nadu", "karnataka", "punjab", "madhya-pradesh",
  "odisha", "andhra-pradesh", "telangana", "assam", "haryana",
  "himachal-pradesh", "uttarakhand", "goa", "jammu-kashmir",
  "jharkhand", "chhattisgarh", "sikkim", "meghalaya",
  "manipur", "nagaland", "tripura", "mizoram",
  "arunachal-pradesh", "ladakh", "delhi",
  "andaman-nicobar", "lakshadweep", "puducherry", "chandigarh", "dadra-nagar-haveli-daman-diu"
]

export default function IndiaSearchBar({
  onSelectState,
  onHighlightState,
  onOpenGreetings,
  onOpenQuiz,
  onOpenJourneyPlanner,
  onOpenMasteryTracker,
  onOpenMonuments,
}: IndiaSearchBarProps) {
  const [query, setQuery] = useState("")
  const [activeRegion, setActiveRegion] = useState("all")
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Filtered states list based on active region chip, search query, and regional greetings
  const filteredStates = useMemo(() => {
    const q = query.trim().toLowerCase()
    const activeRegionObj = REGIONS.find((r) => r.id === activeRegion)
    const allowedSlugs = activeRegion === "all" || !activeRegionObj ? ALL_PRIMARY_SLUGS : activeRegionObj.states

    return ALL_PRIMARY_SLUGS.filter((slug) => {
      if (!allowedSlugs.includes(slug)) return false
      const bundle = statesRegistry[slug]
      if (!bundle) return false

      if (!q) return true

      const nameMatch = bundle.data.name.toLowerCase().includes(q)
      const hindiMatch = bundle.data.hindiName?.toLowerCase().includes(q)
      const capitalMatch = bundle.data.capital.toLowerCase().includes(q)
      const taglineMatch = bundle.data.tagline.toLowerCase().includes(q)
      const districtsMatch = Object.keys(bundle.data.districts || {}).some((d) => d.toLowerCase().includes(q))
      
      const greeting = getStateGreeting(slug)
      const greetingMatch = greeting
        ? greeting.native.toLowerCase().includes(q) ||
          greeting.transliteration.toLowerCase().includes(q) ||
          greeting.meaning.toLowerCase().includes(q) ||
          greeting.language.toLowerCase().includes(q)
        : false

      return nameMatch || hindiMatch || capitalMatch || taglineMatch || districtsMatch || greetingMatch
    }).map((slug) => ({
      slug,
      ...statesRegistry[slug].data,
      greeting: getStateGreeting(slug),
    }))
  }, [query, activeRegion])

  const handleStateClick = (slug: string) => {
    setIsOpen(false)
    setQuery("")
    onSelectState(slug)
  }

  const activeRegionObj = REGIONS.find((r) => r.id === activeRegion)

  return (
    <div className="india-search-dock" ref={containerRef}>
      {/* Top Slim Search Bar Pill */}
      <div className={`india-search-bar-wrap ${isOpen ? "focused" : ""}`}>
        <Search size={16} className="search-bar-icon" />
        <input
          type="text"
          className="india-search-input"
          placeholder="Search 36 States & UTs or Greetings (e.g. Khamma Ghani, Vanakkam, Kerala)..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
        />

        {query ? (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        ) : (
          <button
            type="button"
            className={`search-filter-toggle-btn ${activeRegion !== "all" ? "has-filter" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            title="Filter by Region"
          >
            <SlidersHorizontal size={13} />
            <span>{activeRegion === "all" ? "Regions" : activeRegionObj?.shortLabel}</span>
          </button>
        )}
      </div>

      {/* Floating Results & Filter Tray (Expands only on interaction) */}
      {isOpen && (
        <div className="india-search-results-tray">
          {/* Region Filter Chips Inside Tray */}
          <div className="tray-filter-chips-row">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                type="button"
                className={`region-chip ${activeRegion === region.id ? "active" : ""}`}
                onClick={() => setActiveRegion(region.id)}
              >
                {region.shortLabel}
              </button>
            ))}
          </div>

          <div className="results-tray-header">
            <span className="results-count-label">
              <Sparkles size={12} className="results-sparkle-icon" />
              <span>
                <strong>{filteredStates.length}</strong> {filteredStates.length === 1 ? "Territory" : "Territories"}
              </span>
            </span>

            <div className="tray-header-actions">
              {onOpenQuiz && (
                <button
                  type="button"
                  className="tray-quiz-cta-btn"
                  onClick={() => {
                    setIsOpen(false)
                    onOpenQuiz()
                  }}
                  title="Play Guess the State 3D Quiz"
                >
                  <Trophy size={12} />
                  <span>Play Quiz</span>
                </button>
              )}

              {onOpenGreetings && (
                <button
                  type="button"
                  className="tray-greetings-cta-btn"
                  onClick={() => {
                    setIsOpen(false)
                    onOpenGreetings()
                  }}
                  title="Explore 36 Greetings of Bharat"
                >
                  <MessageCircle size={12} />
                  <span>Greetings</span>
                </button>
              )}

              {onOpenJourneyPlanner && (
                <button
                  type="button"
                  className="tray-greetings-cta-btn"
                  onClick={() => {
                    setIsOpen(false)
                    onOpenJourneyPlanner()
                  }}
                  title="Custom Route & Expedition Planner"
                >
                  <Route size={12} />
                  <span>My Yatra</span>
                </button>
              )}

              {onOpenMonuments && (
                <button
                  type="button"
                  className="tray-greetings-cta-btn"
                  onClick={() => {
                    setIsOpen(false)
                    onOpenMonuments()
                  }}
                  title="3D Architectural Monuments Inspector"
                >
                  <Landmark size={12} />
                  <span>3D Monuments</span>
                </button>
              )}

              {onOpenMasteryTracker && (
                <button
                  type="button"
                  className="tray-greetings-cta-btn"
                  onClick={() => {
                    setIsOpen(false)
                    onOpenMasteryTracker()
                  }}
                  title="National Cultural Mastery Tracker"
                >
                  <Award size={12} />
                  <span>Mastery</span>
                </button>
              )}
            </div>

            <button
              type="button"
              className="results-tray-close"
              onClick={() => {
                setIsOpen(false)
                setActiveRegion("all")
              }}
            >
              Close ✕
            </button>
          </div>

          <div className="results-grid">
            {filteredStates.map((st) => (
              <div
                key={st.slug}
                className="result-state-card"
                onClick={() => handleStateClick(st.slug)}
                onMouseEnter={() => onHighlightState && onHighlightState(st.name)}
                onMouseLeave={() => onHighlightState && onHighlightState(null)}
              >
                <div className="result-card-info">
                  <div className="result-card-title-row">
                    <h4 className="result-card-name">{st.name}</h4>
                    <span className="result-card-hindi">{st.hindiName}</span>
                    {st.greeting && (
                      <span className="result-card-greeting-badge" title={`Greeting: ${st.greeting.meaning}`}>
                        {st.greeting.native.split("/")[0].trim()}
                      </span>
                    )}
                  </div>
                  <div className="result-card-meta">
                    <span className="result-meta-item">
                      <MapPin size={11} />
                      <span>{st.capital}</span>
                    </span>
                    <span className="result-meta-tagline">{st.tagline}</span>
                  </div>
                </div>
                <div className="result-card-action">
                  <span className="dive-pill">
                    <span>Dive</span>
                    <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            ))}

            {filteredStates.length === 0 && (
              <div className="no-results-state">
                <Compass size={24} className="no-results-icon" />
                <p>No states match "{query}"</p>
                <span>Try searching by capital city or select "All (36)" above.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
