import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Globe, MessageCircle, Gamepad2, Route, Award, Sparkles } from "lucide-react"

import Earth from "../../components/globe/Earth"
import IndiaMap, { preloadIndiaMapData } from "../../components/map/IndiaMap"
import IndiaSearchBar from "../../components/search/IndiaSearchBar"
import GreetingsModal from "../../components/greetings/GreetingsModal"
import GuessTheStateModal from "../../components/game/GuessTheStateModal"
import IndiaGeoTelemetry from "../../components/telemetry/IndiaGeoTelemetry"
import NationalMasteryModal from "../../components/tracker/NationalMasteryModal"
import JourneyPlannerModal from "../../components/itinerary/JourneyPlannerModal"
import HeritageCompanionModal from "../../components/ai/HeritageCompanionModal"
import { getStateTheme } from "../../data/stateThemes"
import "./ExplorePage.css"

export type ExploreStage = "globe" | "diving" | "india"

interface ExplorePageProps {
  initialStage?: "globe" | "india"
}

function ExplorePage({ initialStage = "globe" }: ExplorePageProps) {
  const navigate = useNavigate()
  const [stage, setStage] = useState<ExploreStage>(initialStage)
  const [cloudWashActive, setCloudWashActive] = useState(false)
  const [isDivingIntoState, setIsDivingIntoState] = useState(false)
  const [isGreetingsOpen, setIsGreetingsOpen] = useState(false)
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isMasteryOpen, setIsMasteryOpen] = useState(false)
  const [isJourneyOpen, setIsJourneyOpen] = useState(false)
  const [isAiCompanionOpen, setIsAiCompanionOpen] = useState(false)
  const [hoveredStateName, setHoveredStateName] = useState<string | null>(null)

  // Sync if initialStage changes externally
  useEffect(() => {
    setStage(initialStage)
  }, [initialStage])

  // Preload India GeoJSON data on mount while user explores the globe
  useEffect(() => {
    preloadIndiaMapData()
  }, [])

  // User clicks India on the 3D globe
  const handleStartDive = () => {
    if (stage !== "globe") return
    setStage("diving")

    // After 520ms into deep camera zoom, the atmospheric mist/cloud wash rushes in
    setTimeout(() => {
      setCloudWashActive(true)
    }, 520)
  }

  // Camera dive reaches India on the globe
  const handleDiveComplete = () => {
    // Switch to 3D India Map while covered by atmospheric wash
    setStage("india")
    window.history.pushState(null, "", "/india")

    // Atmospheric mist smoothly clears and reveals India Map with zoom arrival
    setTimeout(() => {
      setCloudWashActive(false)
    }, 320)
  }

  // Reverse transition from India Map back out to the Earth Globe
  const handleBackToGlobe = () => {
    setCloudWashActive(true)
    setTimeout(() => {
      setStage("globe")
      window.history.pushState(null, "", "/explore")
      setTimeout(() => {
        setCloudWashActive(false)
      }, 300)
    }, 280)
  }

  // Dive from India Map into specific State (Bihar, Maharashtra, UP, Rajasthan, Kerala, Gujarat, West Bengal, Tamil Nadu, Karnataka, Punjab)
  const handleStateDive = (stateName: string) => {
    let slug = ""
    if (/bihar/i.test(stateName)) slug = "bihar"
    else if (/maharashtra/i.test(stateName)) slug = "maharashtra"
    else if (/uttar pradesh/i.test(stateName)) slug = "uttar-pradesh"
    else if (/rajasthan/i.test(stateName)) slug = "rajasthan"
    else if (/kerala/i.test(stateName)) slug = "kerala"
    else if (/gujarat/i.test(stateName)) slug = "gujarat"
    else if (/west bengal/i.test(stateName)) slug = "west-bengal"
    else if (/tamil nadu/i.test(stateName)) slug = "tamil-nadu"
    else if (/karnataka/i.test(stateName)) slug = "karnataka"
    else if (/punjab/i.test(stateName)) slug = "punjab"
    else if (/madhya pradesh/i.test(stateName)) slug = "madhya-pradesh"
    else if (/odisha/i.test(stateName)) slug = "odisha"
    else if (/andhra pradesh/i.test(stateName)) slug = "andhra-pradesh"
    else if (/telangana/i.test(stateName)) slug = "telangana"
    else if (/assam/i.test(stateName)) slug = "assam"
    else if (/haryana/i.test(stateName)) slug = "haryana"
    else if (/himachal pradesh/i.test(stateName)) slug = "himachal-pradesh"
    else if (/uttarakhand/i.test(stateName)) slug = "uttarakhand"
    else if (/goa/i.test(stateName)) slug = "goa"
    else if (/jammu/i.test(stateName) || /kashmir/i.test(stateName)) slug = "jammu-kashmir"
    else if (/jharkhand/i.test(stateName)) slug = "jharkhand"
    else if (/chhattisgarh/i.test(stateName)) slug = "chhattisgarh"
    else if (/sikkim/i.test(stateName)) slug = "sikkim"
    else if (/meghalaya/i.test(stateName)) slug = "meghalaya"
    else if (/manipur/i.test(stateName)) slug = "manipur"
    else if (/nagaland/i.test(stateName)) slug = "nagaland"
    else if (/tripura/i.test(stateName)) slug = "tripura"
    else if (/mizoram/i.test(stateName)) slug = "mizoram"
    else if (/arunachal/i.test(stateName)) slug = "arunachal-pradesh"
    else if (/ladakh/i.test(stateName)) slug = "ladakh"
    else if (/delhi/i.test(stateName)) slug = "delhi"
    else if (/andaman/i.test(stateName) || /nicobar/i.test(stateName)) slug = "andaman-nicobar"
    else if (/lakshadweep/i.test(stateName)) slug = "lakshadweep"
    else if (/puducherry/i.test(stateName) || /pondicherry/i.test(stateName)) slug = "puducherry"
    else if (/chandigarh/i.test(stateName)) slug = "chandigarh"
    else if (/dadra/i.test(stateName) || /daman/i.test(stateName) || /diu/i.test(stateName)) slug = "dadra-nagar-haveli-daman-diu"

    if (slug) {
      setIsDivingIntoState(true)

      // Atmospheric mist / cloud wash rushes in as camera swoops deep into state coordinates
      setTimeout(() => {
        setCloudWashActive(true)
      }, 420)

      // Navigate to dedicated 3D State page with zoom landing
      setTimeout(() => {
        navigate(`/state/${slug}`)
      }, 920)
    }
  }

  const activeTheme = hoveredStateName
    ? getStateTheme(hoveredStateName.toLowerCase().replace(/[^a-z0-9]/g, "-"))
    : null

  return (
    <main
      className={`explore-page stage-${stage} ${hoveredStateName ? "has-hovered-state" : ""}`}
      style={{
        ["--hover-primary" as string]: activeTheme?.primaryColor || "#f59e0b",
        ["--hover-secondary" as string]: activeTheme?.secondaryColor || "#d97706",
      }}
    >
      {/* ================= ROYAL INDIAN HERITAGE PAINTINGS & VINTAGE GRAFFITI BACKDROP ================= */}
      <div className="heritage-paintings-backdrop" aria-hidden="true">
        {/* Dynamic Radiant State Aura Wash */}
        <div className="heritage-aura-wash" />

        {/* Ancient Stone Wall / Fresco Graffiti Texture */}
        <div className="heritage-fresco-graffiti-texture" />

        {/* Corner Murals & Vintage Folk Art Paintings */}
        <div className="heritage-corner-art corner-top-left madhubani-mural">
          <svg viewBox="0 0 200 200" className="heritage-art-svg">
            <g fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.65">
              <circle cx="70" cy="70" r="55" strokeDasharray="3 3" />
              <circle cx="70" cy="70" r="42" />
              <circle cx="70" cy="70" r="28" fill="rgba(245, 158, 11, 0.15)" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1="70"
                  y1="70"
                  x2={70 + 64 * Math.cos((deg * Math.PI) / 180)}
                  y2={70 + 64 * Math.sin((deg * Math.PI) / 180)}
                  strokeWidth="1.2"
                />
              ))}
              <path d="M70 135 C110 135 140 100 140 60 C100 60 70 95 70 135 Z" fill="rgba(225, 29, 72, 0.12)" />
              <path d="M140 60 Q170 30 190 50 Q160 80 140 60 Z" fill="rgba(13, 148, 136, 0.16)" />
              <circle cx="120" cy="80" r="3" fill="currentColor" />
            </g>
          </svg>
          <span className="heritage-art-label">मिथिला मधुबनी • MADHUBANI FRESCO</span>
        </div>

        <div className="heritage-corner-art corner-top-right pichwai-mural">
          <svg viewBox="0 0 200 200" className="heritage-art-svg">
            <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.65">
              <path d="M190 10 Q100 20 100 110" strokeDasharray="4 3" />
              <path d="M130 60 C145 30 165 30 180 60 C165 90 145 90 130 60 Z" fill="rgba(244, 63, 94, 0.18)" />
              <path d="M110 90 C125 60 145 60 160 90 C145 120 125 120 110 90 Z" fill="rgba(245, 158, 11, 0.16)" />
              <path d="M150 110 C165 80 185 80 200 110 C185 140 165 140 150 110 Z" fill="rgba(225, 29, 72, 0.15)" />
              <circle cx="155" cy="85" r="8" fill="rgba(251, 191, 36, 0.28)" />
            </g>
          </svg>
          <span className="heritage-art-label">पिचवाई मेवाड़ • PICHWAI TEMPLE ART</span>
        </div>

        <div className="heritage-corner-art corner-bottom-left warli-graffiti">
          <svg viewBox="0 0 220 220" className="heritage-art-svg">
            <g fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.65">
              <circle cx="80" cy="140" r="50" strokeDasharray="5 4" />
              <circle cx="80" cy="140" r="28" strokeDasharray="3 3" />
              <circle cx="80" cy="132" r="5" fill="currentColor" />
              <polygon points="80,137 73,148 87,148" fill="currentColor" opacity="0.8" />
              <polygon points="80,158 73,148 87,148" fill="currentColor" opacity="0.8" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                const cx = 80 + 44 * Math.cos((deg * Math.PI) / 180)
                const cy = 140 + 44 * Math.sin((deg * Math.PI) / 180)
                return (
                  <g key={deg} transform={`translate(${cx - 8}, ${cy - 8}) scale(0.4)`}>
                    <circle cx="20" cy="8" r="5" fill="currentColor" />
                    <polygon points="20,14 12,28 28,28" fill="currentColor" />
                    <polygon points="20,40 12,28 28,28" fill="currentColor" />
                    <line x1="12" y1="28" x2="4" y2="18" strokeWidth="2" />
                    <line x1="28" y1="28" x2="36" y2="18" strokeWidth="2" />
                  </g>
                )
              })}
            </g>
          </svg>
          <span className="heritage-art-label">वारली भित्तिचित्र • WARLI TRIBAL GRAFFITI</span>
        </div>

        <div className="heritage-corner-art corner-bottom-right ajanta-tanjore">
          <svg viewBox="0 0 220 220" className="heritage-art-svg">
            <g fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.65">
              <path d="M120 210 L120 120 Q165 80 210 120 L210 210" strokeWidth="1.8" />
              <path d="M135 210 L135 130 Q165 98 195 130 L195 210" strokeDasharray="3 3" />
              <polygon points="165,70 175,90 195,90 180,102 185,120 165,108 145,120 150,102 135,90 155,90" fill="rgba(245, 158, 11, 0.18)" />
              <circle cx="165" cy="140" r="14" fill="rgba(225, 29, 72, 0.15)" />
            </g>
          </svg>
          <span className="heritage-art-label">अजंता व तंजावुर • AJANTA FRESCO & JAALI</span>
        </div>

        {/* Floating State Cultural Art Badge when a state is hovered */}
        {hoveredStateName && activeTheme && (
          <div className="heritage-hovered-badge-floating">
            <span className="badge-flourish">✦</span>
            <span className="badge-state-name">{hoveredStateName}</span>
            <span className="badge-divider">•</span>
            <span className="badge-art-name">{activeTheme.artName}</span>
          </div>
        )}
      </div>

      {/* ================= ATMOSPHERIC DIVE VFX OVERLAY ================= */}
      <div
        className={`atmosphere-dive-overlay ${
          cloudWashActive ? "active" : ""
        }`}
      >
        <div className="dive-speed-lines" />
        <div className="dive-cloud-wash" />
        <div className="dive-warp-ring" />
      </div>

      {/* ================= NAVIGATION BUTTON ================= */}
      {stage === "globe" && (
        <button
          type="button"
          className="home-back-button"
          onClick={() => navigate("/")}
        >
          <span className="home-button-icon">
            <ArrowLeft size={17} />
          </span>
          <span className="home-button-text">Home</span>
        </button>
      )}

      {stage === "india" && (
        <>
          {/* ================= LEFT ACTIONS DOCK ================= */}
          <div className="explore-top-left-dock">
            <button
              type="button"
              className="home-back-button"
              onClick={handleBackToGlobe}
              title="Return to 3D Earth Globe"
            >
              <span className="home-button-icon">
                <Globe size={15} />
              </span>
              <span className="home-button-text">Earth</span>
            </button>

            <button
              type="button"
              className="quiz-launcher-btn"
              onClick={() => setIsQuizOpen(true)}
              title="Play Guess the State 3D Quiz Challenge"
            >
              <span className="quiz-launcher-icon">
                <Gamepad2 size={15} />
              </span>
              <span className="quiz-launcher-text">Play Quiz</span>
            </button>

            <button
              type="button"
              className="greetings-launcher-btn"
              onClick={() => setIsGreetingsOpen(true)}
              title="Explore 36 Greetings of Bharat"
            >
              <span className="greetings-launcher-icon">
                <MessageCircle size={15} />
              </span>
              <span className="greetings-launcher-text">Greetings</span>
            </button>
          </div>

          {/* ================= RIGHT ACTIONS DOCK ================= */}
          <div className="explore-top-right-dock">
            <button
              type="button"
              className="heritage-ai-dock-btn"
              onClick={() => setIsAiCompanionOpen(true)}
              title="Ask Bharat Heritage AI Companion about India in general"
            >
              <span className="heritage-ai-dock-icon">
                <Sparkles size={15} />
              </span>
              <span className="heritage-ai-dock-text">Heritage AI</span>
            </button>

            <button
              type="button"
              className="journey-launcher-btn"
              onClick={() => setIsJourneyOpen(true)}
              title="Plan your custom route, Export to Google Maps or save PDF"
            >
              <span className="journey-launcher-icon">
                <Route size={15} />
              </span>
              <span className="journey-launcher-text">Route & Maps</span>
            </button>

            <button
              type="button"
              className="mastery-launcher-btn"
              onClick={() => setIsMasteryOpen(true)}
              title="National Cultural Mastery Tracker"
            >
              <span className="mastery-launcher-icon">
                <Award size={15} />
              </span>
              <span className="mastery-launcher-text">Mastery Tracker</span>
            </button>
          </div>
        </>
      )}

      {/* ================= DYNAMIC HEADERS ================= */}
      {stage !== "india" && (
        <header
          className={`explore-header ${
            stage === "diving" ? "header-fading" : ""
          }`}
        >
          <p className="explore-tag">BHARAT YATRA</p>
          <h1>India, Unfolded.</h1>
          <p className="explore-subtitle">
            {stage === "diving"
              ? "Entering India..."
              : "Click India to begin."}
          </p>
        </header>
      )}

      {/* ================= 3D VIEWPORT ================= */}
      {stage !== "india" ? (
        <div
          className={`earth-container ${
            stage === "diving" ? "earth-diving" : ""
          }`}
        >
          <Earth
            isDiving={stage === "diving"}
            onStartDive={handleStartDive}
            onDiveComplete={handleDiveComplete}
          />
        </div>
      ) : (
        <div className={`india-container ${isDivingIntoState ? "diving-state-active" : ""}`}>
          <IndiaSearchBar
            onSelectState={handleStateDive}
            onOpenGreetings={() => setIsGreetingsOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onOpenJourneyPlanner={() => setIsJourneyOpen(true)}
            onOpenMasteryTracker={() => setIsMasteryOpen(true)}
          />
          <IndiaMap
            animateEntrance={true}
            onStateDive={handleStateDive}
            onHoverState={setHoveredStateName}
          />

          {/* India Geographic Telemetry (Collapsible dock in bottom-left) */}
          <IndiaGeoTelemetry />
        </div>
      )}

      {/* ================= GLOBAL MODALS (ROOT STACKING OVER ALL DOCKS) ================= */}
      <GreetingsModal
        isOpen={isGreetingsOpen}
        onClose={() => setIsGreetingsOpen(false)}
        onSelectState={handleStateDive}
      />

      <GuessTheStateModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onExploreState={handleStateDive}
      />

      <NationalMasteryModal
        isOpen={isMasteryOpen}
        onClose={() => setIsMasteryOpen(false)}
      />

      <JourneyPlannerModal
        isOpen={isJourneyOpen}
        onClose={() => setIsJourneyOpen(false)}
      />

      <HeritageCompanionModal
        isOpen={isAiCompanionOpen}
        onClose={() => setIsAiCompanionOpen(false)}
      />
    </main>
  )
}

export default ExplorePage