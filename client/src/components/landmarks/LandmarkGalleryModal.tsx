import React, { useState, useEffect } from "react"
import {
  X,
  Camera,
  Compass,
  Award,
  Calendar,
  UserCheck,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
  BookOpen,
  MapPin,
  Sparkles,
  Info
} from "lucide-react"
import type { LandmarkPin, LandmarkAngleImage } from "../../types/state"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
import "./LandmarkGalleryModal.css"

interface LandmarkGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  landmark: LandmarkPin | null
  stateName?: string
}

export const LandmarkGalleryModal: React.FC<LandmarkGalleryModalProps> = ({
  isOpen,
  onClose,
  landmark,
  stateName,
}) => {
  useBodyScrollLock(isOpen)
  const [selectedAngleIndex, setSelectedAngleIndex] = useState<number>(0)
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "significance">("overview")

  // Reset to first angle and overview tab whenever landmark changes
  useEffect(() => {
    setSelectedAngleIndex(0)
    setActiveTab("overview")
  }, [landmark])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !landmark) return null

  const landmarkTitle = landmark.name || (landmark as any).title || "Landmark"
  const landmarkCategory = landmark.category || (landmark as any).type || "monument"

  // Build the list of angle images
  const galleryItems: LandmarkAngleImage[] =
    landmark.gallery && landmark.gallery.length > 0
      ? landmark.gallery
      : landmark.image
      ? [
          {
            url: landmark.image,
            angle: "Front Elevation",
            caption: `${landmarkTitle} — Iconic front facade and heritage grounds.`,
          },
        ]
      : []

  const currentImage = galleryItems[selectedAngleIndex] || galleryItems[0]

  const handlePrevAngle = () => {
    if (galleryItems.length <= 1) return
    setSelectedAngleIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const handleNextAngle = () => {
    if (galleryItems.length <= 1) return
    setSelectedAngleIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="landmark-modal-backdrop" onClick={onClose}>
      <div
        className="landmark-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Gallery of ${landmarkTitle}`}
      >
        {/* ================= MODAL HEADER ================= */}
        <div className="landmark-modal-header">
          <div className="landmark-header-left">
            <div className="landmark-badges-row">
              <span className="landmark-category-pill">
                <Camera size={13} className="cat-icon" />
                <span className="cat-text">{landmarkCategory.toUpperCase()}</span>
              </span>
              <span className="landmark-district-pill">
                <MapPin size={12} />
                <span>{landmark.district} DISTRICT</span>
              </span>
              {stateName && (
                <span className="landmark-state-pill">
                  <span>{stateName}</span>
                </span>
              )}
            </div>
            <h2 className="landmark-main-title">{landmarkTitle}</h2>
          </div>

          <button
            type="button"
            className="landmark-modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </div>

        {/* ================= MODAL BODY ================= */}
        <div className="landmark-modal-body">
          {/* LEFT COLUMN: VISUAL GALLERY STAGE */}
          <div className="landmark-visual-stage">
            <div className="landmark-main-viewport">
              {currentImage ? (
                <>
                  <img
                    key={currentImage.url + currentImage.angle}
                    src={currentImage.url}
                    alt={`${landmarkTitle} - ${currentImage.angle}`}
                    className="landmark-featured-image"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = "none"
                    }}
                  />

                  {/* Angle Watermark Badge */}
                  <div className="image-angle-watermark">
                    <Layers size={13} />
                    <span>Perspective: <strong>{currentImage.angle}</strong></span>
                  </div>

                  {/* Navigation Arrows (if multiple angles) */}
                  {galleryItems.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="gallery-nav-arrow left-arrow"
                        onClick={handlePrevAngle}
                        title="Previous Perspective"
                        aria-label="Previous Perspective"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        type="button"
                        className="gallery-nav-arrow right-arrow"
                        onClick={handleNextAngle}
                        title="Next Perspective"
                        aria-label="Next Perspective"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Caption Bar */}
                  {currentImage?.caption && (
                    <div className="landmark-caption-bar">
                      <p>{currentImage.caption}</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="landmark-placeholder-view">
                  <Camera size={44} />
                  <p>Archival perspective imagery of {landmarkTitle}</p>
                </div>
              )}
            </div>

            {/* Angle Selector Tabs */}
            {galleryItems.length > 1 && (
              <div className="landmark-angle-ribbon">
                <div className="angle-ribbon-header">
                  <span className="angle-ribbon-title">
                    <Sparkles size={12} />
                    <span>SELECT ANGLE / PERSPECTIVE ({galleryItems.length})</span>
                  </span>
                  <span className="angle-counter">
                    0{selectedAngleIndex + 1} / 0{galleryItems.length}
                  </span>
                </div>

                <div className="angle-buttons-scroll">
                  {galleryItems.map((item, idx) => (
                    <button
                      key={`${item.angle}-${idx}`}
                      type="button"
                      className={`angle-tab-btn ${idx === selectedAngleIndex ? "active" : ""}`}
                      onClick={() => setSelectedAngleIndex(idx)}
                      title={`Switch to ${item.angle}`}
                    >
                      <span className="angle-number">0{idx + 1}</span>
                      <span className="angle-label">{item.angle}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: HERITAGE & ARCHITECTURAL DOSSIER */}
          <div className="landmark-dossier-panel">
            {/* Interactive Dossier Navigation Tabs */}
            <div className="dossier-tabs-nav">
              <button
                type="button"
                className={`dossier-nav-tab ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                <BookOpen size={14} />
                <span>The Story</span>
              </button>
              <button
                type="button"
                className={`dossier-nav-tab ${activeTab === "architecture" ? "active" : ""}`}
                onClick={() => setActiveTab("architecture")}
              >
                <Award size={14} />
                <span>Architecture</span>
              </button>
              <button
                type="button"
                className={`dossier-nav-tab ${activeTab === "significance" ? "active" : ""}`}
                onClick={() => setActiveTab("significance")}
              >
                <ShieldCheck size={14} />
                <span>Significance</span>
              </button>
            </div>

            {/* TAB CONTENT 1: THE STORY & OVERVIEW */}
            {activeTab === "overview" && (
              <div className="tab-pane-fade">
                {/* Historical Narrative */}
                <div className="dossier-story-card">
                  <div className="dossier-card-title">
                    <Info size={15} className="card-title-icon" />
                    <span>HISTORICAL NARRATIVE & LORE</span>
                  </div>
                  <p className="dossier-narrative-text">{landmark.description}</p>
                </div>

                {/* Key Quick Fact Rows (Full width, clear and legible) */}
                <div className="dossier-rows-list">
                  {landmark.era && (
                    <div className="dossier-row-card">
                      <div className="row-icon-cell">
                        <Calendar size={18} />
                      </div>
                      <div className="row-content-cell">
                        <span className="row-label">HISTORICAL ERA</span>
                        <strong className="row-value">{landmark.era}</strong>
                      </div>
                    </div>
                  )}

                  {landmark.builtBy && (
                    <div className="dossier-row-card">
                      <div className="row-icon-cell">
                        <UserCheck size={18} />
                      </div>
                      <div className="row-content-cell">
                        <span className="row-label">BUILT BY / PATRON</span>
                        <strong className="row-value">{landmark.builtBy}</strong>
                      </div>
                    </div>
                  )}

                  {landmark.district && (
                    <div className="dossier-row-card">
                      <div className="row-icon-cell">
                        <MapPin size={18} />
                      </div>
                      <div className="row-content-cell">
                        <span className="row-label">DISTRICT LOCATION</span>
                        <strong className="row-value">{landmark.district}, {stateName || "Bharat"}</strong>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: ARCHITECTURE & GENIUS */}
            {activeTab === "architecture" && (
              <div className="tab-pane-fade">
                <div className="dossier-story-card architecture-focus">
                  <div className="dossier-card-title">
                    <Compass size={15} className="card-title-icon" />
                    <span>ARCHITECTURAL STYLE & DESIGN</span>
                  </div>
                  <div className="style-highlight-box">
                    <span className="style-pill-tag">CLASSIFICATION</span>
                    <h3 className="style-heading">{landmark.architecturalStyle || "Classical Indigenous Architecture"}</h3>
                  </div>
                  <p className="dossier-narrative-text">
                    This monument embodies the sublime architectural and masonry traditions of the {landmark.district} region, 
                    showcasing sophisticated symmetry, monumental stone craftsmanship, and traditional Vastu / indigenous civil engineering principles.
                  </p>
                </div>

                <div className="dossier-rows-list">
                  {landmark.builtBy && (
                    <div className="dossier-row-card">
                      <div className="row-icon-cell">
                        <UserCheck size={18} />
                      </div>
                      <div className="row-content-cell">
                        <span className="row-label">ARCHITECTURAL PATRON</span>
                        <strong className="row-value">{landmark.builtBy}</strong>
                      </div>
                    </div>
                  )}

                  {landmark.era && (
                    <div className="dossier-row-card">
                      <div className="row-icon-cell">
                        <Calendar size={18} />
                      </div>
                      <div className="row-content-cell">
                        <span className="row-label">CHRONOLOGY & PERIOD</span>
                        <strong className="row-value">{landmark.era}</strong>
                      </div>
                    </div>
                  )}

                  <div className="dossier-row-card">
                    <div className="row-icon-cell">
                      <Layers size={18} />
                    </div>
                    <div className="row-content-cell">
                      <span className="row-label">CURRENT PERSPECTIVE FEATURE</span>
                      <strong className="row-value">{currentImage?.angle}</strong>
                      <span className="row-subtext">{currentImage?.caption}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: CULTURAL SIGNIFICANCE & GEOGRAPHY */}
            {activeTab === "significance" && (
              <div className="tab-pane-fade">
                <div className="dossier-story-card significance-focus">
                  <div className="dossier-card-title">
                    <ShieldCheck size={15} className="card-title-icon" />
                    <span>CULTURAL & HISTORICAL SIGNIFICANCE</span>
                  </div>
                  <p className="significance-lead-text">
                    {landmark.significance || `Celebrated landmark of ${landmark.district}, standing as a living testament to Bharat's civilizational legacy.`}
                  </p>
                </div>

                <div className="dossier-rows-list">
                  <div className="dossier-row-card">
                    <div className="row-icon-cell">
                      <MapPin size={18} />
                    </div>
                    <div className="row-content-cell">
                      <span className="row-label">GEOGRAPHIC COORDINATES</span>
                      <strong className="row-value">
                        {landmark.lat != null ? Number(landmark.lat).toFixed(4) : "—"}° N,{" "}
                        {landmark.lon != null ? Number(landmark.lon).toFixed(4) : "—"}° E
                      </strong>
                      <span className="row-subtext">Geolocated in {landmark.district} district</span>
                    </div>
                  </div>

                  <div className="dossier-row-card">
                    <div className="row-icon-cell">
                      <Award size={18} />
                    </div>
                    <div className="row-content-cell">
                      <span className="row-label">HERITAGE STATUS</span>
                      <strong className="row-value">Protected Cultural Monument of Bharat</strong>
                      <span className="row-subtext">Integral landmark within the national Bharat Yatra cultural atlas.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FOOTER BAR: QUICK STATUS STRIP */}
            <div className="dossier-footer-bar">
              <div className="footer-status-pill">
                <span className="status-live-dot" />
                <span>Active 3D Landmark</span>
              </div>
              <span className="footer-coords-text">
                {landmark.lat != null ? Number(landmark.lat).toFixed(3) : ""}°N,{" "}
                {landmark.lon != null ? Number(landmark.lon).toFixed(3) : ""}°E
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandmarkGalleryModal
