const STORAGE_KEY = "bharat_yatra_mastery_tracker_v1"

export interface StateScoreRecord {
  score: number
  total: number
  mastered: boolean
  timestamp: number
}

export interface MasteryStorageData {
  stateScores: Record<string, StateScoreRecord>
}

export interface MasteryBadge {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
}

export interface MasteryStats {
  masteredCount: number
  totalStates: number
  percentage: number
  rankTitle: string
  nextRankThreshold: number
  badges: MasteryBadge[]
  stateScores: Record<string, StateScoreRecord>
}

function getStoredData(): MasteryStorageData {
  if (typeof window === "undefined") return { stateScores: {} }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { stateScores: {} }
    return JSON.parse(raw) as MasteryStorageData
  } catch (e) {
    console.error("Failed to parse mastery storage:", e)
    return { stateScores: {} }
  }
}

function persistData(data: MasteryStorageData) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.error("Failed to save mastery storage:", e)
  }
}

export function saveStateScore(stateId: string, score: number, total: number = 3): boolean {
  const clean = stateId.toLowerCase().trim()
  const data = getStoredData()
  const mastered = score >= Math.ceil(total * 0.66) // 2 out of 3 is mastered

  const previousRecord = data.stateScores[clean]
  const isNewlyMastered = mastered && (!previousRecord || !previousRecord.mastered)

  data.stateScores[clean] = {
    score: Math.max(previousRecord?.score || 0, score),
    total,
    mastered: Boolean(previousRecord?.mastered || mastered),
    timestamp: Date.now(),
  }

  persistData(data)
  return isNewlyMastered
}

export function getStateScore(stateId: string): StateScoreRecord | undefined {
  const clean = stateId.toLowerCase().trim()
  const data = getStoredData()
  return data.stateScores[clean]
}

export function getMasteryStats(): MasteryStats {
  const data = getStoredData()
  const scores = data.stateScores
  const masteredCount = Object.values(scores).filter((s) => s.mastered).length
  const totalStates = 36
  const percentage = Math.min(100, Math.round((masteredCount / totalStates) * 100))

  let rankTitle = "Curious Explorer 🎒"
  let nextRankThreshold = 1

  if (masteredCount >= 36) {
    rankTitle = "Bharat Ratna Scholar (Complete Mastery!) 🏆🇮🇳"
    nextRankThreshold = 36
  } else if (masteredCount >= 25) {
    rankTitle = "Desh Visharad (National Scholar) 🌟"
    nextRankThreshold = 36
  } else if (masteredCount >= 13) {
    rankTitle = "Cultural Connoisseur 🎖️"
    nextRankThreshold = 25
  } else if (masteredCount >= 6) {
    rankTitle = "Heritage Pilgrim 📜"
    nextRankThreshold = 13
  } else if (masteredCount >= 1) {
    rankTitle = "Novice Wanderer 🧭"
    nextRankThreshold = 6
  }

  const badges: MasteryBadge[] = [
    {
      id: "first-state",
      title: "First Footstep",
      description: "Master your very first Indian State quiz.",
      icon: "🌱",
      unlocked: masteredCount >= 1,
    },
    {
      id: "panch-tatva",
      title: "Panch Tatva",
      description: "Master quizzes for 5 different States or UTs.",
      icon: "🔥",
      unlocked: masteredCount >= 5,
    },
    {
      id: "dasa-avatar",
      title: "Decade of Knowledge",
      description: "Master quizzes for 10 States & UTs.",
      icon: "⚡",
      unlocked: masteredCount >= 10,
    },
    {
      id: "half-bharat",
      title: "Halfway Across Bharat",
      description: "Master 18 States (50% of the country).",
      icon: "🗺️",
      unlocked: masteredCount >= 18,
    },
    {
      id: "supreme-master",
      title: "Akhand Bharat Scholar",
      description: "Master all 36 States & Union Territories of India.",
      icon: "👑",
      unlocked: masteredCount >= 36,
    },
  ]

  return {
    masteredCount,
    totalStates,
    percentage,
    rankTitle,
    nextRankThreshold,
    badges,
    stateScores: scores,
  }
}
