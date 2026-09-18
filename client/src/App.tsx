import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import ExplorePage from "./pages/Explore/ExplorePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App