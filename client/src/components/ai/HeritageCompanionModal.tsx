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
  Globe,
  Flame,
} from "lucide-react"
import type { StateData } from "../../types/state"
import { statesRegistry } from "../../data/states"
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
  stateData?: StateData
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

  const isNationalMode = !stateData

  // Initialize companion with context when opened
  useEffect(() => {
    if (isOpen) {
      if (stateData) {
        const activeDistrict = currentDistrict || stateData.capital || "the state"
        const welcomeMessage: Message = {
          id: "welcome-1",
          sender: "ai",
          text: `Namaskar, traveler! I am your Bharat Heritage AI Companion. I have walked the sacred paths of ${stateData.name} (${stateData.hindiName || ""}) across millennia. Currently, you are traversing ${activeDistrict}. Ask me about untold historical lore, traditional cuisine, sacred architecture, or master artisans!`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages([welcomeMessage])
      } else {
        const nationalWelcome: Message = {
          id: "welcome-national",
          sender: "ai",
          text: `Namaskar, explorer! I am your National Bharat Heritage AI Companion. Across 5,000 years of living antiquity, 36 States & Union Territories, and thousands of cultural realms, I am here to guide your odyssey through India. Ask me about India's sacred monuments, ancient civilizations, why India is called Bharat, unity in diversity, regional cuisines, or any specific state you wish to explore!`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages([nationalWelcome])
      }
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

    // 1. If in State mode (focused on single state)
    if (stateData) {
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

    // 2. National / All-India mode (from 3D Explore map)
    // Check if user is asking about a specific state from national view
    for (const [key, bundle] of Object.entries(statesRegistry)) {
      const sName = bundle.data.name.toLowerCase()
      if (q.includes(sName) || (key.length > 3 && q.includes(key))) {
        const topMonuments = (bundle.data.monuments || bundle.data.landmarks || []).slice(0, 3).map((m: any) => m.name).join(", ")
        const topCuisine = (bundle.data.cuisines || []).slice(0, 3).map((c: any) => c.name).join(", ")
        return `${bundle.data.name} (${bundle.data.hindiName || ""}) is renowned as "${bundle.data.tagline}". Key architectural highlights include ${topMonuments || "historic forts and ancient shrines"}, while famous culinary treasures include ${topCuisine || "heirloom specialties"}. You can dive into its 3D state map right from the Indian map for full district exploration!`
      }
    }

    // "Why is India called Bharat?"
    if (q.includes("bharat") || q.includes("origin") || q.includes("name") || q.includes("why india")) {
      return `The name 'Bharat' (भारत) has deep civilizational roots tracing to the Rigveda. In Sanskrit, 'Bha' (भा) signifies the light of illumination and cosmic truth, while 'Rata' (रत) signifies 'devoted' or 'immersed'. Thus, Bharat literally means 'The Land Devoted to the Light of Knowledge'. It also commemorates the legendary ancient Emperor Bharata, ancestor of the Pandavas and Kauravas, renowned for righteousness and universal sovereignty.`
    }

    // Architecture & Monuments
    if (q.includes("monument") || q.includes("architecture") || q.includes("temple") || q.includes("wonder") || q.includes("places")) {
      return `India's architectural heritage spans rock-cut caves, Dravidian soaring gopurams, Nagara spires, and Mughal marble inlay. Iconic marvels include the monolithic Kailasa Temple at Ellora (carved top-down from a single cliff), the Sun Temple at Konark, Brihadisvara at Thanjavur, the Taj Mahal, Hampi's stone chariot, the Golden Temple, and Mahabodhi Temple at Bodh Gaya.`
    }

    // Unity in Diversity & Languages
    if (q.includes("unity") || q.includes("diversity") || q.includes("language") || q.includes("culture") || q.includes("religion")) {
      return `India is the world's most vibrant living example of 'Unity in Diversity' (अनेकता में एकता • एक भारत श्रेष्ठ भारत). With 22 officially recognized languages, 1,000+ spoken dialects, 9 major spiritual philosophies, and 36 distinct States and UTs, Bharat is unified by common civilizational ethos—respect for nature, 'Atithi Devo Bhava' (the guest is divine), and seasonal festivals celebrating cosmic harmony.`
    }

    // Cuisine across India
    if (q.includes("food") || q.includes("cuisine") || q.includes("taste") || q.includes("eat") || q.includes("spice")) {
      return `Indian culinary wisdom is rooted in Ayurveda's 6 Rasas (Sweet, Sour, Salty, Pungent, Bitter, and Astringent). Each region has developed indigenous gastronomic masterpieces: from Kashmiri Wazwan and Punjabi Makki-Sarson in the North, to Gujarati Thalis and Rajasthani Dal Baati in the West, Bihari Litti Chokha and Bengali Sandesh in the East, down to aromatic Chettinad curries, dosas, and Kerala Sadhya in the South.`
    }

    // Ancient History, Golden Age & Universities
    if (q.includes("history") || q.includes("ancient") || q.includes("civilization") || q.includes("university") || q.includes("golden age") || q.includes("science")) {
      return `Ancient Bharat led humanity in urban planning (Indus-Saraswati Harappan cities with advanced sanitation), mathematics (invention of Zero 'Shunya', decimal system, trigonometry), metallurgy (Wootz crucible steel), surgery (Sushruta Samhita), and world universities like Nalanda, Takshashila, and Vikramashila, which attracted scholars from across Asia millennia ago.`
    }

    // Dance, Arts and Music
    if (q.includes("dance") || q.includes("music") || q.includes("art") || q.includes("tradition")) {
      return `Bharat cherishes 8 classical dance traditions codified in Bharata Muni's Natya Shastra: Bharatanatyam, Kathak, Kathakali, Odissi, Kuchipudi, Manipuri, Mohiniyattam, and Sattriya. Combined with the microtonal beauty of Hindustani and Carnatic classical music, Indian arts are viewed as pathways of spiritual sadhana.`
    }

    // General default national query
    return `India is a living civilizational matrix spanning 36 States & Union Territories, each with its own language, monumental architecture, and distinct cultural soul. Ask me about why India is called Bharat, legendary monuments like Kailasa or Konark, classical cuisines, or inquire about any specific state like Bihar, Rajasthan, Kerala, or Maharashtra!`
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
    }, 400)
  }

  const promptChips = stateData
    ? [
        { label: "Ancient Lore & History", icon: BookOpen, query: `What is the ancient history and untold lore of ${stateData.name}?` },
        { label: "Authentic Cuisines", icon: Utensils, query: `What traditional culinary delicacies must I taste in ${stateData.name}?` },
        { label: "Architecture Marvels", icon: Landmark, query: `Tell me about the sacred architecture and monuments in ${stateData.name}.` },
        { label: "Traditional Folk Arts", icon: Palette, query: `What traditional folk arts and paintings define ${stateData.name}?` },
      ]
    : [
        { label: "Why called Bharat?", icon: Flame, query: "Why is India called Bharat and what is the meaning of the name?" },
        { label: "Sacred Architecture", icon: Landmark, query: "What are India's greatest sacred architectural marvels?" },
        { label: "Unity in Diversity", icon: Globe, query: "How does Unity in Diversity reflect in India's culture and languages?" },
        { label: "Ancient Universities & Science", icon: BookOpen, query: "Tell me about ancient Indian universities like Nalanda and scientific achievements." },
        { label: "Iconic Cuisines of India", icon: Utensils, query: "What defines the culinary traditions across different regions of India?" },
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
              <span>{isNationalMode ? "NATIONAL BHARAT HERITAGE AI" : "BHARAT HERITAGE AI COMPANION"}</span>
            </div>
            <h3 className="heritage-ai-title">
              {stateData ? `Guidance for ${stateData.name}` : "Wisdom of Incredible India"}
              <span className="heritage-ai-district-badge">
                <Compass size={11} /> {stateData ? (currentDistrict || stateData.capital) : "36 States & UTs"}
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

        {/* Input Composer */}
        <form
          className="heritage-ai-input-form"
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
        >
          <input
            type="text"
            className="heritage-ai-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              stateData
                ? `Ask about ${stateData.name}'s history, monuments, foods, crafts...`
                : "Ask about India's history, monuments, why called Bharat, any state, foods..."
            }
          />
          <button
            type="submit"
            className="heritage-ai-send-btn"
            disabled={!inputText.trim()}
            title="Send query to AI Companion"
            aria-label="Send"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  )
}
