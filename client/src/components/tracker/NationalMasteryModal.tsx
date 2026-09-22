import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  X,
  Trophy,
  Award,
  CheckCircle2,
  Circle,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Compass,
} from "lucide-react"
import { getMasteryStats } from "../../utils/masteryStorage"
import { statesRegistry } from "../../data/states"
import "./NationalMasteryModal.css"

interface NationalMasteryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NationalMasteryModal({ isOpen, onClose }: NationalMasteryModalProps) {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<"all" | "mastered" | "pending">("all")

  if (!isOpen) return null

  const stats = getMasteryStats()

  // Deduplicate the 36 states and UTs from statesRegistry
  const allStates = Object.entries(statesRegistry).reduce((acc, [id, bundle]) => {
    if (!acc.some((s) => s.name === bundle.data.name)) {
      acc.push({
        id,
        name: bundle.data.name,
      })
    }
    return acc
  }, [] as { id: string; name: string }[])

  // Sort alphabetically
  allStates.sort((a, b) => a.name.localeCompare(b.name))

  // Filter states
  const filteredStates = allStates.filter((st) => {
    const record = stats.stateScores[st.id.toLowerCase()]
    const isMastered = record?.mastered
    if (filter === "mastered") return isMastered
    if (filter === "pending") return !isMastered
    return true
  })

  const handleStateClick = (stateId: string) => {
    onClose()
    navigate(`/${stateId}`)
  }

  return (
    <div className="mastery-modal-overlay" onClick={onClose}>
      <div
        className="mastery-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="mastery-modal-header">
          <div className="mastery-modal-header-info">
            <div className="mastery-tag">
              <Compass size={14} />
              <span>BHARAT WISDOM REGISTRY</span>
            </div>
            <h2 className="mastery-title">National Cultural Mastery</h2>
            <p className="mastery-subtitle">
              How well do you know the heritage, living traditions, and wonders of India?
            </p>
          </div>
          <button
            type="button"
            className="mastery-close-btn"
            onClick={onClose}
            aria-label="Close Mastery Tracker"
          >
            <X size={20} />
          </button>
        </div>

        {/* Rank & Progress Overview Card */}
        <div className="mastery-rank-card">
          <div className="mastery-rank-left">
            <div className="mastery-rank-avatar">
              <Trophy size={32} />
            </div>
            <div className="mastery-rank-details">
              <span className="rank-label">CURRENT EXPLORER RANK</span>
              <h3 className="rank-title">{stats.rankTitle}</h3>
              <p className="rank-next-hint">
                {stats.masteredCount >= 36
                  ? "Outstanding achievement! You have mastered all of India."
                  : `${stats.nextRankThreshold - stats.masteredCount} more state${
                      stats.nextRankThreshold - stats.masteredCount === 1 ? "" : "s"
                    } needed for next rank promotion.`}
              </p>
            </div>
          </div>

          <div className="mastery-gauge-right">
            <div className="gauge-number-wrap">
              <span className="gauge-count">{stats.masteredCount}</span>
              <span className="gauge-slash">/</span>
              <span className="gauge-total">{stats.totalStates}</span>
            </div>
            <span className="gauge-desc">States Mastered</span>
            <div className="mastery-progress-bar-bg">
              <div
                className="mastery-progress-bar-fill"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
            <span className="mastery-percent-text">{stats.percentage}% Complete</span>
          </div>
        </div>

        {/* Explorer Badges Showcase */}
        <div className="mastery-badges-section">
          <h4 className="badges-heading">
            <Sparkles size={16} /> Explorer Achievement Badges
          </h4>
          <div className="badges-grid">
            {stats.badges.map((badge) => (
              <div
                key={badge.id}
                className={`mastery-badge-item ${badge.unlocked ? "unlocked" : "locked"}`}
                title={badge.description}
              >
                <div className="badge-icon-box">{badge.icon}</div>
                <div className="badge-info">
                  <div className="badge-title-row">
                    <span className="badge-name">{badge.title}</span>
                    {badge.unlocked && <ShieldCheck size={14} className="badge-check-icon" />}
                  </div>
                  <span className="badge-desc-text">{badge.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 36 States Grid Section */}
        <div className="mastery-states-section">
          <div className="mastery-filter-bar">
            <h4 className="states-heading">
              <Award size={16} /> 36 States & Union Territories
            </h4>
            <div className="filter-buttons-group">
              <button
                type="button"
                className={`filter-btn ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All ({allStates.length})
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === "mastered" ? "active" : ""}`}
                onClick={() => setFilter("mastered")}
              >
                Mastered ({stats.masteredCount})
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === "pending" ? "active" : ""}`}
                onClick={() => setFilter("pending")}
              >
                Pending ({allStates.length - stats.masteredCount})
              </button>
            </div>
          </div>

          <div className="mastery-states-grid">
            {filteredStates.map((st) => {
              const record = stats.stateScores[st.id.toLowerCase()]
              const isMastered = record?.mastered

              return (
                <div
                  key={st.id}
                  className={`mastery-state-pill ${isMastered ? "state-mastered" : "state-pending"}`}
                  onClick={() => handleStateClick(st.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="state-pill-left">
                    {isMastered ? (
                      <CheckCircle2 size={16} className="state-status-icon mastered" />
                    ) : (
                      <Circle size={16} className="state-status-icon pending" />
                    )}
                    <span className="state-name-label">{st.name}</span>
                  </div>
                  <div className="state-pill-right">
                    {isMastered ? (
                      <span className="state-score-tag">
                        {record.score}/{record.total}
                      </span>
                    ) : (
                      <span className="take-quiz-tag">
                        Take Quiz <ExternalLink size={12} />
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
