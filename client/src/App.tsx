import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home/HomePage"
import ExplorePage from "./pages/Explore/ExplorePage"
import IndiaMap from "./components/map/IndiaMap"

function IndiaPage() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#020617",
      }}
    >
      <button
        type="button"
        onClick={() => {
          window.history.back()
        }}
        style={{
          position: "absolute",
          top: "24px",
          left: "24px",
          zIndex: 100,
          padding: "12px 18px",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(15,23,42,0.85)",
          color: "#f8fafc",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
          backdropFilter: "blur(12px)",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            color: "#f59e0b",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "5px",
          }}
        >
          BHARAT YATRA
        </p>

        <h1
          style={{
            margin: 0,
            color: "#f8fafc",
            fontSize: "42px",
            fontWeight: 700,
            letterSpacing: "-1.5px",
          }}
        >
          India, Unfolded.
        </h1>

        <p
          style={{
            margin: "10px 0 0",
            color: "rgba(226,232,240,0.7)",
            fontSize: "14px",
          }}
        >
          Explore the states of India
        </p>
      </div>

      <IndiaMap />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/explore"
          element={<ExplorePage />}
        />

        <Route
          path="/india"
          element={<IndiaPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App