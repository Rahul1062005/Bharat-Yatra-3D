import { useState, useEffect, useRef } from "react"
import {
  X,
  Sparkles,
  Send,
  Volume2,
  VolumeX,
  Compass,
  BookOpen,
  Utensils,
  Landmark,
  Palette,
} from "lucide-react"
import type { StateData } from "../../types/state"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
import "./HeritageCompanionModal.css"

interface Message {
  id: string
  sender: "ai" | "user"
  text: string
  timestamp: string
}

interface HeritageCompanionModalProps {
  isOpen: boolean
  onClose: () => void
  stateData: StateData
  currentDistrict?: string
}

export default function HeritageCompanionModal({
  isOpen,
  onClose,
  stateData,
  currentDistrict,
}: HeritageCompanionModalProps) {
  useBodyScrollLock(isOpen)

  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState("")
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isVoiceMuted, setIsVoiceMuted] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Initialize companion with context when opened
  useEffect(() => {
    if (isOpen) {
      const activeDistrict = currentDistrict || stateData.capital || "the state"
      const welcomeMessage: Message = {
        id: "welcome-1",
        sender: "ai",
        text: `Namaskar, traveler! I am your Bharat Heritage AI Companion. I have walked the sacred paths of ${stateData.name} (${stateData.hindiName || ""}) across millennia. Currently, you are traversing ${activeDistrict}. Ask me about untold historical lore, traditional cuisine, sacred architecture, or master artisans!`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([welcomeMessage])
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel()
      }
      setIsSpeaking(false)
    }
  }, [isOpen, stateData, currentDistrict])

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const speakText = (text: string) => {
    if (isVoiceMuted || typeof window === "undefined" || !("speechSynthesis" in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.pitch = 0.98

    const voices = window.speechSynthesis.getVoices()
    const indianVoice = voices.find((v) => /en-in|indian/i.test(v.name || v.lang))
    if (indianVoice) utterance.voice = indianVoice

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  const generateAIResponse = (query: string): string => {
    const q = query.toLowerCase()
    const activeDistrict = currentDistrict || stateData.capital || "this region"
    const landmarkNames = (stateData.landmarks || stateData.monuments || []).map((l: any) => l.name).join(", ")
    const cuisineNames = (stateData.cuisines || []).map((c: any) => c.name).join(", ")
    const traditionNames = (stateData.traditions || []).map((t: any) => t.name || t.title).join(", ")

    if (q.includes("food") || q.includes("cuisine") || q.includes("dish") || q.includes("eat") || q.includes("taste")) {
      return `In ${stateData.name}, culinary heritage is an unbroken sacred art form. Celebrated traditional dishes include ${cuisineNames || "local heirloom recipes"}. When in ${activeDistrict}, savor dishes slow-cooked with indigenous cold-pressed oils, earthen pots, and age-old spice proportions passed down through generations.`
    }

    if (q.includes("history") || q.includes("empire") || q.includes("ancient") || q.includes("lore") || q.includes("origin")) {
      return `The historical bedrock of ${stateData.name} shaped the soul of Bharat. From legendary dynasties that ruled these plains to revolutionary centers of enlightenment, each stone in ${activeDistrict} tells a story of sovereignty, spiritual awakening, and civilizational resilience.`
    }

    if (q.includes("monument") || q.includes("temple") || q.includes("architecture") || q.includes("places") || q.includes("visit")) {
      return `Key monumental marvels in ${stateData.name} include ${landmarkNames || "ancient temples and fortresses"}. Notice the intricate stone carvings, vaastu geometry, and acoustic sanctuaries designed centuries ahead of their time.`
    }

    if (q.includes("art") || q.includes("craft") || q.includes("painting") || q.includes("dance") || q.includes("culture")) {
      return `The artistic genius of ${stateData.name} shines through traditions like ${traditionNames || "traditional folk arts"}. Master artisans use natural mineral pigments, sacred vegetable dyes, and handlooms that reflect the flora, fauna, and cosmic mythology of the land.`
    }

    return `Exploring ${stateData.name} reveals the timeless essence of 'Ek Bharat, Shreshtha Bharat'. In ${activeDistrict}, every alley and riverbank carries echoes of philosophy, valor, and artistic devotion. Would you like to delve deeper into its sacred architecture, authentic cuisine, or folklore?`
  }

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText.trim()
    if (!query) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMsg])
    setInputText("")

    setTimeout(() => {
      const responseText = generateAIResponse(query)
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiMsg])
      speakText(responseText)
    }, 450)
  }

  const promptChips = [
    { label: "Ancient Lore & History", icon: BookOpen, query: `What is the ancient history and untold lore of ${stateData.name}?` },
    { label: "Authentic Cuisines", icon: Utensils, query: `What traditional culinary delicacies must I taste in ${stateData.name}?` },
    { label: "Architecture Marvels", icon: Landmark, query: `Tell me about the sacred architecture and monuments in ${stateData.name}.` },
    { label: "Traditional Folk Arts", icon: Palette, query: `What traditional folk arts and paintings define ${stateData.name}?` },
  ]

  return (
    <div
      className="heritage-ai-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="heritage-ai-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Bharat Heritage AI Companion"
      >
        {/* Header */}
        <div className="heritage-ai-modal-header">
          <div className="heritage-ai-header-left">
            <div className="heritage-ai-kicker">
              <Sparkles size={13} className="sparkle-gold" />
              <span>BHARAT HERITAGE AI COMPANION</span>
            </div>
            <h3 className="heritage-ai-title">
              Guidance for {stateData.name}{" "}
              <span className="heritage-ai-district-badge">
                <Compass size={11} /> {currentDistrict || stateData.capital}
              </span>
            </h3>
          </div>

          <div className="heritage-ai-header-actions">
            <button
              type="button"
              className={`ai-voice-toggle ${isVoiceMuted ? "muted" : "active"}`}
              onClick={() => {
                if (isSpeaking) {
                  window.speechSynthesis.cancel()
                  setIsSpeaking(false)
                }
                setIsVoiceMuted(!isVoiceMuted)
              }}
              title={isVoiceMuted ? "Enable Voice Readout" : "Mute Voice Readout"}
            >
              {isVoiceMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              <span>{isVoiceMuted ? "Voice Muted" : isSpeaking ? "Speaking..." : "Voice On"}</span>
            </button>

            <button
              type="button"
              className="heritage-ai-close-btn"
              onClick={onClose}
              title="Close AI Companion"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Suggestion Prompt Chips */}
        <div className="heritage-ai-chips-bar">
          {promptChips.map((chip, idx) => {
            const Icon = chip.icon
            return (
              <button
                key={idx}
                type="button"
                className="heritage-ai-chip"
                onClick={() => handleSendMessage(chip.query)}
              >
                <Icon size={12} className="chip-icon" />
                <span>{chip.label}</span>
              </button>
            )
          })}
        </div>

        {/* Chat Transcript Area */}
        <div className="heritage-ai-chat-area">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`heritage-ai-chat-bubble-row ${msg.sender === "ai" ? "row-ai" : "row-user"}`}
            >
              {msg.sender === "ai" && (
                <div className="ai-avatar-badge" title="Bharat Heritage AI Guide">
                  🕉️
                </div>
              )}
              <div className={`heritage-ai-bubble ${msg.sender === "ai" ? "bubble-ai" : "bubble-user"}`}>
                <p className="bubble-text">{msg.text}</p>
                <span className="bubble-timestamp">{msg.timestamp}</span>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input Bar */}
        <form
          className="heritage-ai-input-bar"
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
        >
          <input
            type="text"
            className="heritage-ai-text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Ask about ${stateData.name}'s history, cuisines, or sacred monuments...`}
          />
          <button
            type="submit"
            className="heritage-ai-send-btn"
            disabled={!inputText.trim()}
            title="Send inquiry"
          >
            <Send size={15} />
            <span>Ask</span>
          </button>
        </form>
      </div>
    </div>
  )
}
