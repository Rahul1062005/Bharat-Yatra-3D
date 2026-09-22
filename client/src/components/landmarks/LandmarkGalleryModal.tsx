import React, { useState, useEffect } from "react"
import { X, Camera, Compass, Award, Calendar, UserCheck, ShieldCheck, ChevronLeft, ChevronRight, Layers } from "lucide-react"
import type { LandmarkPin, LandmarkAngleImage } from "../../types/state"
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
  const [selectedAngleIndex, setSelectedAngleIndex] = useState<number>(0)

  // Reset to first angle whenever landmark changes
  useEffect(() => {
    setSelectedAngleIndex(0)
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
        {/* Modal Header */}
        <div className="landmark-modal-header">
          <div className="landmark-title-group">
            <div className="landmark-category-pill">
              <Camera size={14} className="cat-icon" />
              <span className="cat-text">
                {landmarkCategory.toUpperCase()} • {landmark.district}
              </span>
            </div>
            <h2 className="landmark-main-title">{landmarkTitle}</h2>
            {stateName && (
              <span className="landmark-state-crumb">
                {stateName} • Heritage Architecture of Bharat
              </span>
            )}
          </div>

          <button
            type="button"
            className="landmark-modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="landmark-modal-body">
          {/* Main Visual Gallery Showcase */}
          <div className="landmark-visual-panel">
            <div className="landmark-main-viewport">
              {currentImage ? (
                <>
                  <img
                    key={currentImage.url}
                    src={currentImage.url}
                    alt={`${landmarkTitle} - ${currentImage.angle}`}
                    className="landmark-featured-image"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to placeholder gradient if image URL fails
                      const target = e.currentTarget
                      target.style.display = "none"
                    }}
                  />
                  <div className="image-angle-watermark">
                    <Layers size={13} />
                    <span>{currentImage.angle}</span>
                  </div>

                  {galleryItems.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="gallery-nav-arrow left-arrow"
                        onClick={handlePrevAngle}
                        title="Previous Angle"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        type="button"
                        className="gallery-nav-arrow right-arrow"
                        onClick={handleNextAngle}
                        title="Next Angle"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div className="landmark-placeholder-view">
                  <Camera size={44} />
                  <p>Archival perspective imagery of {landmarkTitle}</p>
                </div>
              )}

              {/* Caption Bar */}
              {currentImage?.caption && (
                <div className="landmark-caption-bar">
                  <p>{currentImage.caption}</p>
                </div>
              )}
            </div>

            {/* Angle Selector Tabs / Ribbon */}
            {galleryItems.length > 1 && (
              <div className="landmark-angle-ribbon">
                <span className="angle-ribbon-title">PERSPECTIVES & ANGLES:</span>
                <div className="angle-buttons-scroll">
                  {galleryItems.map((item, idx) => (
                    <button
                      key={`${item.angle}-${idx}`}
                      type="button"
                      className={`angle-tab-btn ${idx === selectedAngleIndex ? "active" : ""}`}
                      onClick={() => setSelectedAngleIndex(idx)}
                    >
                      <span className="angle-number">0{idx + 1}</span>
                      <span className="angle-label">{item.angle}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Architectural & Historical Dossier Panel */}
          <div className="landmark-dossier-panel">
            <div className="dossier-section-title">
              <Compass size={16} />
              <span>ARCHITECTURAL & CULTURAL DOSSIER</span>
            </div>

            {/* Quick Metadata Chips */}
            <div className="dossier-chips-grid">
              {landmark.era && (
                <div className="dossier-chip">
                  <div className="chip-icon-box">
                    <Calendar size={15} />
                  </div>
                  <div className="chip-info">
                    <span className="chip-label">HISTORICAL ERA</span>
                    <span className="chip-value">{landmark.era}</span>
                  </div>
                </div>
              )}

              {landmark.builtBy && (
                <div className="dossier-chip">
                  <div className="chip-icon-box">
                    <UserCheck size={15} />
                  </div>
                  <div className="chip-info">
                    <span className="chip-label">BUILT BY / PATRON</span>
                    <span className="chip-value">{landmark.builtBy}</span>
                  </div>
                </div>
              )}

              {landmark.architecturalStyle && (
                <div className="dossier-chip">
                  <div className="chip-icon-box">
                    <Award size={15} />
                  </div>
                  <div className="chip-info">
                    <span className="chip-label">ARCHITECTURAL STYLE</span>
                    <span className="chip-value">{landmark.architecturalStyle}</span>
                  </div>
                </div>
              )}

              {landmark.significance && (
                <div className="dossier-chip">
                  <div className="chip-icon-box">
                    <ShieldCheck size={15} />
                  </div>
                  <div className="chip-info">
                    <span className="chip-label">SIGNIFICANCE</span>
                    <span className="chip-value">{landmark.significance}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Description & Historical Lore */}
            <div className="dossier-narrative-box">
              <h4>Historical Narrative & Architectural Genius</h4>
              <p className="dossier-description">{landmark.description}</p>
            </div>

            {/* Geographic Coordinates & District badge */}
            <div className="dossier-geo-badge">
              <span className="geo-dot" />
              <span>
                Coordinates: {landmark.lat != null ? Number(landmark.lat).toFixed(4) : "—"}°N,{" "}
                {landmark.lon != null ? Number(landmark.lon).toFixed(4) : "—"}°E • District: {landmark.district}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandmarkGalleryModal
