import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home/HomePage"
import ExplorePage from "./pages/Explore/ExplorePage"
import StatePage from "./pages/State/StatePage"

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
          path="/state/:stateId"
          element={<StatePage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App