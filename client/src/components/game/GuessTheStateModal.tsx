import { useState, useEffect } from "react"
import {
  X,
  Sparkles,
  Trophy,
  Flame,
  Volume2,
  VolumeX,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  MapPin,
  Compass,
} from "lucide-react"
import { generateQuizRound, type QuizQuestion } from "../../data/quizData"
import {
  playCorrectSound,
  playWrongSound,
  playHintSound,
  playVictorySound,
  getSoundMuted,
  setSoundMuted,
} from "../../utils/soundEffects"
import "./GuessTheStateModal.css"

interface GuessTheStateModalProps {
  isOpen: boolean
  onClose: () => void
  onExploreState: (stateSlug: string) => void
}

export default function GuessTheStateModal({
  isOpen,
  onClose,
  onExploreState,
}: GuessTheStateModalProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [revealedRegionHint, setRevealedRegionHint] = useState(false)
  const [revealedCapitalHint, setRevealedCapitalHint] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isMuted, setIsMutedState] = useState(getSoundMuted())

  // Initialize or reset game round when modal opens
  useEffect(() => {
    if (isOpen) {
      startNewGame()
    }
  }, [isOpen])

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const startNewGame = () => {
    const newQuestions = generateQuizRound(5)
    setQuestions(newQuestions)
    setCurrentIndex(0)
    setSelectedStateId(null)
    setIsAnswered(false)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setRevealedRegionHint(false)
    setRevealedCapitalHint(false)
    setIsGameOver(false)
  }

  const currentQuestion = questions[currentIndex]

  const handleSelectOption = (stateId: string) => {
    if (isAnswered || !currentQuestion) return

    setSelectedStateId(stateId)
    setIsAnswered(true)

    const isCorrect = stateId === currentQuestion.correctStateId

    if (isCorrect) {
      playCorrectSound()
      const newStreak = streak + 1
      setStreak(newStreak)
      setMaxStreak((prev) => Math.max(prev, newStreak))

      // 100 base pts + 25 pts streak bonus (minus small hint penalty if used)
      let pts = 100 + (newStreak - 1) * 25
      if (revealedRegionHint) pts = Math.max(50, pts - 15)
      if (revealedCapitalHint) pts = Math.max(40, pts - 25)

      setScore((prev) => prev + pts)
    } else {
      playWrongSound()
      setStreak(0)
    }
  }

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedStateId(null)
      setIsAnswered(false)
      setRevealedRegionHint(false)
      setRevealedCapitalHint(false)
    } else {
      setIsGameOver(true)
      playVictorySound()
    }
  }

  const handleToggleMute = () => {
    const nextMuted = !isMuted
    setIsMutedState(nextMuted)
    setSoundMuted(nextMuted)
  }

  const handleRevealRegionHint = () => {
    if (!revealedRegionHint) {
      playHintSound()
      setRevealedRegionHint(true)
    }
  }

  const handleRevealCapitalHint = () => {
    if (!revealedCapitalHint) {
      playHintSound()
      setRevealedCapitalHint(true)
    }
  }

  const handleDiveToState = (slug: string) => {
    onClose()
    onExploreState(slug)
  }

  if (!isOpen) return null

  // Victory Title based on score
  const getRankTitle = () => {
    const totalCorrect = Math.round(score / 100)
    if (totalCorrect >= 5 || score >= 500) return "Bharat Visharad (Supreme Explorer) 🏆"
    if (totalCorrect >= 4 || score >= 380) return "Culture Maestro 🎖️"
    if (totalCorrect >= 3 || score >= 250) return "Curious Traveler 🧭"
    return "Passionate Learner 🎒"
  }

  return (
    <div className="quiz-modal-backdrop" onClick={onClose}>
      <div
        className="quiz-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-modal-title"
      >
        {/* Top Header Bar */}
        <header className="quiz-header-bar">
          <div className="quiz-header-left">
            <div className="quiz-brand-pill">
              <Sparkles size={13} className="quiz-brand-sparkle" />
              <span>BHARAT YATRA QUIZ</span>
            </div>
            {!isGameOver && (
              <span className="quiz-round-indicator">
                Question <strong>{currentIndex + 1}</strong> of {questions.length}
              </span>
            )}
          </div>

          <div className="quiz-header-right">
            {!isGameOver && (
              <>
                <div className="quiz-score-badge" title="Total Score">
                  <Trophy size={13} className="quiz-trophy-icon" />
                  <span>{score}</span>
                </div>

                {streak > 1 && (
                  <div className="quiz-streak-badge" title="Consecutive correct streak!">
                    <Flame size={13} className="quiz-flame-icon" />
                    <span>{streak}x Streak</span>
                  </div>
                )}
              </>
            )}

            <button
              type="button"
              className="quiz-tool-btn"
              onClick={handleToggleMute}
              title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <button
              type="button"
              className="quiz-tool-btn close-btn"
              onClick={onClose}
              title="Close quiz"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* ================= QUIZ CONTENT ================= */}
        {!isGameOver && currentQuestion ? (
          <div className="quiz-body-container">
            {/* Question Card */}
            <div className="quiz-question-card">
              <div className="question-category-tag">
                <span>{currentQuestion.category.toUpperCase()}</span>
              </div>

              <h2 id="quiz-modal-title" className="quiz-prompt-text">
                {currentQuestion.prompt}
              </h2>

              {currentQuestion.clueImage && (
                <div className="quiz-clue-image-wrap">
                  <img
                    src={currentQuestion.clueImage}
                    alt="Quiz Clue"
                    className="quiz-clue-img"
                    onError={(e) => {
                      // Gracefully hide if missing
                      ;(e.target as HTMLElement).style.display = "none"
                    }}
                  />
                </div>
              )}
            </div>

            {/* Hints Section */}
            {!isAnswered && (
              <div className="quiz-hints-row">
                <div className="hints-label">
                  <HelpCircle size={13} />
                  <span>Need a clue?</span>
                </div>

                {!revealedRegionHint ? (
                  <button
                    type="button"
                    className="reveal-hint-btn"
                    onClick={handleRevealRegionHint}
                  >
                    Reveal Region
                  </button>
                ) : (
                  <span className="hint-revealed-text">
                    📍 {currentQuestion.regionHint}
                  </span>
                )}

                {!revealedCapitalHint ? (
                  <button
                    type="button"
                    className="reveal-hint-btn"
                    onClick={handleRevealCapitalHint}
                  >
                    Reveal Capital
                  </button>
                ) : (
                  <span className="hint-revealed-text">
                    🏛️ {currentQuestion.capitalHint}
                  </span>
                )}
              </div>
            )}

            {/* 4 Options Grid */}
            <div className="quiz-options-grid">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedStateId === opt.stateId
                const isCorrect = opt.stateId === currentQuestion.correctStateId

                let optionStateClass = ""
                if (isAnswered) {
                  if (isCorrect) optionStateClass = "correct-opt"
                  else if (isSelected) optionStateClass = "wrong-opt"
                  else optionStateClass = "dimmed-opt"
                }

                return (
                  <button
                    key={opt.stateId}
                    type="button"
                    className={`quiz-option-btn ${optionStateClass}`}
                    onClick={() => handleSelectOption(opt.stateId)}
                    disabled={isAnswered}
                  >
                    <span className="option-name">{opt.stateName}</span>
                    {isAnswered && isCorrect && (
                      <CheckCircle2 size={18} className="option-feedback-icon correct-icon" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle size={18} className="option-feedback-icon wrong-icon" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Post-Answer Feedback Banner */}
            {isAnswered && (
              <div className="quiz-feedback-banner">
                <div className="feedback-content">
                  <div className="feedback-title-row">
                    {selectedStateId === currentQuestion.correctStateId ? (
                      <span className="feedback-result correct">
                        <CheckCircle2 size={16} /> Correct!
                      </span>
                    ) : (
                      <span className="feedback-result wrong">
                        <XCircle size={16} /> Incorrect
                      </span>
                    )}
                    <span className="feedback-target-state">
                      Answer: <strong>{currentQuestion.correctStateName}</strong>
                    </span>
                  </div>

                  <p className="feedback-explanation">
                    {currentQuestion.explanation}
                  </p>
                </div>

                <div className="feedback-actions">
                  <button
                    type="button"
                    className="quiz-explore-state-btn"
                    onClick={() => handleDiveToState(currentQuestion.correctStateId)}
                    title={`Explore ${currentQuestion.correctStateName} in 3D`}
                  >
                    <Compass size={14} />
                    <span>Explore 3D</span>
                  </button>

                  <button
                    type="button"
                    className="quiz-next-question-btn"
                    onClick={handleNextQuestion}
                  >
                    <span>
                      {currentIndex + 1 < questions.length ? "Next Question" : "See Results"}
                    </span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ================= VICTORY / RESULTS SCREEN ================= */
          <div className="quiz-gameover-container">
            <div className="gameover-trophy-hero">
              <div className="trophy-sparkle-ring">
                <Trophy size={48} className="gameover-big-trophy" />
              </div>
            </div>

            <div className="gameover-titles">
              <span className="gameover-tag">CHALLENGE COMPLETE</span>
              <h2 className="gameover-rank-title">{getRankTitle()}</h2>
              <p className="gameover-rank-sub">
                You explored the rich heritage, culinary marvels, and geography of India!
              </p>
            </div>

            {/* Score Stats Summary */}
            <div className="gameover-stats-grid">
              <div className="gameover-stat-card">
                <span className="stat-label">Final Score</span>
                <span className="stat-value highlight">{score}</span>
              </div>
              <div className="gameover-stat-card">
                <span className="stat-label">Questions</span>
                <span className="stat-value">{questions.length} / {questions.length}</span>
              </div>
              <div className="gameover-stat-card">
                <span className="stat-label">Max Streak</span>
                <span className="stat-value">{maxStreak}x 🔥</span>
              </div>
            </div>

            {/* End Actions */}
            <div className="gameover-actions">
              <button
                type="button"
                className="play-again-btn"
                onClick={startNewGame}
              >
                <RotateCcw size={15} />
                <span>Play Again</span>
              </button>

              <button
                type="button"
                className="explore-india-btn"
                onClick={onClose}
              >
                <MapPin size={15} />
                <span>Return to 3D Map</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
