import { BrowserRouter as Raouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import './App.css'

function App() {

  return (
    <Raouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Raouter>
  )
}

export default App
