import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  Compass,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Camera,
  Route,
  Volume2,
  Utensils,
  Globe,
} from "lucide-react"

import { preloadIndiaMapData } from "../../components/map/IndiaMap"
import "../../App.css"
import "./HomePage.css"

// Featured States Showcase Data with Verified Authentic Local Images
interface ShowcaseState {
  id: string
  name: string
  hindiName: string
  region: string
  capital: string
  tagline: string
  artForm: string
  image: string
  accentColor: string
}

const FEATURED_STATES: ShowcaseState[] = [
  {
    id: "bihar",
    name: "Bihar",
    hindiName: "बिहार",
    region: "Eastern Realm",
    capital: "Patna",
    tagline: "The Cradle of Ancient Empires & Global Wisdom",
    artForm: "Mithila / Madhubani Art",
    image: "/images/bihar/mahabodhi_temple.jpg",
    accentColor: "#ea580c",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    hindiName: "राजस्थान",
    region: "Western Realm",
    capital: "Jaipur",
    tagline: "Land of Forts, Royal Chivalry & Desert Gold",
    artForm: "Pichwai & Phad Art",
    image: "/images/rajasthan/hawa_mahal.jpg",
    accentColor: "#be185d",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    hindiName: "महाराष्ट्र",
    region: "Western Realm",
    capital: "Mumbai",
    tagline: "Sahyadri Forts, Maratha Valor & Ajanta Cave Frescoes",
    artForm: "Warli Tribal Art",
    image: "/images/maharashtra/gateway_of_india.jpg",
    accentColor: "#d97706",
  },
  {
    id: "kerala",
    name: "Kerala",
    hindiName: "केरल",
    region: "Southern Realm",
    capital: "Thiruvananthapuram",
    tagline: "God's Own Country, Kathakali & Serene Spice Lagoons",
    artForm: "Temple Chithram Murals",
    image: "/images/kerala/kathakali.jpg",
    accentColor: "#047857",
  },
  {
    id: "punjab",
    name: "Punjab",
    hindiName: "पंजाब",
    region: "Northern Realm",
    capital: "Chandigarh",
    tagline: "Golden Harmandir Sahib, Langar & Mustard Horizons",
    artForm: "Phulkari Embroidery",
    image: "/images/punjab/golden_temple.jpg",
    accentColor: "#ca8a04",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    hindiName: "गुजरात",
    region: "Western Realm",
    capital: "Gandhinagar",
    tagline: "Stepwells of Rani Ki Vav & Sacred Somnath Shores",
    artForm: "Pithora & Rogan Art",
    image: "/images/gujarat/somnath_temple.jpg",
    accentColor: "#0d9488",
  },
  {
    id: "delhi",
    name: "Delhi (NCT)",
    hindiName: "दिल्ली",
    region: "Northern Realm",
    capital: "New Delhi",
    tagline: "Seven Historical Imperial Cities & Seat of the Republic",
    artForm: "Mughal & Classical Jaali",
    image: "/images/landmarks/delhi/delhi-red-fort_angle1.jpg",
    accentColor: "#b45309",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    hindiName: "पश्चिम बंगाल",
    region: "Eastern Realm",
    capital: "Kolkata",
    tagline: "Ganga Delta, Victoria Grandeur & Kalighat Traditions",
    artForm: "Kalighat & Patachitra",
    image: "/images/westbengal/victoria_memorial.jpg",
    accentColor: "#be123c",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    hindiName: "तमिलनाडु",
    region: "Southern Realm",
    capital: "Chennai",
    tagline: "Great Living Chola Temples & Classical Bharatanatyam",
    artForm: "Tanjore Gold Paintings",
    image: "/images/tamilnadu/brihadeeswarar_temple.jpg",
    accentColor: "#b91c1c",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    hindiName: "कर्नाटक",
    region: "Southern Realm",
    capital: "Bengaluru",
    tagline: "Hampi Ruins, Hoysala Carvings & Royal Mysore Regalia",
    artForm: "Mysore Ganjifa & Painting",
    image: "/images/karnataka/mysore_palace.jpg",
    accentColor: "#7c2d12",
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    hindiName: "मध्य प्रदेश",
    region: "Central Realm",
    capital: "Bhopal",
    tagline: "The Heart of India, Khajuraho Sculptures & Sanchi Stupas",
    artForm: "Gond Tribal Paintings",
    image: "/images/madhyapradesh/khajuraho_temple.jpg",
    accentColor: "#047857",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    hindiName: "उत्तराखंड",
    region: "Northern Realm",
    capital: "Dehradun",
    tagline: "Sacred Devbhoomi, Himalayan Glaciers & Ganga Aartis",
    artForm: "Aipan Ritual Floor Art",
    image: "/images/uttarakhand/kedarnath_temple.jpg",
    accentColor: "#0284c7",
  },
]

// 5 Cultural Dimensions of Bharat Yatra
const DIMENSIONS = [
  {
    number: "01",
    title: "Tactile 3D Extruded Maps",
    subtitle: "Elevation & District Boundaries",
    desc: "Every state and union territory features genuine 3D extruded topography with smooth hover lift effects and authentic district borders.",
    icon: Compass,
    image: "/images/rajasthan/amber_fort.jpg",
    tag: "3D Spatial Tech",
  },
  {
    number: "02",
    title: "Multi-Perspective Monument Dossiers",
    subtitle: "Front, Aerial, Carvings & Dusk",
    desc: "Inspect iconic national landmarks through four curated perspective photographs paired with historical architectural dossiers.",
    icon: Camera,
    image: "/images/landmarks/delhi/delhi-india-gate_angle1.jpg",
    tag: "Photographic Dossiers",
  },
  {
    number: "03",
    title: "Living Folk Art & Murals",
    subtitle: "Madhubani, Warli & Pichwai",
    desc: "Discover centuries-old tribal and classical art traditions celebrating sacred nature, deities, and community rituals.",
    icon: Sparkles,
    image: "/images/bihar/madhubani_art.jpg",
    tag: "Indigenous Arts",
  },
  {
    number: "04",
    title: "Culinary & Sacred Prasadam",
    subtitle: "Authentic Regional Flavors",
    desc: "Explore iconic delicacies, historical origins, and traditional ingredients from Litti Chokha to Malabar Sadya and Ghevar.",
    icon: Utensils,
    image: "/images/gujarat/gujarati_thali.jpg",
    tag: "Gastronomic Heritage",
  },
  {
    number: "05",
    title: "36 Vocal Greetings & Ambience",
    subtitle: "How India Says Namaskar",
    desc: "Listen to native greetings in original scripts, accompanied by soothing Tanpura and Bansuri classical soundscapes.",
    icon: Volume2,
    image: "/images/kerala/theyyam.jpg",
    tag: "Acoustic Ambience",
  },
]

// Curated Travel Circuits
const CURATED_CIRCUITS = [
  {
    id: "golden-triangle",
    name: "The Golden Triangle",
    states: "Delhi • Uttar Pradesh • Rajasthan",
    highlight: "Mughal palaces, Taj Mahal, and Rajput hill forts across northern plains.",
    badge: "Most Iconic",
    image: "/images/landmarks/delhi/delhi-red-fort_angle1.jpg",
  },
  {
    id: "western-ghats",
    name: "Western Ghats & Arabian Coast",
    states: "Maharashtra • Goa • Karnataka • Kerala",
    highlight: "Lush tropical rainforests, spice hill plantations, and sea fortresses.",
    badge: "Eco-Spiritual",
    image: "/images/kerala/bekal_fort.jpg",
  },
  {
    id: "sacred-ganga",
    name: "Sacred Ganga Odyssey",
    states: "Uttarakhand • Uttar Pradesh • Bihar • West Bengal",
    highlight: "From glacial Himalayan sources down to timeless ghats and ancient Nalanda.",
    badge: "Civilizational",
    image: "/images/up/varanasi_ganga_aarti.jpg",
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [activeStateIndex, setActiveStateIndex] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [isLeaving, setIsLeaving] = useState(false)

  // Preload India GeoJSON data on mount
  useEffect(() => {
    preloadIndiaMapData()
  }, [])

  // Auto-cycle through featured states in hero visual every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStateIndex((prev) => (prev + 1) % FEATURED_STATES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  // Navigates to 3D Earth Globe (/explore) where user sees glowing India and dives into the India Map
  const goToExplore = () => {
    if (isLeaving) return
    setIsLeaving(true)
    setTimeout(() => {
      navigate("/explore")
    }, 320)
  }

  const goToState = (stateId: string) => {
    if (isLeaving) return
    setIsLeaving(true)
    setTimeout(() => {
      navigate(`/state/${stateId}`)
    }, 320)
  }

  const activeHeroState = FEATURED_STATES[activeStateIndex]

  const filteredStates =
    selectedFilter === "all"
      ? FEATURED_STATES
      : FEATURED_STATES.filter((s) => s.region.toLowerCase().includes(selectedFilter.toLowerCase()))

  return (
    <main className={`home-page-fresh ${isLeaving ? "page-leaving" : ""}`}>
      {/* Decorative Global Background Radiance & Traditional Jaali Lattice */}
      <div className="home-fresco-backdrop" aria-hidden="true">
        <div className="home-aura-radiance" />
        <div className="home-jaali-lattice" />
      </div>

      {/* ================= ROYAL TOP NAVBAR ================= */}
      <header className="home-fresh-nav">
        <div className="brand-fresh" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="brand-mark-fresh">
            <span>भ</span>
          </div>
          <div className="brand-text-group">
            <span className="brand-name-fresh">BHARAT YATRA</span>
            <span className="brand-subtitle-fresh">A Living 3D Cultural Odyssey</span>
          </div>
        </div>

        <nav className="nav-links-fresh">
          <a href="#hero-realm" className="nav-link-fresh">Overview</a>
          <a href="#dimensions" className="nav-link-fresh">5 Dimensions</a>
          <a href="#state-realms" className="nav-link-fresh">Cultural Realms</a>
          <a href="#circuits" className="nav-link-fresh">Curated Circuits</a>
        </nav>

        {/* 3D Explorer Button opens 3D Earth Globe where user can click and dive into India */}
        <button
          type="button"
          className="nav-explore-btn-fresh"
          onClick={goToExplore}
          title="Enter 3D Earth Globe and dive into India Map"
        >
          <Globe size={16} />
          <span>Enter 3D Earth</span>
          <ArrowUpRight size={17} />
        </button>
      </header>

      {/* ================= HERO SECTION (FIRST SLIDE) ================= */}
      <section className="home-hero-fresh" id="hero-realm">
        <div className="hero-left-content">
          <div className="hero-kicker-pill">
            <Sparkles size={14} className="kicker-sparkle" />
            <span>INCREDIBLE INDIA • 36 CULTURAL REALMS</span>
          </div>

          <h1 className="hero-heading-fresh">
            <span className="hero-title-main">One Subcontinent.</span>
            <span className="hero-title-gradient">36 Living Realms.</span>
            <span className="hero-title-script">एक भारत • श्रेष्ठ भारत</span>
          </h1>

          <p className="hero-description-fresh">
            Experience India from cosmic orbit down to sacred earth. Rotate the interactive 3D Earth
            globe, dive through atmospheric clouds into India, and explore 36 states with tactile 3D district maps,
            multi-angle monument dossiers, and ancient folk murals.
          </p>

          <div className="hero-cta-group">
            {/* Direct Launch to 3D Earth Globe */}
            <button
              type="button"
              className="primary-hero-btn"
              onClick={goToExplore}
              disabled={isLeaving}
              title="Launch 3D Earth globe view, then click India to dive inside"
            >
              <Globe size={20} />
              <div className="hero-btn-multiline">
                <span className="hero-btn-title">Explore 3D Earth Globe</span>
                <span className="hero-btn-hint">Orbit from Space → Dive into India</span>
              </div>
              <ArrowRight size={18} className="cta-arrow" />
            </button>

            <button
              type="button"
              className="secondary-hero-btn"
              onClick={() => navigate("/my-yatra")}
            >
              <Route size={17} />
              <span>Plan Custom Yatra</span>
            </button>
          </div>

          {/* Civilizational Metrics Dock */}
          <div className="hero-metrics-dock">
            <div className="metric-item">
              <span className="metric-number">36</span>
              <span className="metric-label">States & UTs</span>
            </div>
            <div className="metric-separator" />
            <div className="metric-item">
              <span className="metric-number">700+</span>
              <span className="metric-label">3D Districts</span>
            </div>
            <div className="metric-separator" />
            <div className="metric-item">
              <span className="metric-number">100+</span>
              <span className="metric-label">Angle Dossiers</span>
            </div>
            <div className="metric-separator" />
            <div className="metric-item">
              <span className="metric-number">5,000+</span>
              <span className="metric-label">Years of Antiquity</span>
            </div>
          </div>
        </div>

        {/* ================= HERO RIGHT: INTERACTIVE STATE REALM VISUAL ================= */}
        <div className="hero-right-visual">
          <div className="hero-orb-halo">
            <div className="orb-chakra-ring ring-1" />
            <div className="orb-chakra-ring ring-2" />

            {/* Central Showcase Card featuring Active State with Real Photo */}
            <div
              className="hero-featured-state-card"
              onClick={() => goToState(activeHeroState.id)}
              title={`Click to explore ${activeHeroState.name} in 3D`}
              style={{
                borderColor: `${activeHeroState.accentColor}88`,
                boxShadow: `0 24px 50px rgba(0, 0, 0, 0.4), 0 0 35px ${activeHeroState.accentColor}33`,
              }}
            >
              <div className="card-image-wrap">
                <img
                  src={activeHeroState.image}
                  alt={activeHeroState.name}
                  className="card-main-image"
                />
                <div className="card-image-overlay" />
                <span className="card-region-chip">{activeHeroState.region}</span>
                <span className="card-live-badge">
                  <span className="live-dot" /> 3D STATE READY
                </span>
              </div>

              <div className="card-content-block">
                <div className="card-header-line">
                  <span className="card-state-name">{activeHeroState.name}</span>
                  <span className="card-state-hindi">{activeHeroState.hindiName}</span>
                </div>

                <p className="card-tagline">{activeHeroState.tagline}</p>

                <div className="card-art-line">
                  <Sparkles size={13} style={{ color: activeHeroState.accentColor }} />
                  <span>{activeHeroState.artForm}</span>
                </div>

                <div className="card-footer-cta" style={{ color: activeHeroState.accentColor }}>
                  <span>Enter {activeHeroState.name} 3D Map</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>

            {/* State Switcher Dots */}
            <div className="hero-state-dots">
              {FEATURED_STATES.map((st, idx) => (
                <button
                  key={st.id}
                  type="button"
                  className={`state-dot ${idx === activeStateIndex ? "active" : ""}`}
                  onClick={() => setActiveStateIndex(idx)}
                  title={`View ${st.name}`}
                  style={{
                    backgroundColor: idx === activeStateIndex ? st.accentColor : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 DIMENSIONS OF BHARAT YATRA ================= */}
      {/* Enhanced with authentic Warli & Madhubani folk mural textures and graffiti friezes */}
      <section className="home-section-fresh dimensions-fresco-section" id="dimensions">
        {/* Living Indian Mural & Graffiti Canvas Background */}
        <div className="fresco-canvas-backdrop" aria-hidden="true">
          <div className="fresco-mural-layer mural-warli" />
          <div className="fresco-mural-layer mural-madhubani" />
          <div className="fresco-temple-cornice cornice-top" />
          <div className="fresco-calligraphy-graffiti">
            <span className="fresco-glyph glyph-left">॥ वसुधैव कुटुम्बकम् ॥</span>
            <span className="fresco-glyph glyph-right">॥ सत्यमेव जयते ॥</span>
          </div>
        </div>

        <div className="section-header-centered">
          <span className="section-pre-tag">01 • MULTI-LAYERED CULTURAL DISCOVERY</span>
          <h2 className="section-title-fresh">Five Dimensions of Experience</h2>
          <p className="section-desc-fresh">
            Bharat Yatra reimagines state discovery by integrating cartography, architecture, living
            traditions, native cuisine, and acoustics into an interconnected digital sanctuary.
          </p>
        </div>

        <div className="dimensions-grid-fresh">
          {DIMENSIONS.map((dim) => {
            const Icon = dim.icon
            return (
              <div key={dim.number} className="dimension-card-fresh">
                <div className="dim-image-container">
                  <img src={dim.image} alt={dim.title} className="dim-card-img" />
                  <div className="dim-overlay" />
                  <span className="dim-number-badge">{dim.number}</span>
                  <span className="dim-tag-badge">{dim.tag}</span>
                </div>

                <div className="dim-content-fresh">
                  <div className="dim-icon-pill">
                    <Icon size={16} />
                    <span>{dim.subtitle}</span>
                  </div>
                  <h3 className="dim-title-fresh">{dim.title}</h3>
                  <p className="dim-desc-fresh">{dim.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================= EXPLORE THE 36 CULTURAL REALMS ================= */}
      {/* Enhanced with authentic Pattachitra, Sohrai mud-wall art & Rangoli graffiti watermarks */}
      <section className="home-section-fresh realms-bg-fresh realms-fresco-section" id="state-realms">
        {/* Living Folk Art & Temple Mural Canvas Backdrop */}
        <div className="fresco-canvas-backdrop" aria-hidden="true">
          <div className="fresco-mural-layer mural-pattachitra" />
          <div className="fresco-mural-layer mural-sohrai" />
          <div className="fresco-mandala-medallion medallion-left" />
          <div className="fresco-mandala-medallion medallion-right" />
          <div className="fresco-temple-cornice cornice-middle" />
          <div className="fresco-calligraphy-graffiti">
            <span className="fresco-glyph glyph-center">॥ अतिथि देवो भव • Sacred Hospitality of Bharat ॥</span>
          </div>
        </div>

        <div className="section-header-centered">
          <span className="section-pre-tag">02 • TAPESTRY OF 36 STATES & UNION TERRITORIES</span>
          <h2 className="section-title-fresh">Explore Iconic State Realms</h2>
          <p className="section-desc-fresh">
            Each realm boasts distinct geography, UNESCO monuments, regional dialects, and living arts.
            Click any realm to step straight into its dedicated 3D interactive domain.
          </p>

          {/* Region Filter Tabs */}
          <div className="realms-filter-tabs">
            {[
              { id: "all", label: "All Realms (36)" },
              { id: "Eastern", label: "Eastern" },
              { id: "Western", label: "Western" },
              { id: "Southern", label: "Southern" },
              { id: "Northern", label: "Northern" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                className={`filter-tab-btn ${selectedFilter === f.id ? "active" : ""}`}
                onClick={() => setSelectedFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="realms-cards-grid">
          {filteredStates.map((st) => (
            <div
              key={st.id}
              className="realm-card-fresh"
              onClick={() => goToState(st.id)}
              title={`Explore ${st.name} in 3D`}
            >
              <div className="realm-card-image-wrap">
                <img src={st.image} alt={st.name} className="realm-img" />
                <div className="realm-img-overlay" />
                <span className="realm-capital-badge">
                  <MapPin size={11} /> {st.capital}
                </span>
                <span className="realm-hindi-badge">{st.hindiName}</span>
              </div>

              <div className="realm-card-body">
                <div className="realm-title-row">
                  <h3 className="realm-name">{st.name}</h3>
                  <span className="realm-region-tag">{st.region}</span>
                </div>

                <p className="realm-tagline">{st.tagline}</p>

                <div className="realm-card-footer">
                  <span className="realm-art-highlight">🎨 {st.artForm}</span>
                  <span className="realm-explore-arrow">
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CURATED CIRCUITS (MY YATRA TEASER) ================= */}
      {/* Enhanced with ancient caravan trade routes, celestial compass rose & Gond tribal art */}
      <section className="home-section-fresh circuits-fresco-section" id="circuits">
        <div className="fresco-canvas-backdrop" aria-hidden="true">
          <div className="fresco-mural-layer mural-gond" />
          <div className="fresco-trade-routes-grid" />
          <div className="fresco-compass-rose" />
          <div className="fresco-temple-cornice cornice-bottom" />
        </div>

        <div className="section-header-centered">
          <span className="section-pre-tag">03 • ITINERARY PLANNING</span>
          <h2 className="section-title-fresh">Curated Heritage Circuits</h2>
          <p className="section-desc-fresh">
            Travel across regional corridors crafted around historical empires, sacred rivers, and
            panoramic ecological belts.
          </p>
        </div>

        <div className="circuits-grid-fresh">
          {CURATED_CIRCUITS.map((cir) => (
            <div
              key={cir.id}
              className="circuit-card-fresh"
              onClick={() => navigate("/my-yatra")}
            >
              <div className="circuit-image-wrap">
                <img src={cir.image} alt={cir.name} className="circuit-img" />
                <div className="circuit-overlay" />
                <span className="circuit-badge-chip">{cir.badge}</span>
              </div>

              <div className="circuit-content-fresh">
                <span className="circuit-states-list">{cir.states}</span>
                <h3 className="circuit-name-fresh">{cir.name}</h3>
                <p className="circuit-highlight-fresh">{cir.highlight}</p>
                <div className="circuit-btn-link">
                  <span>Customise Circuit in My Yatra</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INVITATION & GRAND FOOTER ================= */}
      <section className="home-footer-cta-fresh">
        <div className="fresco-cta-halo" aria-hidden="true" />

        <div className="cta-emblem-fresh">
          <span>🇮🇳</span>
        </div>

        <div className="cta-titles-fresh">
          <span className="cta-kicker-fresh">BEGIN YOUR ADVENTURE</span>
          <h2 className="cta-title-fresh">Experience the Spirit of Bharat</h2>
          <p className="cta-desc-fresh">
            Embark on a digital pilgrimage through 36 realms, vibrant folk arts, and architectural
            marvels. Start from orbit around Earth or explore directly.
          </p>
        </div>

        <button
          type="button"
          className="cta-launch-button-fresh"
          onClick={goToExplore}
        >
          <Globe size={19} />
          <span>Launch 3D Earth Globe</span>
          <ArrowRight size={18} />
        </button>
      </section>

      {/* Bottom Copyright & Mission */}
      <footer className="home-site-footer-fresh">
        <div className="footer-left-fresh">
          <span className="footer-logo">BHARAT YATRA 3D</span>
          <span className="footer-sub">A Cultural Tribute to the Civilization of India</span>
        </div>
        <div className="footer-right-fresh">
          <span>Crafted with Three.js • React • Vanilla CSS</span>
        </div>
      </footer>
    </main>
  )
}