import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Globe, MessageCircle, Gamepad2 } from "lucide-react"

import Earth from "../../components/globe/Earth"
import IndiaMap, { preloadIndiaMapData } from "../../components/map/IndiaMap"
import IndiaSearchBar from "../../components/search/IndiaSearchBar"
import GreetingsModal from "../../components/greetings/GreetingsModal"
import GuessTheStateModal from "../../components/game/GuessTheStateModal"
import "./ExplorePage.css"

export type ExploreStage = "globe" | "diving" | "india"

interface ExplorePageProps {
  initialStage?: "globe" | "india"
}

function ExplorePage({ initialStage = "globe" }: ExplorePageProps) {
  const navigate = useNavigate()
  const [stage, setStage] = useState<ExploreStage>(initialStage)
  const [cloudWashActive, setCloudWashActive] = useState(false)
  const [isGreetingsOpen, setIsGreetingsOpen] = useState(false)
  const [isQuizOpen, setIsQuizOpen] = useState(false)

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

    // After 450ms into camera zoom, the atmospheric mist/cloud wash rushes in
    setTimeout(() => {
      setCloudWashActive(true)
    }, 450)
  }

  // Camera dive reaches India on the globe
  const handleDiveComplete = () => {
    // Switch to 3D India Map while covered by atmospheric wash
    setStage("india")
    window.history.pushState(null, "", "/india")

    // Atmospheric mist smoothly clears and reveals India Map
    setTimeout(() => {
      setCloudWashActive(false)
    }, 280)
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
      // Atmospheric mist / cloud wash rushes in as camera swoops in
      setTimeout(() => {
        setCloudWashActive(true)
      }, 360)

      // Navigate to dedicated 3D State page
      setTimeout(() => {
        navigate(`/state/${slug}`)
      }, 850)
    }
  }

  return (
    <main className={`explore-page stage-${stage}`}>
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
          <button
            type="button"
            className="home-back-button"
            onClick={handleBackToGlobe}
          >
            <span className="home-button-icon">
              <Globe size={17} />
            </span>
            <span className="home-button-text">Earth</span>
          </button>

          <div className="explore-top-right-dock">
            <button
              type="button"
              className="quiz-launcher-btn"
              onClick={() => setIsQuizOpen(true)}
              title="Play Guess the State 3D Quiz Challenge"
            >
              <span className="quiz-launcher-icon">
                <Gamepad2 size={16} />
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
                <MessageCircle size={16} />
              </span>
              <span className="greetings-launcher-text">36 Greetings</span>
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
        <div className="india-container">
          <IndiaSearchBar
            onSelectState={handleStateDive}
            onOpenGreetings={() => setIsGreetingsOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
          <IndiaMap animateEntrance={true} onStateDive={handleStateDive} />

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
        </div>
      )}
    </main>
  )
}

export default ExplorePage