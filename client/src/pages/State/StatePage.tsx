import { useState, useEffect, useRef } from "react"
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
  VolumeX,
  Plus,
  Minus,
  Award,
  Crown,
  Share2,
  Check,
  Camera,
  Play,
  Printer,
  ExternalLink,
} from "lucide-react"

import StateDistrictMap from "../../components/map/StateDistrictMap"
import { getStateById } from "../../data/states"
import { getStateGreeting } from "../../data/greetings"
import { playGreetingAudio, stopGreetingAudio } from "../../utils/greetingSpeech"
import { heritageAudio, type HeritageAudioState } from "../../utils/ambientHeritageAudio"
import type { LandmarkPin, LandmarkAngleImage } from "../../types/state"
import StateQuizSection from "../../components/quiz/StateQuizSection"
import NationalMasteryModal from "../../components/tracker/NationalMasteryModal"
import LandmarkGalleryModal from "../../components/landmarks/LandmarkGalleryModal"
import StateCinematicModal from "../../components/video/StateCinematicModal"
import HeritageCompanionModal from "../../components/ai/HeritageCompanionModal"
import { getStateTheme } from "../../data/stateThemes"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
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
  const [galleryLandmark, setGalleryLandmark] = useState<LandmarkPin | null>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [copiedGreeting, setCopiedGreeting] = useState<string | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<string>(stateConfig.defaultDistrict)
  const [isSpeakingGreeting, setIsSpeakingGreeting] = useState(false)
  const [activeSpeakingLang, setActiveSpeakingLang] = useState<string | null>(null)
  const [isMasteryOpen, setIsMasteryOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isAIOpen, setIsAIOpen] = useState(false)
  const [audioState, setAudioState] = useState<HeritageAudioState>(heritageAudio.getState())
  const stateGreeting = getStateGreeting(stateData.id)
  const stateTheme = getStateTheme(stateData.id)

  const landmarkToastRef = useRef<HTMLElement>(null)

  // Lock body scrolling when pinned monument toast or any dialog is active
  useBodyScrollLock(Boolean(selectedLandmark))

  // Dismiss pinned monument card when clicking outside on the map/background
  useEffect(() => {
    if (!selectedLandmark) return

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      // 1. If any full modal dialog is open, do not dismiss
      if (isGalleryOpen || isVideoModalOpen || isMasteryOpen || isAIOpen) return

      const target = e.target as HTMLElement | null

      // 2. If click happened inside the pinned landmark toast, do nothing
      if (landmarkToastRef.current && landmarkToastRef.current.contains(target as Node)) {
        return
      }

      // 3. If click happened inside any modal dialog or backdrop, do nothing
      if (
        target?.closest?.(
          ".landmark-modal-backdrop, .landmark-modal-dialog, .state-cinematic-modal-overlay, .state-cinematic-modal-container, .mastery-modal-overlay, .journey-modal-overlay, .quiz-modal-backdrop, .greetings-modal-backdrop, .heritage-ai-modal-overlay, .heritage-ai-modal-dialog, [role='dialog']"
        )
      ) {
        return
      }

      // 4. If clicked on a landmark pin marker or map control buttons, let them handle it
      if (target?.closest?.(".landmark-pin, .leaflet-marker-icon, .map-control-btn, button")) {
        return
      }

      setSelectedLandmark(null)
    }

    const timer = setTimeout(() => {
      document.addEventListener("click", handleOutsideClick)
    }, 120)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [selectedLandmark, isGalleryOpen, isVideoModalOpen, isMasteryOpen])

  // Ambient Heritage Indian Classical Audio lifecycle
  useEffect(() => {
    const unsub = heritageAudio.subscribe((state) => {
      setAudioState(state)
    })

    // Start soothing classical soundscape
    heritageAudio.start()

    const handleFirstGesture = () => {
      heritageAudio.start()
      window.removeEventListener("click", handleFirstGesture)
      window.removeEventListener("keydown", handleFirstGesture)
      window.removeEventListener("touchstart", handleFirstGesture)
    }

    window.addEventListener("click", handleFirstGesture, { once: true })
    window.addEventListener("keydown", handleFirstGesture, { once: true })
    window.addEventListener("touchstart", handleFirstGesture, { once: true })

    return () => {
      unsub()
      heritageAudio.stop()
      window.removeEventListener("click", handleFirstGesture)
      window.removeEventListener("keydown", handleFirstGesture)
      window.removeEventListener("touchstart", handleFirstGesture)
    }
  }, [])

  const handleOpenLandmarkGallery = (mon: any) => {
    // 1. Try to find matching landmark in stateData.landmarks
    const monNameClean = (mon.name || "").toLowerCase().replace(/[^a-z0-9]/g, "")
    const match = (stateData.landmarks || []).find((l) => {
      const lNameClean = l.name.toLowerCase().replace(/[^a-z0-9]/g, "")
      return lNameClean.includes(monNameClean) || monNameClean.includes(lNameClean)
    })

    if (match) {
      setGalleryLandmark(match)
    } else {
      // 2. Synthesize a LandmarkPin with multi-angle gallery
      const galleryItems: LandmarkAngleImage[] = [
        {
          url: mon.image,
          angle: "Front Elevation",
          caption: `${mon.name} — Front elevation and monumental architectural facade.`
        },
        {
          url: mon.image,
          angle: "Aerial & Panoramic View",
          caption: `${mon.name} — Broad panoramic context and heritage surroundings.`
        },
        {
          url: mon.image,
          angle: "Architectural Relief & Carvings",
          caption: `${mon.name} — Intricate heritage craftsmanship and authentic design motifs.`
        },
        {
          url: mon.image,
          angle: "Golden Hour & Sunset",
          caption: `${mon.name} — Bathed in radiant golden twilight showcasing its timeless cultural majesty.`
        }
      ]

      setGalleryLandmark({
        id: mon.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        name: mon.name,
        district: mon.location || stateData.capital || stateData.name,
        lat: 0,
        lon: 0,
        category: "monument",
        description: mon.description || mon.significance,
        image: mon.image,
        era: mon.era || mon.period || "Historical Epoch",
        builtBy: mon.builtBy || mon.patron || "Historic Architects & Patrons",
        architecturalStyle: mon.architecturalStyle || "Classical Indian Architecture",
        significance: mon.significance || mon.description,
        gallery: galleryItems
      })
    }
    setIsGalleryOpen(true)
  }

  // Synchronize when route / stateId changes
  useEffect(() => {
    setSelectedDistrict(stateConfig.defaultDistrict)
    setSelectedLandmark(null)
    setGalleryLandmark(null)
    setIsGalleryOpen(false)
    stopGreetingAudio()
    setIsSpeakingGreeting(false)
    setActiveSpeakingLang(null)
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
        "quiz-section",
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

  const handleOpenStateGoogleMaps = () => {
    if (!stateData.monuments || stateData.monuments.length === 0) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stateData.name + ' tourism attractions')}`, '_blank', 'noopener,noreferrer')
      return
    }
    const topMonuments = stateData.monuments.slice(0, 5).map(m => `${m.name}, ${m.location}, ${stateData.name}`)
    const origin = encodeURIComponent(topMonuments[0])
    if (topMonuments.length === 1) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${origin}`, '_blank', 'noopener,noreferrer')
      return
    }
    const destination = encodeURIComponent(topMonuments[topMonuments.length - 1])
    const waypoints = topMonuments.slice(1, -1).map(w => encodeURIComponent(w)).join('|')
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypoints ? `&waypoints=${waypoints}` : ''}`
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  }

  const handlePrintStatePDF = () => {
    window.print()
  }

  return (
    <div
      className={`state-page state-theme-${stateData.id}`}
      style={{
        backgroundColor: stateTheme.pageBg,
        ["--state-primary" as string]: stateTheme.primaryColor,
        ["--state-secondary" as string]: stateTheme.secondaryColor,
        ["--state-accent" as string]: stateTheme.accentColor,
        ["--state-border" as string]: stateTheme.borderColor,
        ["--state-page-bg" as string]: stateTheme.pageBg,
        ["--state-section-bg" as string]: stateTheme.sectionBg,
        ["--state-card-bg" as string]: stateTheme.cardBg,
        ["--state-art-pattern" as string]: `url("${stateTheme.artPatternSvg}")`,
      }}
    >
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
          <button
            type="button"
            className={`nav-tab ${activeSection === "quiz-section" ? "active" : ""}`}
            onClick={() => scrollToSection("quiz-section")}
          >
            Quiz
          </button>
        </nav>

        {/* Soothing Indian Classical Ambient Audio Pill */}
        <div className="heritage-audio-pill" role="region" aria-label="Indian Classical Ambience">
          <button
            type="button"
            className={`audio-mute-toggle ${audioState.isMuted ? "muted" : "playing"}`}
            onClick={() => {
              if (!audioState.isPlaying) {
                heritageAudio.start()
              } else {
                heritageAudio.toggleMute()
              }
            }}
            title={audioState.isMuted ? "Unmute Classical Ambience" : "Mute Classical Ambience"}
            aria-label={audioState.isMuted ? "Unmute classical ambience" : "Mute classical ambience"}
          >
            {audioState.isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span className="audio-label">{audioState.isMuted ? "Muted" : "Tanpura & Flute"}</span>
            {!audioState.isMuted && audioState.isPlaying && (
              <span className="audio-wave-anim">
                <span /><span /><span />
              </span>
            )}
          </button>

          <div className="audio-vol-controls">
            <button
              type="button"
              className="audio-vol-btn"
              onClick={() => heritageAudio.volumeDown()}
              title="Decrease Volume (-10%)"
              aria-label="Decrease volume"
              disabled={audioState.volume <= 0.05}
            >
              <Minus size={11} />
            </button>
            <span className="audio-vol-pct">{Math.round(audioState.volume * 100)}%</span>
            <button
              type="button"
              className="audio-vol-btn"
              onClick={() => heritageAudio.volumeUp()}
              title="Increase Volume (+10%)"
              aria-label="Increase volume"
              disabled={audioState.volume >= 1.0}
            >
              <Plus size={11} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO: BIG 3D STATE MAP (VIBRANT THEMED ARTWORK) ================= */}
      <section
        className="state-hero-map"
        id="map-section"
        style={{ background: stateTheme.heroGradient }}
      >
        {/* Traditional Painting Watermark Backdrop */}
        <div
          className="state-hero-art-backdrop"
          style={{ backgroundImage: `url("${stateTheme.artPatternSvg}")` }}
          aria-hidden="true"
        />

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

          {/* Traditional Art & Painting Badge */}
          <div className="hero-traditional-art-badge">
            <Palette size={13} className="art-palette-icon" />
            <div className="hero-art-info">
              <span className="hero-art-kicker">TRADITIONAL PAINTING</span>
              <span className="hero-art-name">{stateTheme.artName}</span>
            </div>
          </div>

          {stateGreeting && (
            <div className="hud-greeting-badge">
              <div className="greeting-badge-header">
                <span className="greeting-badge-kicker">
                  SAY HELLO IN {stateGreeting.language.split(",")[0].split("&")[0].trim().toUpperCase()}
                </span>
                <button
                  type="button"
                  className={`greeting-listen-chip ${isSpeakingGreeting ? "speaking" : ""}`}
                  onClick={() => {
                    if (isSpeakingGreeting) {
                      stopGreetingAudio()
                      setIsSpeakingGreeting(false)
                    } else {
                      setIsSpeakingGreeting(true)
                      playGreetingAudio(
                        stateGreeting,
                        () => setIsSpeakingGreeting(true),
                        () => setIsSpeakingGreeting(false),
                        () => setIsSpeakingGreeting(false)
                      )
                    }
                  }}
                  title="Listen to authentic pronunciation"
                >
                  <Volume2 size={12} className={isSpeakingGreeting ? "audio-pulse" : ""} />
                  <span>{isSpeakingGreeting ? "Speaking..." : "Listen"}</span>
                </button>
              </div>

              <div className="greeting-badge-phrase">
                <span className="greeting-native">{stateGreeting.native}</span>
                <span className="greeting-roman">({stateGreeting.transliteration})</span>
              </div>

              <p className="greeting-badge-meaning">"{stateGreeting.meaning}"</p>
            </div>
          )}

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
            <span>Rotate 3D map • Tap or click any district</span>
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
            onDistrictSelect={(district) => {
              setSelectedDistrict(district)
              setSelectedLandmark(null)
            }}
            onLandmarkSelect={(pin) => setSelectedLandmark(pin)}
          />
        </div>

        {/* Floating Action Buttons (Top-Right of Map in Empty Space) */}
        <div className="state-hero-actions-cluster">
          <button
            type="button"
            onClick={() => setIsAIOpen(true)}
            className="state-hero-ai-guide-btn"
            title={`Ask Bharat Heritage AI Companion about ${stateData.name}`}
            aria-label={`Ask Bharat Heritage AI Companion about ${stateData.name}`}
          >
            <div className="ai-btn-icon-wrap">
              <Sparkles size={15} className="ai-btn-sparkle" />
            </div>
            <div className="ai-btn-text-col">
              <span className="ai-btn-kicker">HERITAGE AI</span>
              <span className="ai-btn-title">Ask AI Guide</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="state-hero-yt-reel-btn"
            title={`Watch Official ${stateData.name} Tourism Reel`}
            aria-label={`Watch Official ${stateData.name} Tourism Reel`}
          >
            <div className="yt-reel-play-icon-wrap">
              <Play size={15} fill="currentColor" className="yt-reel-play-icon" />
              <span className="yt-reel-pulse-ring" />
            </div>
            <div className="yt-reel-text-col">
              <span className="yt-reel-kicker">OFFICIAL TOURISM REEL</span>
              <span className="yt-reel-title">Watch {stateData.name} Video</span>
            </div>
            <Sparkles size={14} className="yt-reel-sparkle-icon" />
          </button>

          <button
            type="button"
            onClick={handleOpenStateGoogleMaps}
            className="state-hero-maps-btn"
            title={`Open ${stateData.name} Heritage Route in Google Maps`}
            aria-label={`Open ${stateData.name} Heritage Route in Google Maps`}
          >
            <div className="maps-btn-icon-wrap">
              <MapPin size={15} />
            </div>
            <div className="maps-btn-text-col">
              <span className="maps-btn-kicker">TURNKEY ROUTE</span>
              <span className="maps-btn-title">Google Maps</span>
            </div>
            <ExternalLink size={12} className="maps-btn-ext-icon" />
          </button>

          <button
            type="button"
            onClick={handlePrintStatePDF}
            className="state-hero-pdf-btn"
            title={`Save or Print ${stateData.name} Heritage Guide (PDF)`}
            aria-label={`Save or Print ${stateData.name} Heritage Guide (PDF)`}
          >
            <div className="pdf-btn-icon-wrap">
              <Printer size={15} />
            </div>
            <div className="pdf-btn-text-col">
              <span className="pdf-btn-kicker">TRAVEL GUIDE</span>
              <span className="pdf-btn-title">Export PDF</span>
            </div>
          </button>
        </div>

        {/* Selected Landmark Floating Dialog */}
        {selectedLandmark && (
          <aside
            ref={landmarkToastRef}
            className="selected-landmark-toast"
            aria-label="Landmark Details"
          >
            {selectedLandmark.image && (
              <div className="toast-image-wrap">
                <img
                  src={selectedLandmark.image}
                  alt={selectedLandmark.name}
                  className="toast-landmark-img"
                  loading="lazy"
                />
                <span className="toast-image-lens-cue">
                  <Camera size={11} /> Real Photo
                </span>
              </div>
            )}

            <div className="toast-header">
              <span className={`toast-tag toast-tag-${selectedLandmark.category}`}>
                {selectedLandmark.category === "nature"
                  ? "🌿 NATURE & WILDLIFE"
                  : selectedLandmark.category === "spiritual"
                  ? "🕉️ SACRED & SPIRITUAL"
                  : selectedLandmark.category === "university"
                  ? "📜 ANCIENT LEARNING"
                  : "🏛️ HISTORIC MONUMENT"}
              </span>
              <button
                type="button"
                className="toast-close"
                onClick={() => setSelectedLandmark(null)}
                title="Close"
                aria-label="Close landmark details"
              >
                ✕
              </button>
            </div>

            <h4 className="toast-title">{selectedLandmark.name}</h4>

            <div className="toast-district-badge">
              <MapPin size={12} className="toast-pin-icon" />
              <span>District: <strong>{selectedLandmark.district}</strong></span>
            </div>

            <p className="toast-desc">{selectedLandmark.description}</p>

            <button
              type="button"
              className="toast-gallery-btn"
              onClick={() => {
                setGalleryLandmark(selectedLandmark)
                setIsGalleryOpen(true)
              }}
              title="Explore real photos from multiple perspectives"
            >
              <Camera size={14} />
              <span>Explore Multi-Angle Gallery & Story</span>
            </button>
          </aside>
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
      <section
        className="state-content-section"
        id="heritage-section"
      >
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
                  <div className="monument-action-btns-row">
                    <button
                      type="button"
                      className="monument-gallery-action-btn"
                      onClick={() => handleOpenLandmarkGallery(mon)}
                    >
                      <Camera size={14} />
                      <span>Explore Multi-Angle Gallery & Story</span>
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${mon.name} ${mon.location} ${stateData.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="monument-maps-quick-btn"
                      title={`Open ${mon.name} in Google Maps`}
                    >
                      <MapPin size={14} />
                      <span>Maps</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
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
                        <div className="greeting-actions-row">
                          <button
                            type="button"
                            className={`audio-greeting-btn ${activeSpeakingLang === lang.greeting ? "speaking" : ""}`}
                            onClick={() => {
                              if (activeSpeakingLang === lang.greeting) {
                                stopGreetingAudio()
                                setActiveSpeakingLang(null)
                              } else {
                                setActiveSpeakingLang(lang.greeting)
                                const phrase = lang.greeting.split("/")[0].split("(")[0].trim()
                                playGreetingAudio(
                                  {
                                    stateId: stateData.id,
                                    stateName: stateData.name,
                                    native: lang.greeting,
                                    transliteration: lang.greeting,
                                    language: lang.name,
                                    meaning: lang.meaning,
                                    speechPhrase: phrase,
                                    speechLang: stateGreeting?.speechLang || "hi-IN",
                                    region: stateGreeting?.region || "North",
                                    culturalContext: lang.meaning,
                                  },
                                  () => setActiveSpeakingLang(lang.greeting),
                                  () => setActiveSpeakingLang(null),
                                  () => setActiveSpeakingLang(null)
                                )
                              }
                            }}
                            title="Listen to pronunciation"
                            aria-label="Listen to pronunciation"
                          >
                            <Volume2 size={13} className={activeSpeakingLang === lang.greeting ? "audio-pulse" : ""} />
                          </button>

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
                  <div className="luminary-top-row">
                    <div className="luminary-avatar-wrap">
                      {person.image ? (
                        <img
                          src={person.image}
                          alt={person.name}
                          className="luminary-portrait-img"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      ) : (
                        <div className="luminary-avatar-placeholder">
                          {person.name.charAt(0)}
                        </div>
                      )}
                      <div className="luminary-avatar-ring" />
                    </div>
                    <div className="luminary-emblem">✦</div>
                  </div>
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

      {/* ================= SECTION 7: STATE CULTURAL QUIZ ================= */}
      <StateQuizSection
        stateId={stateData.id}
        stateName={stateData.name}
        onOpenMasteryTracker={() => setIsMasteryOpen(true)}
      />

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

      {/* ================= NATIONAL MASTERY TRACKER MODAL ================= */}
      <NationalMasteryModal
        isOpen={isMasteryOpen}
        onClose={() => setIsMasteryOpen(false)}
      />


      {/* ================= LANDMARK MULTI-ANGLE GALLERY MODAL ================= */}
      <LandmarkGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => {
          setIsGalleryOpen(false)
          setGalleryLandmark(null)
        }}
        landmark={galleryLandmark}
        stateName={stateData.name}
      />

      {/* ================= 1-MINUTE CULTURAL FILM & SOOTHING VOICEOVER MODAL ================= */}
      <StateCinematicModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        stateData={stateData}
        stateTheme={stateTheme}
      />

      {/* ================= BHARAT HERITAGE AI COMPANION MODAL ================= */}
      <HeritageCompanionModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        stateData={stateData}
        currentDistrict={selectedDistrict}
      />
    </div>
  )
}
