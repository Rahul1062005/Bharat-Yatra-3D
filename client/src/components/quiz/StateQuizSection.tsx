import { useState, useEffect } from "react"
import {
  Sparkles,
  Trophy,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
} from "lucide-react"
import { getStateQuizQuestions, type StateQuizItem } from "../../data/stateQuizzes"
import { saveStateScore, getStateScore } from "../../utils/masteryStorage"
import { playCorrectSound, playWrongSound, playVictorySound } from "../../utils/soundEffects"
import "./StateQuizSection.css"

interface StateQuizSectionProps {
  stateId: string
  stateName: string
  onOpenMasteryTracker?: () => void
}

export default function StateQuizSection({
  stateId,
  stateName,
  onOpenMasteryTracker,
}: StateQuizSectionProps) {
  const [questions, setQuestions] = useState<StateQuizItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [existingRecord, setExistingRecord] = useState(getStateScore(stateId))

  // Load questions when state changes
  useEffect(() => {
    const qList = getStateQuizQuestions(stateId, stateName)
    setQuestions(qList)
    setCurrentIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setIsComplete(false)
    setExistingRecord(getStateScore(stateId))
  }, [stateId, stateName])

  const currentQ = questions[currentIndex]

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQ) return

    setSelectedOption(idx)
    setIsAnswered(true)

    const isCorrect = idx === currentQ.correctIndex
    if (isCorrect) {
      playCorrectSound()
      setScore((prev) => prev + 1)
    } else {
      playWrongSound()
    }
  }

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      // Complete quiz
      const finalScore = score + (selectedOption === currentQ.correctIndex ? 0 : 0)
      saveStateScore(stateId, finalScore, questions.length)
      setExistingRecord(getStateScore(stateId))
      setIsComplete(true)
      playVictorySound()
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setIsComplete(false)
  }

  return (
    <section className="state-content-section state-quiz-section" id="quiz-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-tag">
            <Trophy size={14} />
            <span>STATE CULTURAL CHALLENGE</span>
          </div>
          <h2 className="section-heading">Mastered {stateName}?</h2>
          <p className="section-subtext">
            Test your understanding of {stateName}'s ancient history, culinary roots, and living traditions.
          </p>
        </div>

        {/* Existing Mastery Badge if already completed */}
        {existingRecord?.mastered && !isComplete && (
          <div className="state-mastered-banner">
            <Award size={18} className="mastered-award-icon" />
            <span>You have mastered {stateName} ({existingRecord.score}/{existingRecord.total} Correct)! Retake below to refresh your knowledge.</span>
          </div>
        )}

        {/* Quiz Container Card */}
        <div className="state-quiz-card">
          {!isComplete && currentQ ? (
            <div className="quiz-in-progress">
              {/* Question Tracker Row */}
              <div className="state-quiz-progress-row">
                <span className="quiz-question-number">
                  Question <strong>{currentIndex + 1}</strong> of {questions.length}
                </span>
                <span className="quiz-score-indicator">
                  Current Score: <strong>{score}</strong>
                </span>
              </div>

              {/* Question Text */}
              <h3 className="state-quiz-question-text">{currentQ.question}</h3>

              {/* 4 Options */}
              <div className="state-quiz-options-list">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx
                  const isCorrect = idx === currentQ.correctIndex

                  let btnClass = ""
                  if (isAnswered) {
                    if (isCorrect) btnClass = "correct-choice"
                    else if (isSelected) btnClass = "wrong-choice"
                    else btnClass = "dimmed-choice"
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`state-quiz-option-btn ${btnClass}`}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                    >
                      <span className="option-label">{String.fromCharCode(65 + idx)}.</span>
                      <span className="option-text">{opt}</span>
                      {isAnswered && isCorrect && (
                        <CheckCircle2 size={16} className="choice-icon correct" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle size={16} className="choice-icon wrong" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Post-Answer Explanation & Next Button */}
              {isAnswered && (
                <div className="state-quiz-feedback-box">
                  <p className="state-quiz-explanation-text">
                    <strong>Did you know?</strong> {currentQ.explanation}
                  </p>
                  <button
                    type="button"
                    className="state-quiz-next-btn"
                    onClick={handleNext}
                  >
                    <span>
                      {currentIndex + 1 < questions.length ? "Next Question" : "See Final Score"}
                    </span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed Card */
            <div className="state-quiz-complete-card">
              <div className="complete-trophy-ring">
                <Trophy size={42} className="complete-trophy-icon" />
              </div>
              <h3 className="complete-heading">
                {score >= 2 ? `Congratulations! You Mastered ${stateName}!` : `Good Effort in ${stateName}!`}
              </h3>
              <p className="complete-score-summary">
                You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>.
                {score >= 2
                  ? ` This state is now marked as Mastered on your National Explorer Tracker!`
                  : ` Review the cultural cards above and retake the quiz to earn your mastery star.`}
              </p>

              <div className="complete-actions-row">
                <button
                  type="button"
                  className="restart-state-quiz-btn"
                  onClick={handleRestart}
                >
                  <RotateCcw size={14} />
                  <span>Try Again</span>
                </button>

                {onOpenMasteryTracker && (
                  <button
                    type="button"
                    className="open-mastery-tracker-btn"
                    onClick={onOpenMasteryTracker}
                  >
                    <Sparkles size={14} />
                    <span>View National Mastery Tracker</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
