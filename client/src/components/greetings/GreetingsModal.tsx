import { useState, useMemo, useEffect } from "react"
import { X, Search, Volume2, ArrowRight, Sparkles, MapPin } from "lucide-react"
import { GREETINGS_DATA, type StateGreeting } from "../../data/greetings"
import { playGreetingAudio, stopGreetingAudio } from "../../utils/greetingSpeech"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
import "./GreetingsModal.css"

interface GreetingsModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectState: (stateSlug: string) => void
}

const REGION_TABS = [
  { id: "all", label: "All Bharat", count: 36 },
  { id: "North", label: "North", count: 8 },
  { id: "South", label: "South", count: 7 },
  { id: "East", label: "East", count: 4 },
  { id: "West", label: "West", count: 5 },
  { id: "Central", label: "Central", count: 2 },
  { id: "Northeast", label: "North-East", count: 8 },
  { id: "UT", label: "UTs & Islands", count: 8 },
]

export default function GreetingsModal({
  isOpen,
  onClose,
  onSelectState,
}: GreetingsModalProps) {
  useBodyScrollLock(isOpen)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [speakingId, setSpeakingId] = useState<string | null>(null)

  // Stop audio and reset search when modal closes
  useEffect(() => {
    if (!isOpen) {
      stopGreetingAudio()
      setSpeakingId(null)
    }
  }, [isOpen])

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const greetingsList = useMemo(() => Object.values(GREETINGS_DATA), [])

  const filteredGreetings = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return greetingsList.filter((g) => {
      // Region filter
      if (activeTab !== "all" && g.region !== activeTab) {
        return false
      }
      if (!q) return true

      return (
        g.stateName.toLowerCase().includes(q) ||
        g.native.toLowerCase().includes(q) ||
        g.transliteration.toLowerCase().includes(q) ||
        g.language.toLowerCase().includes(q) ||
        g.meaning.toLowerCase().includes(q)
      )
    })
  }, [greetingsList, activeTab, searchQuery])

  const handlePlayAudio = (greeting: StateGreeting) => {
    if (speakingId === greeting.stateId) {
      stopGreetingAudio()
      setSpeakingId(null)
      return
    }

    setSpeakingId(greeting.stateId)
    playGreetingAudio(
      greeting,
      () => setSpeakingId(greeting.stateId),
      () => setSpeakingId(null),
      () => setSpeakingId(null)
    )
  }

  const handleStateClick = (stateId: string) => {
    stopGreetingAudio()
    onClose()
    onSelectState(stateId)
  }

  if (!isOpen) return null

  return (
    <div
      className="greetings-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="greetings-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="greetings-modal-title"
      >
        {/* Modal Header */}
        <header className="greetings-modal-header">
          <div className="greetings-header-titles">
            <div className="greetings-tag">
              <Sparkles size={12} className="tag-sparkle" />
              <span>NAMASKAR BHARAT • 36 CULTURAL GREETINGS</span>
            </div>
            <h2 id="greetings-modal-title" className="greetings-title">
              How India Says "Hello"
            </h2>
            <p className="greetings-subtitle">
              Listen to the sacred, joyful, and timeless greetings across all 36 States & Union Territories.
            </p>
          </div>
          <button
            type="button"
            className="greetings-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </header>

        {/* Toolbar: Search + Regional Filters */}
        <div className="greetings-toolbar">
          <div className="greetings-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search greeting (e.g. Khamma Ghani, Vanakkam, Sat Sri Akal, Julley)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="greetings-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="search-clear-btn"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="greetings-tabs-bar">
            {REGION_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`greeting-tab-chip ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="tab-chip-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Greetings Cards Grid */}
        <div className="greetings-grid-container">
          {filteredGreetings.length === 0 ? (
            <div className="greetings-empty-state">
              <p>No greetings matched "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("")
                  setActiveTab("all")
                }}
                className="reset-search-btn"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="greetings-cards-grid">
              {filteredGreetings.map((greeting) => {
                const isPlaying = speakingId === greeting.stateId
                return (
                  <article key={greeting.stateId} className={`greeting-card ${isPlaying ? "playing" : ""}`}>
                    <div className="greeting-card-top">
                      <div className="greeting-state-pill">
                        <MapPin size={11} />
                        <span>{greeting.stateName}</span>
                      </div>
                      <span className="greeting-lang-tag">{greeting.language}</span>
                    </div>

                    <div className="greeting-phrase-hero">
                      <h3 className="greeting-native-script">{greeting.native}</h3>
                      <div className="greeting-phonetic-roman">{greeting.transliteration}</div>
                    </div>

                    <p className="greeting-meaning-text">
                      "{greeting.meaning}"
                    </p>

                    <p className="greeting-context-note">
                      {greeting.culturalContext}
                    </p>

                    <div className="greeting-card-actions">
                      <button
                        type="button"
                        className={`listen-audio-btn ${isPlaying ? "active-audio" : ""}`}
                        onClick={() => handlePlayAudio(greeting)}
                        title="Listen to pronunciation"
                      >
                        <Volume2 size={15} className={isPlaying ? "speaker-pulse" : ""} />
                        <span>{isPlaying ? "Speaking..." : "Listen"}</span>
                        {isPlaying && (
                          <div className="audio-wave-bars">
                            <span />
                            <span />
                            <span />
                          </div>
                        )}
                      </button>

                      <button
                        type="button"
                        className="explore-state-link"
                        onClick={() => handleStateClick(greeting.stateId)}
                      >
                        <span>Explore 3D</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
