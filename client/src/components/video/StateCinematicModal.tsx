import { useState, useEffect, useRef } from "react"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  X,
  Sparkles,
  Film,
  Compass,
  ExternalLink,
} from "lucide-react"

import type { StateData } from "../../types/state"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
import "./StateCinematicModal.css"

interface StateCinematicModalProps {
  isOpen: boolean
  onClose: () => void
  stateData: StateData
  stateTheme?: any
}

interface ChapterScene {
  time: number
  title: string
  subtitle: string
  narration: string
  image: string
  badge: string
}

// Curated verified official state documentary & TVC video IDs
const STATE_VIDEO_IDS: Record<string, string> = {
  "madhya-pradesh": "knCV_6YOFXQ", // Official MP Tourism TVC (Hindustan Ka Dil Dekho)
  kerala: "s5R-19Vv9oI", // Official Kerala Tourism (Human by Nature)
  rajasthan: "s23Y9d6y4wQ", // Official Rajasthan Tourism (Jaane Kya Dikh Jaaye)
  gujarat: "knCV_6YOFXQ", // Fallback to national high-res tourism reel
  bihar: "knCV_6YOFXQ",
  maharashtra: "knCV_6YOFXQ",
}

export default function StateCinematicModal({
  isOpen,
  onClose,
  stateData,
}: StateCinematicModalProps) {
  // Lock background body scroll whenever modal is open
  useBodyScrollLock(isOpen)

  const [isPlaying, setIsPlaying] = useState(true)
  const [isVoiceoverMuted, setIsVoiceoverMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [activeTab, setActiveTab] = useState<"cinematic" | "official">("cinematic")
  const totalDuration = 65 // ~65 seconds soothing documentary reel

  const timerRef = useRef<any>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Curate rich visual scenes from state landmarks, arts, and cuisines
  const defaultImages = [
    stateData.landmarks?.[0]?.image || stateData.monuments?.[0]?.image || `/images/${stateData.id}/${stateData.id}_hero.jpg`,
    stateData.landmarks?.[1]?.image || stateData.traditions?.[0]?.image || `/images/${stateData.id}/${stateData.id}_art.jpg`,
    stateData.cuisines?.[0]?.image || `/images/${stateData.id}/${stateData.id}_food.jpg`,
    stateData.landmarks?.[2]?.image || stateData.monuments?.[1]?.image || `/images/${stateData.id}/${stateData.id}_culture.jpg`,
    stateData.landmarks?.[0]?.image || `/images/${stateData.id}/${stateData.id}_hero.jpg`,
  ].filter(Boolean)

  const scenes: ChapterScene[] = [
    {
      time: 0,
      title: "Dawn of Civilization",
      subtitle: stateData.tagline || "Cradle of Antiquity",
      narration: `Welcome to ${stateData.name}. ${stateData.tagline || ""}. A sacred realm shaped by timeless rivers, heroic empires, and thousands of years of living cultural heritage.`,
      image: defaultImages[0] || "/images/landmarks/delhi/delhi-india-gate_angle1.jpg",
      badge: "Act I • The Sacred Land",
    },
    {
      time: 14,
      title: "Monumental Architecture",
      subtitle: stateData.landmarks?.[0]?.name || stateData.monuments?.[0]?.name || "Sacred Shrines & Fortresses",
      narration: `In ${stateData.name}, history is etched into monumental stone. From ancient monolithic shrines to grand imperial forts, each stone tells a story of devotion, courage, and timeless beauty.`,
      image: defaultImages[1] || defaultImages[0],
      badge: "Act II • Architectural Majesty",
    },
    {
      time: 29,
      title: "Living Folk & Artisan Arts",
      subtitle: stateData.traditions?.[0]?.name || stateData.traditions?.[0]?.title || "Millennia of Craftsmanship",
      narration: `Generations of master artisans have woven the soul of ${stateData.name} into vibrant folk murals, sacred handloom textiles, and timeless dance dramas that celebrate life and the divine.`,
      image: defaultImages[2] || defaultImages[1],
      badge: "Act III • Folk Traditions",
    },
    {
      time: 44,
      title: "Flavors of Antiquity",
      subtitle: stateData.cuisines?.[0]?.name || "Sacred Culinary Heritage",
      narration: `Every traditional delicacy of ${stateData.name} is a feast of heritage, blending fragrant indigenous spices, traditional hearth techniques, and heartwarming hospitality.`,
      image: defaultImages[3] || defaultImages[2] || defaultImages[0],
      badge: "Act IV • Royal Gastronomy",
    },
    {
      time: 56,
      title: "The Eternal Spirit",
      subtitle: "एक भारत • श्रेष्ठ भारत",
      narration: `As the golden twilight washes across ${stateData.name}, its eternal spirit whispers peace, welcoming every traveler into the beating heart of Bharat.`,
      image: defaultImages[4] || defaultImages[0],
      badge: "Act V • Living Spirit",
    },
  ]

  // Find active scene based on currentTime
  let activeSceneIndex = 0
  for (let i = scenes.length - 1; i >= 0; i--) {
    if (currentTime >= scenes[i].time) {
      activeSceneIndex = i
      break
    }
  }
  const currentScene = scenes[activeSceneIndex]

  // Soothing Voiceover Narration via SpeechSynthesis
  const speakCurrentScene = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return
    if (isVoiceoverMuted) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.88 // Gentle, soothing cadence
    utterance.pitch = 0.95 // Warm, resonant tone

    // Try to pick a natural soothing voice
    const voices = window.speechSynthesis.getVoices()
    const preferredVoice =
      voices.find((v) => /en-in|indian|natural|serena|google/i.test(v.name || v.lang)) ||
      voices.find((v) => v.lang.startsWith("en"))

    if (preferredVoice) {
      utterance.voice = preferredVoice
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  // Handle play/pause timer
  useEffect(() => {
    if (!isOpen) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel()
      }
      setCurrentTime(0)
      setIsPlaying(true)
      return
    }

    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false)
            return totalDuration
          }
          return prev + 1
        })
      }, 1000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.pause()
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isOpen, isPlaying])

  // Trigger narration whenever scene changes
  useEffect(() => {
    if (isOpen && isPlaying && !isVoiceoverMuted && activeTab === "cinematic") {
      speakCurrentScene(currentScene.narration)
    }
  }, [activeSceneIndex, isVoiceoverMuted, activeTab, isOpen])

  // Stop voiceover when modal closes or unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  if (!isOpen) return null

  const progressPercent = Math.min((currentTime / totalDuration) * 100, 100)
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m}:${s < 10 ? "0" : ""}${s}`
  }

  const officialVideoId = STATE_VIDEO_IDS[stateData.id] || "knCV_6YOFXQ"
  const officialYoutubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(stateData.name + " Tourism Official Ad Incredible India")}`

  return (
    <div
      className="state-cinematic-modal-overlay"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        className="state-cinematic-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${stateData.name} Cultural Film`}
      >
        {/* ================= MODAL HEADER ================= */}
        <div className="cinematic-modal-header">
          <div className="cinematic-header-title-group">
            <span className="cinematic-modal-kicker">
              <Film size={13} className="cinematic-film-icon" />
              <span>CULTURAL ODYSSEY • 1 MINUTE EXPERIENCE</span>
            </span>
            <h2 className="cinematic-state-title">
              {stateData.name} <span className="hindi-title">({stateData.hindiName || ""})</span>
            </h2>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="cinematic-tab-group">
            <button
              type="button"
              className={`cinematic-tab-btn ${activeTab === "cinematic" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("cinematic")
                if (!isVoiceoverMuted) speakCurrentScene(currentScene.narration)
              }}
            >
              <Sparkles size={13} />
              <span>Ambient Storyboard</span>
            </button>
            <button
              type="button"
              className={`cinematic-tab-btn ${activeTab === "official" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("official")
                if (typeof window !== "undefined" && "speechSynthesis" in window) {
                  window.speechSynthesis.cancel()
                }
              }}
            >
              <Film size={13} />
              <span>Official Tourism Reel</span>
            </button>
          </div>

          <button
            type="button"
            className="cinematic-modal-close-btn"
            onClick={onClose}
            title="Close State Film"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* ================= SCREEN / VIEWPORT ================= */}
        <div className="cinematic-screen-viewport">
          {activeTab === "cinematic" ? (
            <div className="cinematic-storyboard-player">
              {/* Ken Burns Animated Background Visual */}
              <div className="cinematic-image-stage">
                <img
                  key={currentScene.image}
                  src={currentScene.image}
                  alt={currentScene.title}
                  className="cinematic-ken-burns-img"
                />
                <div className="cinematic-vignette-overlay" />
              </div>

              {/* Top Scene Kicker & Badge */}
              <div className="cinematic-scene-meta">
                <span className="scene-act-badge">{currentScene.badge}</span>
                <span className="scene-time-cue">{formatTime(currentTime)} / {formatTime(totalDuration)}</span>
              </div>

              {/* Synchronized Subtitles & Narrative Box */}
              <div className="cinematic-captions-box">
                <h3 className="scene-caption-title">{currentScene.title}</h3>
                <h4 className="scene-caption-subtitle">{currentScene.subtitle}</h4>
                <p className="scene-caption-text">{currentScene.narration}</p>
              </div>

              {/* Sound Wave Indicator for Soothing Voiceover */}
              {!isVoiceoverMuted && isPlaying && (
                <div className="voiceover-wave-indicator" title="Soothing voiceover active">
                  <span className="wave-bar bar-1" />
                  <span className="wave-bar bar-2" />
                  <span className="wave-bar bar-3" />
                  <span className="wave-label">Voiceover Active</span>
                </div>
              )}
            </div>
          ) : (
            <div className="official-video-iframe-wrap">
              {/* Top Direct Launch Bar for Official Reel */}
              <div className="official-yt-top-banner">
                <div className="official-banner-left">
                  <Film size={14} className="banner-film-icon" />
                  <span>{stateData.name} Tourism Official Campaign</span>
                </div>
                <a
                  href={officialYoutubeSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="official-yt-external-btn"
                  title="Watch official state films in 4K on YouTube"
                >
                  <span>Watch 4K on YouTube</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <iframe
                src={`https://www.youtube-nocookie.com/embed/${officialVideoId}?autoplay=1&mute=0&rel=0&modestbranding=1&enablejsapi=1`}
                title={`${stateData.name} Official Tourism Documentary`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="official-youtube-frame"
              />
            </div>
          )}
        </div>

        {/* ================= CINEMATIC CONTROLS BAR ================= */}
        <div className="cinematic-controls-bar">
          {/* Timeline Progress Bar */}
          <div
            className="cinematic-progress-track"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const pct = (e.clientX - rect.left) / rect.width
              const targetSecs = Math.floor(pct * totalDuration)
              setCurrentTime(targetSecs)
            }}
          >
            <div className="cinematic-progress-fill" style={{ width: `${progressPercent}%` }} />
            {/* Chapter markers */}
            {scenes.map((s) => (
              <span
                key={s.time}
                className="chapter-marker"
                style={{ left: `${(s.time / totalDuration) * 100}%` }}
                title={s.title}
              />
            ))}
          </div>

          <div className="cinematic-controls-row">
            <div className="controls-left">
              <button
                type="button"
                className="cinematic-play-btn"
                onClick={() => {
                  if (currentTime >= totalDuration) {
                    setCurrentTime(0)
                    setIsPlaying(true)
                  } else {
                    setIsPlaying(!isPlaying)
                  }
                }}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying && currentTime < totalDuration ? <Pause size={17} /> : <Play size={17} />}
                <span>{isPlaying && currentTime < totalDuration ? "Pause" : "Play"}</span>
              </button>

              <button
                type="button"
                className="cinematic-icon-btn"
                onClick={() => {
                  setCurrentTime(0)
                  setIsPlaying(true)
                  if (!isVoiceoverMuted && activeTab === "cinematic") {
                    speakCurrentScene(scenes[0].narration)
                  }
                }}
                title="Replay from start"
              >
                <RotateCcw size={15} />
              </button>

              <button
                type="button"
                className={`cinematic-icon-btn ${isVoiceoverMuted ? "muted" : ""}`}
                onClick={() => {
                  if (!isVoiceoverMuted) {
                    setIsVoiceoverMuted(true)
                    if (typeof window !== "undefined" && "speechSynthesis" in window) {
                      window.speechSynthesis.cancel()
                    }
                  } else {
                    setIsVoiceoverMuted(false)
                    speakCurrentScene(currentScene.narration)
                  }
                }}
                title={isVoiceoverMuted ? "Unmute Voiceover" : "Mute Voiceover"}
              >
                {isVoiceoverMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span className="mute-hint">{isVoiceoverMuted ? "Voice Off" : "Voice On"}</span>
              </button>
            </div>

            <div className="controls-center">
              <span className="controls-time-display">
                {formatTime(currentTime)} / {formatTime(totalDuration)}
              </span>
            </div>

            <div className="controls-right">
              <span className="cinematic-heritage-cue">
                <Compass size={13} />
                <span>{stateData.capital}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
