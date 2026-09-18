import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home/HomePage"
import ExplorePage from "./pages/Explore/ExplorePage"


function IndiaPage() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <p
        style={{
          color: "#60a5fa",
          letterSpacing: "5px",
          fontSize: "12px",
          margin: 0,
        }}
      >
        BHARAT YATRA
      </p>

      <h1
        style={{
          fontSize: "64px",
          margin: 0,
        }}
      >
        India
      </h1>

      <p
        style={{
          color: "#94a3b8",
          margin: 0,
        }}
      >
        Your journey through India begins here.
      </p>
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