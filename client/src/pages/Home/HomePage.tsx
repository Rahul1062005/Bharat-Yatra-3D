import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Map,
  Sparkles,
} from "lucide-react"

import "../../App.css"
import "./HomePage.css"

function HomePage() {
  const navigate = useNavigate()
  const [isLeaving, setIsLeaving] = useState(false)

  const goToExplore = () => {
    if (isLeaving) return

    setIsLeaving(true)

    setTimeout(() => {
      navigate("/explore")
    }, 700)
  }

  return (
    <main className={`home-page ${isLeaving ? "page-leaving" : ""}`}>
      {/* Smooth page transition */}
      <div className="page-transition" />

      {/* Background decoration */}
      <div className="paper-texture" />
      <div className="sun-wash" />

      <div className="decorative-circle decorative-circle-one" />
      <div className="decorative-circle decorative-circle-two" />

      {/* ================= NAVBAR ================= */}

      <nav className="home-nav">
        <div className="brand">
          <div className="brand-mark">B</div>

          <div>
            <span className="brand-name">
              Bharat Yatra
            </span>

            <span className="brand-subtitle">
              A cultural journey
            </span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#journey">
            Journey
          </a>

          <a href="#discover">
            Discover
          </a>

          <a href="#about">
            About
          </a>
        </div>

        <button
          className="nav-explore"
          onClick={goToExplore}
        >
          <span>Start Exploring</span>
          <ArrowUpRight size={16} />
        </button>
      </nav>

      {/* ================= HERO ================= */}

      <section
        className="home-hero"
        id="journey"
      >
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="kicker-line" />

            <span>
              A DIGITAL JOURNEY THROUGH INDIA
            </span>
          </div>

          <h1 className="hero-title">
            <span className="title-dark">
              One India.
            </span>

            <span className="title-terracotta">
              A thousand
            </span>

            <span className="title-outline">
              stories.
            </span>
          </h1>

          <p className="hero-description">
            Explore India's states, landscapes and
            living culture through an interactive
            journey built to make discovery
            unforgettable.
          </p>

          <div className="hero-actions">
            <button
              className="primary-journey-button"
              onClick={goToExplore}
              disabled={isLeaving}
            >
              <span>
                Begin Your Journey
              </span>

              <span className="button-arrow">
                <ArrowRight size={19} />
              </span>
            </button>

            <a
              href="#discover"
              className="discover-link"
            >
              <span>
                Discover what's inside
              </span>

              <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>28</strong>
              <span>States</span>
            </div>

            <div className="stat-divider" />

            <div className="stat">
              <strong>∞</strong>
              <span>Stories</span>
            </div>

            <div className="stat-divider" />

            <div className="stat">
              <strong>01</strong>
              <span>Journey</span>
            </div>
          </div>
        </div>

        {/* ================= HERO VISUAL ================= */}

        <div className="hero-visual">
          <div className="visual-label">
            <span>EXPLORE</span>

            <strong>India</strong>

            <ArrowUpRight size={15} />
          </div>

          <div className="india-art">
            <div className="art-glow" />

            <div className="art-ring art-ring-one" />
            <div className="art-ring art-ring-two" />
            <div className="art-ring art-ring-three" />

            <div className="india-emblem">
              <span className="emblem-small">
                BHARAT
              </span>

              <span className="emblem-title">
                INDIA
              </span>

              <span className="emblem-script">
                अनन्त कथाएँ
              </span>
            </div>

            <div className="floating-card states-card">
              <div className="floating-icon">
                <Map size={18} />
              </div>

              <div>
                <span>EXPLORE</span>

                <strong>
                  States
                </strong>
              </div>

              <ArrowRight size={16} />
            </div>

            <div className="floating-card culture-card">
              <div className="floating-icon">
                <Sparkles size={17} />
              </div>

              <div>
                <span>DISCOVER</span>

                <strong>
                  Culture
                </strong>
              </div>
            </div>

            <div className="floating-card journey-card">
              <div className="floating-icon">
                <Compass size={17} />
              </div>

              <div>
                <span>FOLLOW</span>

                <strong>
                  Your Yatra
                </strong>
              </div>
            </div>
          </div>

          <div className="visual-note">
            <span>
              FROM THE HIMALAYAS
            </span>

            <span className="note-dash">
              —
            </span>

            <span>
              TO THE COAST
            </span>
          </div>
        </div>
      </section>

      {/* ================= DISCOVER ================= */}

      <section
        className="discover-section"
        id="discover"
      >
        <div className="discover-intro">
          <div>
            <span className="discover-overline">
              01 — DISCOVER
            </span>

            <h2>
              See India
              <br />
              differently.
            </h2>
          </div>

          <p>
            Every region carries its own landscapes,
            traditions and stories. Explore the
            many layers that make India what it is.
          </p>
        </div>

        <div className="discover-gallery">

          {/* LANDSCAPES */}

          <article className="discover-card landscape-card">
            <div
              className="discover-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=90')",
              }}
            />

            <div className="discover-image-overlay" />

            <div className="discover-card-top">
              <span>01</span>

              <ArrowUpRight size={18} />
            </div>

            <div className="discover-card-content">
              <span className="discover-card-label">
                LANDSCAPES
              </span>

              <h3>
                From mountains
                <br />
                to the coast.
              </h3>

              <p>
                Himalayas, deserts, forests,
                rivers and endless coastlines.
              </p>
            </div>
          </article>


          {/* CULTURE */}

          <article className="discover-card culture-discover-card">
            <div
              className="discover-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=90')",
              }}
            />

            <div className="discover-image-overlay" />

            <div className="discover-card-top">
              <span>02</span>

              <ArrowUpRight size={18} />
            </div>

            <div className="discover-card-content">
              <span className="discover-card-label">
                CULTURE
              </span>

              <h3>
                A living
                <br />
                tradition.
              </h3>

              <p>
                Food, clothing, festivals,
                music and dance across India.
              </p>
            </div>
          </article>


          {/* HERITAGE */}

          <article className="discover-card heritage-discover-card">
            <div
              className="discover-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=90')",
              }}
            />

            <div className="discover-image-overlay" />

            <div className="discover-card-top">
              <span>03</span>

              <ArrowUpRight size={18} />
            </div>

            <div className="discover-card-content">
              <span className="discover-card-label">
                HERITAGE
              </span>

              <h3>
                Stories carved
                <br />
                in time.
              </h3>

              <p>
                Monuments, history and places
                passed through generations.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        className="about-section"
        id="about"
      >
        <div className="about-symbol">
          ✦
        </div>

        <div className="about-content">
          <span>
            BHARAT YATRA 3D
          </span>

          <h2>
            Not just a map.
            <br />
            A way to experience India.
          </h2>
        </div>

        <button
          className="about-button"
          onClick={goToExplore}
          disabled={isLeaving}
        >
          <span>
            Enter the journey
          </span>

          <ArrowRight size={17} />
        </button>
      </section>
    </main>
  )
}

export default HomePage