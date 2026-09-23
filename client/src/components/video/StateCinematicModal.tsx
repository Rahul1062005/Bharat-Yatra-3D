import { useEffect } from "react"
import { Film, X, ExternalLink, Compass, Search, CheckCircle2 } from "lucide-react"
import type { StateData } from "../../types/state"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
import { getStateVideoInfo } from "../../data/stateVideos"
import "./StateCinematicModal.css"

interface StateCinematicModalProps {
  isOpen: boolean
  onClose: () => void
  stateData: StateData
  stateTheme?: any
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

  const videoInfo = getStateVideoInfo(stateData.id, stateData.name)
  const directWatchUrl = `https://www.youtube.com/watch?v=${videoInfo.videoId}`
  const officialYoutubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    stateData.name + " Tourism Official Channel Reel Video Incredible India"
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
              title="Open directly in YouTube app or new tab"
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
            src={`https://www.youtube.com/embed/${videoInfo.videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
            title={videoInfo.title || `${stateData.name} Official Tourism Film`}
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
              <span>{videoInfo.channel}</span>
            </div>
            <span className="cinematic-footer-sep">•</span>
            <span className="cinematic-video-title-hint">{videoInfo.title}</span>
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
              title="Search more official state tourism videos"
            >
              <Search size={13} />
              <span>More {stateData.name} Videos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
