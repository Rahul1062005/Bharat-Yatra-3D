import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Globe } from "lucide-react"

import Earth from "../../components/globe/Earth"
import IndiaMap, { preloadIndiaMapData } from "../../components/map/IndiaMap"
import "./ExplorePage.css"

export type ExploreStage = "globe" | "diving" | "india"

interface ExplorePageProps {
  initialStage?: "globe" | "india"
}

function ExplorePage({ initialStage = "globe" }: ExplorePageProps) {
  const navigate = useNavigate()
  const [stage, setStage] = useState<ExploreStage>(initialStage)
  const [cloudWashActive, setCloudWashActive] = useState(false)

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
      )}

      {/* ================= DYNAMIC HEADERS ================= */}
      {stage !== "india" ? (
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
      ) : (
        <header className="explore-header india-active-header">
          <p className="explore-tag india-tag">BHARAT YATRA</p>
          <h1 className="india-header-title">India, Unfolded.</h1>
          <p className="explore-subtitle india-header-sub">
            Explore the states of India
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
          <IndiaMap animateEntrance={true} />
        </div>
      )}
    </main>
  )
}

export default ExplorePage