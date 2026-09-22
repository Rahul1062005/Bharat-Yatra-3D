import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  ArrowLeft,
  ArrowDown,
  Compass,
  MapPin,
  Sparkles,
  Utensils,
  Palette,
  BookOpen,
  Volume2,
  Award,
  Crown,
  Share2,
  Check,
} from "lucide-react"

import StateDistrictMap from "../../components/map/StateDistrictMap"
import { getStateById } from "../../data/states"
import type { LandmarkPin } from "../../types/state"
import "./StatePage.css"

const HERITAGE_HIGHLIGHTS: Record<
  string,
  { icon: typeof Crown; title: string; desc: string }[]
> = {
  bihar: [
    {
      icon: Crown,
      title: "The Magadha Empire",
      desc: "Birthplace of the Mauryan and Gupta empires that unified the subcontinent and gave Bharat its national emblem — the Lion Capital of Ashoka.",
    },
    {
      icon: Award,
      title: "First Republic of the World",
      desc: "Vaishali established the Licchavi republic with elected representatives over 2,500 years ago, pioneering democratic self-governance.",
    },
    {
      icon: BookOpen,
      title: "Global Seat of Knowledge",
      desc: "Nalanda and Vikramshila drew thousands of scholars across Asia to study astronomy, logic, medicine, mathematics, and philosophy.",
    },
  ],
  maharashtra: [
    {
      icon: Crown,
      title: "Hindavi Swarajya & Maratha Valor",
      desc: "Chhatrapati Shivaji Maharaj pioneered indigenous self-rule, naval supremacy, and mountain warfare across 350+ Sahyadri hill forts.",
    },
    {
      icon: Award,
      title: "The Varkari Saint Movement",
      desc: "Saints Dnyaneshwar, Tukaram, and Namdev democratized spiritual knowledge through devotional Abhangs and the annual Pandharpur Wari.",
    },
    {
      icon: BookOpen,
      title: "Social Awakening & Enterprise",
      desc: "Mahatma Phule, Savitribai Phule, and Dr. B.R. Ambedkar forged India's civil rights, universal education, and modern industrial engine.",
    },
  ],
  "uttar-pradesh": [
    {
      icon: Crown,
      title: "Cradle of Epics & Avatars",
      desc: "The sacred soil of Ayodhya, Mathura, and Kashi where the Ramayana, Mahabharata, and Gita unfolded across the banks of Ganga and Yamuna.",
    },
    {
      icon: Award,
      title: "Ganga-Jamuni Tehzeeb",
      desc: "The timeless confluence of classical arts, Awadhi literature, Kathak, and architectural wonders celebrated from Lucknow to Varanasi.",
    },
    {
      icon: BookOpen,
      title: "Epicenter of Wisdom & Freedom",
      desc: "From Buddha's first sermon at Sarnath to the 1857 war of independence in Meerut and Jhansi, UP has shaped the conscience of India.",
    },
  ],
  up: [
    {
      icon: Crown,
      title: "Cradle of Epics & Avatars",
      desc: "The sacred soil of Ayodhya, Mathura, and Kashi where the Ramayana, Mahabharata, and Gita unfolded across the banks of Ganga and Yamuna.",
    },
    {
      icon: Award,
      title: "Ganga-Jamuni Tehzeeb",
      desc: "The timeless confluence of classical arts, Awadhi literature, Kathak, and architectural wonders celebrated from Lucknow to Varanasi.",
    },
    {
      icon: BookOpen,
      title: "Epicenter of Wisdom & Freedom",
      desc: "From Buddha's first sermon at Sarnath to the 1857 war of independence in Meerut and Jhansi, UP has shaped the conscience of India.",
    },
  ],
  rajasthan: [
    {
      icon: Crown,
      title: "Chivalry of Rajputana",
      desc: "An immortal tradition of honor, sacrifice, and unconquerable sovereignty led by legendary icons like Maharana Pratap and Prithviraj Chauhan.",
    },
    {
      icon: Award,
      title: "Architectural Fortresses & Palaces",
      desc: "Hill Forts of Rajasthan UNESCO sites, the Great Wall of Kumbhalgarh, and honeycombed stone jharokhas of Hawa Mahal and Mehrangarh.",
    },
    {
      icon: BookOpen,
      title: "Living Desert Folk Culture",
      desc: "Hypnotic Ghoomar and Kalbelia rhythms, world-renowned tie-dye textiles, and timeless ballads sung beneath starry Thar dunes.",
    },
  ],
  kerala: [
    {
      icon: Crown,
      title: "Ancient Spice Maritime Gateway",
      desc: "The historic Malabar Coast connected ancient Rome, Greece, Arabia, and China through the trade of black pepper, cardamom, and cinnamon.",
    },
    {
      icon: Award,
      title: "Global Cradle of Ayurveda & Wellness",
      desc: "The world's foremost sanctuary of unbroken 5,000-year-old classical Ayurvedic medicine, panchakarma therapies, and herbal healing.",
    },
    {
      icon: BookOpen,
      title: "Mastery of Performing Arts & Intellect",
      desc: "From Kathakali and Theyyam to Kalaripayattu and the highest literacy rate in India, Kerala champions cultural and intellectual excellence.",
    },
  ],
  gujarat: [
    {
      icon: Crown,
      title: "Cradle of Indian Freedom & Unity",
      desc: "Birthplace of Mahatma Gandhi who led the nation to freedom through Ahimsa, and Sardar Patel who forged modern India into a united republic.",
    },
    {
      icon: Award,
      title: "Indus Valley Maritime Heritage",
      desc: "Home to the world's oldest tidal dockyard at Lothal and the monumental Harappan metropolis of Dholavira in the Rann of Kutch.",
    },
    {
      icon: BookOpen,
      title: "Global Enterprise & Handicrafts",
      desc: "A powerhouse of trade, double-ikat Patan Patola weaving, Kutch mirror needlework, and the world-renowned 9-night Garba festival.",
    },
  ],
  "west-bengal": [
    {
      icon: Crown,
      title: "The Bengal Renaissance",
      desc: "The intellectual awakening that modernized Indian philosophy, literature, science, and education led by Raja Ram Mohan Roy, Vidyasagar, and Tagore.",
    },
    {
      icon: Award,
      title: "Spiritual Conscience of Modern India",
      desc: "Sri Ramakrishna Paramahamsa and Swami Vivekananda rekindled universal tolerance and introduced Vedanta to the global stage.",
    },
    {
      icon: BookOpen,
      title: "Nobel Heritage & Cultural Carnivals",
      desc: "From the world's grandest festival in UNESCO Durga Puja to the world's largest mangrove tiger wilderness in the Sundarbans.",
    },
  ],
  westbengal: [
    {
      icon: Crown,
      title: "The Bengal Renaissance",
      desc: "The intellectual awakening that modernized Indian philosophy, literature, science, and education led by Raja Ram Mohan Roy, Vidyasagar, and Tagore.",
    },
    {
      icon: Award,
      title: "Spiritual Conscience of Modern India",
      desc: "Sri Ramakrishna Paramahamsa and Swami Vivekananda rekindled universal tolerance and introduced Vedanta to the global stage.",
    },
    {
      icon: BookOpen,
      title: "Nobel Heritage & Cultural Carnivals",
      desc: "From the world's grandest festival in UNESCO Durga Puja to the world's largest mangrove tiger wilderness in the Sundarbans.",
    },
  ],
  "tamil-nadu": [
    {
      icon: Crown,
      title: "The Great Living Chola Empire",
      desc: "Emperors Raja Raja Chola and Rajendra Chola built grand granite vimana temples and commanded the greatest naval fleet across the Indian Ocean.",
    },
    {
      icon: Award,
      title: "Oldest Classical Antiquity & Language",
      desc: "An unbroken literary civilization celebrated in Sangam poetry and the moral universal ethics of Thiruvalluvar's timeless Thirukkural.",
    },
    {
      icon: BookOpen,
      title: "Dravidian Arts & Temple Cities",
      desc: "Vibrant Bharatanatyam dance, soaring multi-tiered gopurams of Madurai and Srirangam, Tanjore paintings, and Carnatic music traditions.",
    },
  ],
  tamilnadu: [
    {
      icon: Crown,
      title: "The Great Living Chola Empire",
      desc: "Emperors Raja Raja Chola and Rajendra Chola built grand granite vimana temples and commanded the greatest naval fleet across the Indian Ocean.",
    },
    {
      icon: Award,
      title: "Oldest Classical Antiquity & Language",
      desc: "An unbroken literary civilization celebrated in Sangam poetry and the moral universal ethics of Thiruvalluvar's timeless Thirukkural.",
    },
    {
      icon: BookOpen,
      title: "Dravidian Arts & Temple Cities",
      desc: "Vibrant Bharatanatyam dance, soaring multi-tiered gopurams of Madurai and Srirangam, Tanjore paintings, and Carnatic music traditions.",
    },
  ],
  karnataka: [
    {
      icon: Crown,
      title: "Golden Age of Vijayanagara & Hoysalas",
      desc: "Magnificent world trade capital at Hampi and soapstone sculptural marvels of Belur, Halebidu, Badami, and Pattadakal.",
    },
    {
      icon: Award,
      title: "First Open Parliament (Anubhava Mantapa)",
      desc: "12th-century philosopher Basaveshwara pioneered the world's first open spiritual parliament, rejecting caste divisions and championing human dignity.",
    },
    {
      icon: BookOpen,
      title: "From Mysore Silk to Modern Silicon",
      desc: "A rich spectrum bridging royal Wadiyar pageantry, fragrant sandalwood and coffee hills, and the high-tech innovation engine of Bengaluru.",
    },
  ],
  punjab: [
    {
      icon: Crown,
      title: "Sacred Spiritual Heritage & Langar",
      desc: "Founded on the teachings of Guru Nanak Dev Ji and crowned by Sri Harmandir Sahib, serving unconditional love and equality to all humanity.",
    },
    {
      icon: Award,
      title: "The Shield of the Nation & Freedom",
      desc: "The sovereign Sikh Empire of Maharaja Ranjit Singh and the supreme patriotic sacrifices of Shaheed Bhagat Singh, Udham Singh, and Kartar Singh Sarabha.",
    },
    {
      icon: BookOpen,
      title: "Granary of India & Unmatched Vitality",
      desc: "Fertile soils of five rivers feeding the nation through the Green Revolution, celebrated through thunderous Bhangra beats and rich Phulkari art.",
    },
  ],
}

export default function StatePage() {
  const navigate = useNavigate()
  const { stateId } = useParams<{ stateId: string }>()
  const { data: stateData, config: stateConfig } = getStateById(stateId)

  const [activeSection, setActiveSection] = useState("map-section")
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkPin | null>(null)
  const [copiedGreeting, setCopiedGreeting] = useState<string | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<string>(stateConfig.defaultDistrict)

  // Synchronize when route / stateId changes
  useEffect(() => {
    setSelectedDistrict(stateConfig.defaultDistrict)
    setSelectedLandmark(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [stateId, stateConfig.defaultDistrict])

  const activeDistrictInfo = stateData.districts[selectedDistrict]
  const stateHighlights =
    HERITAGE_HIGHLIGHTS[stateData.id] || HERITAGE_HIGHLIGHTS.bihar

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "map-section",
        "heritage-section",
        "cuisine-section",
        "art-section",
        "monuments-section",
        "languages-section",
        "luminaries-section",
      ]
      const scrollPos = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCopyGreeting = (greeting: string) => {
    navigator.clipboard.writeText(greeting)
    setCopiedGreeting(greeting)
    setTimeout(() => setCopiedGreeting(null), 2000)
  }

  return (
    <div className="state-page">
      {/* ================= STICKY TOP NAVBAR ================= */}
      <header className="state-navbar">
        <div className="state-nav-left">
          <button
            type="button"
            className="state-back-btn"
            onClick={() => navigate("/india")}
          >
            <ArrowLeft size={16} />
            <span>India Map</span>
          </button>

          <div className="state-nav-title-group">
            <span className="state-nav-kicker">BHARAT YATRA</span>
            <div className="state-nav-title-flex">
              <h1 className="state-nav-title">{stateData.name}</h1>
              <span className="state-nav-devanagari">{stateData.hindiName}</span>
            </div>
          </div>
        </div>

        {/* Quick section links */}
        <nav className="state-section-nav">
          <button
            type="button"
            className={`nav-tab ${activeSection === "map-section" ? "active" : ""}`}
            onClick={() => scrollToSection("map-section")}
          >
            3D Map
          </button>
          <button
            type="button"
            className={`nav-tab ${activeSection === "heritage-section" ? "active" : ""}`}
            onClick={() => scrollToSection("heritage-section")}
          >
            Heritage
          </button>
          <button
            type="button"
            className={`nav-tab ${activeSection === "cuisine-section" ? "active" : ""}`}
            onClick={() => scrollToSection("cuisine-section")}
          >
            Cuisine
          </button>
          <button
            type="button"
            className={`nav-tab ${activeSection === "art-section" ? "active" : ""}`}
            onClick={() => scrollToSection("art-section")}
          >
            Art & Attire
          </button>
          <button
            type="button"
            className={`nav-tab ${activeSection === "monuments-section" ? "active" : ""}`}
            onClick={() => scrollToSection("monuments-section")}
          >
            Places
          </button>
          {stateData.languages && stateData.languages.length > 0 && (
            <button
              type="button"
              className={`nav-tab ${activeSection === "languages-section" ? "active" : ""}`}
              onClick={() => scrollToSection("languages-section")}
            >
              Languages
            </button>
          )}
        </nav>
      </header>

      {/* ================= HERO: BIG 3D STATE MAP ================= */}
      <section className="state-hero-map" id="map-section">
        {/* Floating Left HUD Dock (Never overlaps the 3D map) */}
        <aside className="state-hero-left-dock">
          <div className="hero-kicker-tag">
            <Sparkles size={12} className="kicker-sparkle" />
            <span>BHARAT YATRA</span>
            <span className="kicker-dot">•</span>
            <span>{stateData.name.toUpperCase()}</span>
          </div>
          <h2 className="hero-intro-heading">{stateData.name}</h2>
          <p className="hero-intro-tagline">{stateData.tagline}</p>

          <div className="hero-district-hud">
            <div className="hud-label">
              <Sparkles size={11} className="hud-sparkle" />
              <span>EXPLORING DISTRICT</span>
            </div>
            <h3 className="hud-district-name">{selectedDistrict}</h3>
            {activeDistrictInfo ? (
              <>
                <p className="hud-district-tagline">{activeDistrictInfo.tagline}</p>
                <div className="hud-district-details">
                  <span className="hud-highlight-chip">
                    <MapPin size={11} /> {activeDistrictInfo.famousSpot}
                  </span>
                </div>
              </>
            ) : (
              <p className="hud-district-tagline">
                Explore all {Object.keys(stateData.districts).length} districts across the state
              </p>
            )}
          </div>

          <div className="hero-instruction-pill">
            <span>Drag map to rotate • Click any district</span>
          </div>
        </aside>

        {/* The 3D Three.js Map Container */}
        <div className="state-canvas-container">
          <StateDistrictMap
            key={stateData.id}
            geojsonUrl={stateConfig.geojsonUrl}
            centerLon={stateConfig.centerLon}
            centerLat={stateConfig.centerLat}
            scale={stateConfig.scale}
            cameraPosition={stateConfig.cameraPosition}
            target={stateConfig.target}
            fov={stateConfig.fov}
            landmarks={stateData.landmarks || []}
            districtsData={stateData.districts}
            selectedDistrict={selectedDistrict}
            onDistrictSelect={(district) => setSelectedDistrict(district)}
            onLandmarkSelect={(pin) => setSelectedLandmark(pin)}
          />
        </div>

        {/* Selected Landmark Floating Dialog */}
        {selectedLandmark && (
          <div className="selected-landmark-toast">
            <div className="toast-header">
              <span className="toast-tag">✦ {selectedLandmark.category.toUpperCase()} PIN</span>
              <button
                type="button"
                className="toast-close"
                onClick={() => setSelectedLandmark(null)}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>
            <h4 className="toast-title">{selectedLandmark.name}</h4>
            <p className="toast-district">District: {selectedLandmark.district}</p>
            <p className="toast-desc">{selectedLandmark.description}</p>
          </div>
        )}

        {/* Animated Scroll Down Indicator */}
        <button
          type="button"
          className="scroll-down-cue"
          onClick={() => scrollToSection("heritage-section")}
          aria-label="Scroll down to explore culture"
        >
          <span className="scroll-cue-text">Explore Culture & Heritage</span>
          <ArrowDown size={17} className="bounce-arrow" />
        </button>
      </section>

      {/* ================= DEDICATED STATS STRIP BAR (NOT OVER 3D MAP) ================= */}
      <div className="state-stats-strip-bar">
        <div className="hero-stats-strip">
          {stateData.keyStats.map((stat, idx) => (
            <div key={idx} className="strip-stat-item">
              <span className="strip-stat-value">{stat.value}</span>
              <span className="strip-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 1: HERITAGE & ORIGIN ================= */}
      <section className="state-content-section" id="heritage-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-overline">01 — FOUNDATION & SOUL</span>
            <h2 className="section-heading">The Foundation & Soul of {stateData.name}</h2>
            <p className="section-subtext">
              {stateData.tagline}
            </p>
          </div>

          <div className="heritage-grid">
            <div className="heritage-main-card">
              <div className="heritage-quote-box">
                <p className="heritage-quote-text">“{stateData.quote.text}”</p>
                <span className="heritage-quote-author">— {stateData.quote.author}</span>
              </div>
              <p className="heritage-narrative">{stateData.overview}</p>

              <div className="ancient-names-box">
                <span className="ancient-label">Historical Regions:</span>
                <div className="ancient-tags">
                  {stateData.ancientNames.map((name, i) => (
                    <span key={i} className="ancient-tag-pill">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="heritage-side-cards">
              {stateHighlights.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div key={idx} className="heritage-mini-card">
                    <IconComponent size={24} className="mini-card-icon" />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: GASTRONOMY & CUISINE ================= */}
      <section className="state-content-section cuisine-bg" id="cuisine-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-header-tag">
              <Utensils size={15} />
              <span>CULINARY HERITAGE</span>
            </div>
            <h2 className="section-heading">Flavors of Heritage, Fire & Spices</h2>
            <p className="section-subtext">
              Signature regional dishes, heirloom spices, and time-honored cooking traditions perfected over centuries.
            </p>
          </div>

          <div className="cuisine-cards-grid">
            {stateData.cuisines.map((item, idx) => (
              <article key={idx} className="cuisine-card">
                <div className="cuisine-image-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="cuisine-img"
                  />
                  <span className="cuisine-tag-badge">{item.tag}</span>
                  {item.hindiName && (
                    <span className="cuisine-hindi-badge">{item.hindiName}</span>
                  )}
                </div>

                <div className="cuisine-card-body">
                  <div className="cuisine-title-row">
                    <h3 className="cuisine-name">{item.name}</h3>
                    <span className="cuisine-origin">{item.origin}</span>
                  </div>

                  <p className="cuisine-desc">{item.description}</p>

                  {item.ingredients && item.ingredients.length > 0 && (
                    <div className="cuisine-ingredients">
                      <span className="ing-title">Key Flavors:</span>
                      <div className="ing-pills">
                        {item.ingredients.map((ing, i) => (
                          <span key={i} className="ing-pill">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: LIVING ART & TRADITIONAL ATTIRE ================= */}
      <section className="state-content-section" id="art-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-header-tag">
              <Palette size={15} />
              <span>CULTURE & TEXTILES</span>
            </div>
            <h2 className="section-heading">Living Traditions & Master Textiles</h2>
            <p className="section-subtext">
              Celebrated folk paintings, rhythmic performing traditions, and master-woven regal silks.
            </p>
          </div>

          {/* Art & Traditions Showcase */}
          <div className="traditions-row">
            {stateData.traditions.map((trad, idx) => (
              <div key={idx} className="tradition-feature-card">
                <div className="tradition-img-wrap">
                  <img
                    src={trad.image}
                    alt={trad.title || trad.name || "Tradition"}
                    loading="lazy"
                    className="tradition-img"
                  />
                  <div className="tradition-overlay" />
                  <div className="tradition-category-pill">
                    {trad.category || trad.type || "HERITAGE"}
                  </div>
                </div>
                <div className="tradition-content">
                  <h3 className="tradition-title">{trad.title || trad.name}</h3>
                  {trad.period && <p className="tradition-period">{trad.period}</p>}
                  <p className="tradition-desc">{trad.description}</p>
                  <div className="tradition-highlights">
                    {(trad.highlights || (trad.significance ? [trad.significance] : [])).map((h, i) => (
                      <span key={i} className="highlight-tag">
                        ✦ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Traditional Attire Showcase */}
          <div className="attire-subsection">
            <h3 className="sub-heading">Traditional Attire & Royal Weaves</h3>
            <div className="attire-grid">
              {(stateData.attires || stateData.attire || []).map((attire, idx) => (
                <div key={idx} className="attire-card">
                  <div className="attire-image-container">
                    <img
                      src={attire.image}
                      alt={attire.name}
                      loading="lazy"
                      className="attire-img"
                    />
                    <span className="attire-type-chip">
                      {attire.type || attire.fabric || (attire.gender ? `${attire.gender.toUpperCase()}'S WEAR` : "Traditional")}
                    </span>
                  </div>
                  <div className="attire-info">
                    <h4>{attire.name}</h4>
                    {(attire.specialty || attire.occasions) && (
                      <span className="attire-specialty">{attire.specialty || attire.occasions}</span>
                    )}
                    <p>{attire.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: SACRED MONUMENTS & PLACES ================= */}
      <section className="state-content-section monuments-bg" id="monuments-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-header-tag">
              <MapPin size={15} />
              <span>SACRED & HISTORIC SITES</span>
            </div>
            <h2 className="section-heading">Monuments of Stone, Spirit & Sovereignty</h2>
            <p className="section-subtext">
              Architectural masterpieces, world heritage excavations, and sacred landmarks spanning millennia.
            </p>
          </div>

          <div className="monuments-grid">
            {stateData.monuments.map((mon, idx) => (
              <div key={idx} className="monument-card">
                <div className="monument-visual">
                  <img
                    src={mon.image}
                    alt={mon.name}
                    loading="lazy"
                    className="monument-img"
                  />
                  {mon.unesco && (
                    <span className="unesco-badge">
                      <Award size={13} /> UNESCO World Heritage
                    </span>
                  )}
                  <span className="monument-location-tag">{mon.location}</span>
                </div>
                <div className="monument-content">
                  <div className="monument-era">{mon.era || mon.period}</div>
                  <h3 className="monument-title">{mon.name}</h3>
                  <p className="monument-desc">{mon.description || mon.significance}</p>
                  {mon.significance && mon.description && (
                    <div className="monument-significance">
                      <strong>Significance:</strong> {mon.significance}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: LANGUAGES & DIALECTS ================= */}
      {stateData.languages && stateData.languages.length > 0 && (
        <section className="state-content-section" id="languages-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-header-tag">
                <Volume2 size={15} />
                <span>VOICES OF BHARAT</span>
              </div>
              <h2 className="section-heading">Living Tongues & Warm Greetings</h2>
              <p className="section-subtext">
                Hear the cadence and expressions of reverence and hospitality spoken across the heartland.
              </p>
            </div>

            <div className="languages-grid">
              {stateData.languages.map((lang, idx) => (
                <div key={idx} className="language-card">
                  <div className="language-card-top">
                    <div>
                      <h3 className="language-name">{lang.name}</h3>
                      <span className="language-speakers">{lang.speakers}</span>
                    </div>
                    <span className="script-badge">{lang.script}</span>
                  </div>

                  <div className="greeting-box">
                    <span className="greeting-label">How to Greet:</span>
                    <div className="greeting-text-wrap">
                      <p className="greeting-vernacular">{lang.greeting}</p>
                      <button
                        type="button"
                        className="copy-greeting-btn"
                        onClick={() => handleCopyGreeting(lang.greeting)}
                        title="Copy greeting"
                        aria-label="Copy greeting"
                      >
                        {copiedGreeting === lang.greeting ? (
                          <Check size={14} className="copied-icon" />
                        ) : (
                          <Share2 size={14} />
                        )}
                      </button>
                    </div>
                    <span className="greeting-meaning">“{lang.meaning}”</span>
                  </div>

                  <p className="language-desc">{lang.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= SECTION 6: HISTORIC LUMINARIES ================= */}
      {stateData.luminaries && stateData.luminaries.length > 0 && (
        <section className="state-content-section luminaries-bg" id="luminaries-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-overline">06 — TITANS OF THOUGHT</span>
              <h2 className="section-heading">Luminaries Born of this Soil</h2>
              <p className="section-subtext">
                Visionary minds whose contributions in statecraft, ethics, spirituality, literature, and freedom inspire the nation.
              </p>
            </div>

            <div className="luminaries-grid">
              {stateData.luminaries.map((person, idx) => (
                <div key={idx} className="luminary-card">
                  <div className="luminary-emblem">✦</div>
                  <div className="luminary-meta">
                    <span className="luminary-era">{person.era}</span>
                    <h3 className="luminary-name">{person.name}</h3>
                    <span className="luminary-title">{person.title}</span>
                  </div>
                  <p className="luminary-contribution">{person.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FOOTER / CONTINUE JOURNEY ================= */}
      <footer className="state-footer">
        <div className="footer-glow" />
        <div className="footer-content">
          <span className="footer-kicker">CONTINUE THE BHARAT YATRA</span>
          <h2 className="footer-title">Traverse Beyond {stateData.name}</h2>
          <p className="footer-sub">
            Return to the national 3D map to explore Maharashtra, Uttar Pradesh, Bihar, and the wonders of Bharat.
          </p>
          <button
            type="button"
            className="footer-cta-btn"
            onClick={() => navigate("/india")}
          >
            <Compass size={18} />
            <span>Return to India 3D Map</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
