import { useNavigate } from "react-router-dom"
import "../../App.css"

function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">A DIGITAL JOURNEY THROUGH INDIA</p>

        <h1>Bharat Yatra 3D</h1>

        <p className="subtitle">
          Explore India. Discover its culture.
        </p>

        <button
          className="start-button"
          onClick={() => navigate("/explore")}
        >
          Begin Your Journey
        </button>
      </section>
    </main>
  )
}

export default HomePage