// Helper to register service worker for offline PWA capabilities

export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registered successfully:', reg.scope)
        })
        .catch((err) => {
          console.warn('[PWA] Service Worker registration failed:', err)
        })
    })
  }
}
