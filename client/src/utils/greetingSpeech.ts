import type { StateGreeting } from "../data/greetings"

let currentUtterance: SpeechSynthesisUtterance | null = null

/**
 * Play authentic speech pronunciation for a given state greeting using Web Speech Synthesis.
 */
export function playGreetingAudio(
  greeting: StateGreeting,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (err: unknown) => void
): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported on this browser/platform.")
    onError?.("Speech synthesis not supported")
    return false
  }

  try {
    // Stop any ongoing speech
    window.speechSynthesis.cancel()

    // Create utterance with greeting phrase or native transliteration
    const textToSpeak = greeting.speechPhrase || greeting.native.split("/")[0].trim() || greeting.transliteration
    const utterance = new SpeechSynthesisUtterance(textToSpeak)

    // Set voice & language
    utterance.lang = greeting.speechLang || "hi-IN"
    utterance.rate = 0.88 // Slightly slower for crisp native clarity
    utterance.pitch = 1.05

    // Detect best matching voice from available system voices
    const voices = window.speechSynthesis.getVoices()
    if (voices && voices.length > 0) {
      // 1. Try exact language match (e.g. ta-IN, hi-IN, mr-IN)
      const exactVoice = voices.find(
        (v) => v.lang.toLowerCase() === utterance.lang.toLowerCase()
      )
      // 2. Try prefix match (e.g. hi, ta, te)
      const langPrefix = utterance.lang.split("-")[0].toLowerCase()
      const prefixVoice = voices.find((v) =>
        v.lang.toLowerCase().startsWith(langPrefix)
      )
      // 3. Try any Indian voice (IN)
      const indicVoice = voices.find(
        (v) =>
          v.lang.toLowerCase().includes("-in") ||
          v.name.toLowerCase().includes("india") ||
          v.name.toLowerCase().includes("hindi")
      )

      if (exactVoice) {
        utterance.voice = exactVoice
      } else if (prefixVoice) {
        utterance.voice = prefixVoice
      } else if (indicVoice) {
        utterance.voice = indicVoice
      }
    }

    utterance.onstart = () => {
      onStart?.()
    }

    utterance.onend = () => {
      currentUtterance = null
      onEnd?.()
    }

    utterance.onerror = (e) => {
      currentUtterance = null
      onError?.(e)
    }

    currentUtterance = utterance
    window.speechSynthesis.speak(utterance)
    return true
  } catch (err) {
    console.error("Error playing greeting audio:", err)
    onError?.(err)
    return false
  }
}

/**
 * Cancel any ongoing greeting speech
 */
export function stopGreetingAudio() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel()
    currentUtterance = null
  }
}

/**
 * Check if greeting audio is actively speaking
 */
export function isSpeakingAudio(): boolean {
  return currentUtterance !== null
}
