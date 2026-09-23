import { useEffect } from "react"

let lockCount = 0
let originalBodyOverflow = ""
let originalDocOverflow = ""
let originalPaddingRight = ""

/**
 * Universal body scroll locking hook.
 * Locks document.body and document.documentElement scrolling whenever isLocked is true,
 * preventing the background page from scrolling when any modal, drawer, or dialog box is open.
 */
export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked || typeof document === "undefined") return

    if (lockCount === 0) {
      originalBodyOverflow = document.body.style.overflow
      originalDocOverflow = document.documentElement.style.overflow
      originalPaddingRight = document.body.style.paddingRight

      // Compute scrollbar width to prevent layout shift
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`
      }

      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    }
    lockCount++

    return () => {
      lockCount = Math.max(0, lockCount - 1)
      if (lockCount === 0) {
        document.body.style.overflow = originalBodyOverflow
        document.documentElement.style.overflow = originalDocOverflow
        document.body.style.paddingRight = originalPaddingRight
      }
    }
  }, [isLocked])
}
