import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import HomePage from "./pages/Home/HomePage"
import ExplorePage from "./pages/Explore/ExplorePage"
import StatePage from "./pages/State/StatePage"
import MyYatraPage from "./pages/Yatra/MyYatraPage"

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
          element={<ExplorePage initialStage="globe" />}
        />

        <Route
          path="/india"
          element={<ExplorePage initialStage="india" />}
        />

        <Route
          path="/my-yatra"
          element={<MyYatraPage />}
        />

        <Route
          path="/yatra"
          element={<MyYatraPage />}
        />

        <Route
          path="/state/:stateId"
          element={<StatePage />}
        />

        {/* Direct state slug fallback (e.g. /delhi, /uttar-pradesh) */}
        <Route
          path="/:stateId"
          element={<StatePage />}
        />

        {/* Global 404 fallback */}
        <Route
          path="*"
          element={<Navigate to="/india" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App