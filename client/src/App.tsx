import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home/HomePage"
import ExplorePage from "./pages/Explore/ExplorePage"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App