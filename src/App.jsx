import { BrowserRouter as Raouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Pakage from "./pages/TourPakage"
import './App.css'

function App() {

  return (
    <Raouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/TourPakage" element={<Pakage />} />
      </Routes>
    </Raouter>
  )
}

export default App
