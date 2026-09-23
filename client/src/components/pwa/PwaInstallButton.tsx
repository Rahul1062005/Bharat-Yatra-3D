import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Download, Check, Smartphone, X } from "lucide-react"
import { useBodyScrollLock } from "../../utils/useBodyScrollLock"
import "./PwaInstallButton.css"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export default function PwaInstallButton({ className = "" }: { className?: string }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)

  useBodyScrollLock(showInfoModal)

  useEffect(() => {
    // Check if already in standalone mode (installed PWA)
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    ) {
      setIsInstalled(true)
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setIsInstalled(true)
      }
      setDeferredPrompt(null)
    } else {
      setShowInfoModal(true)
    }
  }

  if (isInstalled) {
    return (
      <span className={`pwa-installed-badge ${className}`} title="Bharat Yatra 3D is installed as an offline PWA app">
        <Check size={14} className="text-emerald" />
        <span>App Installed</span>
      </span>
    )
  }

  return (
    <>
      <button
        type="button"
        className={`pwa-install-btn ${className}`}
        onClick={handleInstallClick}
        title="Install Bharat Yatra 3D as a standalone Progressive Web App (PWA)"
        aria-label="Install Bharat Yatra App"
      >
        <span className="pwa-btn-icon">
          <Download size={14} />
        </span>
        <span className="pwa-btn-text">Install App</span>
      </button>

      {/* Instructional helper popup rendered via Portal to escape any navbar styling/transforms */}
      {showInfoModal && typeof document !== "undefined" && createPortal(
        <div className="pwa-modal-backdrop" onClick={() => setShowInfoModal(false)}>
          <div className="pwa-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="pwa-modal-close"
              onClick={() => setShowInfoModal(false)}
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="pwa-modal-icon-wrap">
              <Smartphone size={24} />
            </div>
            <h3 className="pwa-modal-title">Install Bharat Yatra 3D (PWA)</h3>
            <p className="pwa-modal-desc">
              Experience Bharat Yatra as a standalone desktop or mobile application with offline map caching and fast native performance!
            </p>
            <div className="pwa-instructions-list">
              <div className="pwa-instruction-step">
                <span className="step-badge">Desktop (Chrome / Edge)</span>
                <p>Click the <strong>Install</strong> icon (⤓) in the right side of your browser URL address bar.</p>
              </div>
              <div className="pwa-instruction-step">
                <span className="step-badge">Android Chrome</span>
                <p>Tap the <strong>⋮ (three dots)</strong> menu in the top right and select <strong>&quot;Install app&quot;</strong> or <strong>&quot;Add to Home screen&quot;</strong>.</p>
              </div>
              <div className="pwa-instruction-step">
                <span className="step-badge">iOS Safari (iPhone / iPad)</span>
                <p>Tap the <strong>Share</strong> button (box with up arrow) and select <strong>&quot;Add to Home Screen&quot;</strong>.</p>
              </div>
            </div>
            <button
              type="button"
              className="pwa-modal-ok-btn"
              onClick={() => setShowInfoModal(false)}
            >
              Got It!
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
