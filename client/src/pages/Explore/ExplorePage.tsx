import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import Earth from "../../components/globe/Earth"
import "./ExplorePage.css"

function ExplorePage() {
  const navigate = useNavigate()

  return (
    <main className="explore-page">

      {/* ================= HOME BUTTON ================= */}

      <button
        type="button"
        className="home-back-button"
        onClick={() => navigate("/")}
      >
        <span className="home-button-icon">
          <ArrowLeft size={17} />
        </span>

        <span className="home-button-text">
          Home
        </span>
      </button>


      {/* ================= PAGE HEADER ================= */}

      <header className="explore-header">

        <p className="explore-tag">
          BHARAT YATRA
        </p>

        <h1>
          India, Unfolded.
        </h1>

        <p className="explore-subtitle">
          Click India to begin.
        </p>

      </header>


      {/* ================= EARTH ================= */}

      <div className="earth-container">
        <Earth />
      </div>

    </main>
  )
}

export default ExplorePage