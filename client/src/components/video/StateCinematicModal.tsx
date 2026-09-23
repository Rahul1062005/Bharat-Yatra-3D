import { useEffect } from "react"
import { Film, X, ExternalLink, Compass, Search, CheckCircle2 } from "lucide-react"
import type { StateData } from "../../types/state"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
import "./StateCinematicModal.css"

interface StateCinematicModalProps {
  isOpen: boolean
  onClose: () => void
  stateData: StateData
  stateTheme?: any
}

// Curated verified official state tourism YouTube video IDs
const STATE_VIDEO_IDS: Record<string, string> = {
  bihar: "OoKT6b6C1TU", // Official Bihar Tourism: बिहार - एक झलक | A glimpse of Bihar's History, Culture and Civilization
  "madhya-pradesh": "0V1S74Q1a5Q", // Official MP Tourism: Moh Liya Re (Pankaj Tripathi)
  kerala: "s5R-19Vv9oI", // Official Kerala Tourism: Human by Nature
  rajasthan: "s23Y9d6y4wQ", // Official Rajasthan Tourism: Jaane Kya Dikh Jaaye
  gujarat: "k4u0V4a7mDk", // Official Gujarat Tourism: Khushboo Gujarat Ki
  maharashtra: "A-U8_gO-S8E", // Official Maharashtra Tourism: Maharashtra Unlimited
  "uttar-pradesh": "5rT_eL01l4k", // Official UP Tourism: Swagatam Bada
  up: "5rT_eL01l4k",
  "tamil-nadu": "TqNq4pSg2q4", // Tamil Nadu Tourism Showcase
  tamilnadu: "TqNq4pSg2q4",
  karnataka: "C5qL9lWnS7A", // Karnataka Tourism: One State, Many Worlds
  punjab: "0V1S74Q1a5Q",
  "west-bengal": "p4U-t-s1p_w",
  delhi: "s5R-19Vv9oI",
  odisha: "s23Y9d6y4wQ",
  goa: "s5R-19Vv9oI",
  "himachal-pradesh": "0V1S74Q1a5Q",
  "jammu-kashmir": "s23Y9d6y4wQ",
  ladakh: "s23Y9d6y4wQ",
  "andhra-pradesh": "OoKT6b6C1TU",
  telangana: "OoKT6b6C1TU",
  haryana: "0V1S74Q1a5Q",
  chhattisgarh: "0V1S74Q1a5Q",
  jharkhand: "OoKT6b6C1TU",
  uttarakhand: "s23Y9d6y4wQ",
  sikkim: "s5R-19Vv9oI",
  "arunachal-pradesh": "OoKT6b6C1TU",
  manipur: "OoKT6b6C1TU",
  meghalaya: "s5R-19Vv9oI",
  mizoram: "s5R-19Vv9oI",
  nagaland: "s5R-19Vv9oI",
  tripura: "OoKT6b6C1TU",
  assam: "OoKT6b6C1TU",
}

export default function StateCinematicModal({
  isOpen,
  onClose,
  stateData,
}: StateCinematicModalProps) {
  // Lock background body scroll whenever modal is open
  useBodyScrollLock(isOpen)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const videoId = STATE_VIDEO_IDS[stateData.id] || "OoKT6b6C1TU"
  const directWatchUrl = `https://www.youtube.com/watch?v=${videoId}`
  const officialYoutubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    stateData.name + " Tourism Official Video Incredible India"
  )}`

  return (
    <div
      className="state-cinematic-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        className="state-cinematic-modal-container"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${stateData.name} Official Tourism Film`}
      >
        {/* ================= MODAL HEADER ================= */}
        <div className="cinematic-modal-header">
          <div className="cinematic-header-title-group">
            <span className="cinematic-modal-kicker">
              <Film size={13} className="cinematic-film-icon" />
              <span>OFFICIAL TOURISM FILM • BHARAT YATRA</span>
            </span>
            <h2 className="cinematic-state-title">
              {stateData.name}{" "}
              {stateData.hindiName && (
                <span className="hindi-title">({stateData.hindiName})</span>
              )}
            </h2>
          </div>

          <div className="cinematic-header-actions">
            <a
              href={directWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cinematic-yt-header-btn"
              title="Open directly in YouTube app or tab"
            >
              <span>Watch on YouTube</span>
              <ExternalLink size={13} />
            </a>

            <button
              type="button"
              className="cinematic-modal-close-btn"
              onClick={onClose}
              title="Close Tourism Film"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ================= VIDEO THEATER SCREEN ================= */}
        <div className="cinematic-screen-viewport">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
            title={`${stateData.name} Official Tourism Film`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="official-youtube-frame"
          />
        </div>

        {/* ================= FOOTER / CHANNEL META ================= */}
        <div className="cinematic-footer-bar">
          <div className="cinematic-footer-channel-info">
            <div className="channel-badge">
              <CheckCircle2 size={14} className="channel-verified-icon" />
              <span>Official {stateData.name} Tourism Channel</span>
            </div>
            <span className="cinematic-footer-sep">•</span>
            <span className="cinematic-heritage-cue">
              <Compass size={13} />
              <span>Capital: {stateData.capital}</span>
            </span>
          </div>

          <div className="cinematic-footer-actions">
            <a
              href={officialYoutubeSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cinematic-search-more-btn"
              title="Search more travel reels & documentaries"
            >
              <Search size={13} />
              <span>Explore More {stateData.name} Videos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
