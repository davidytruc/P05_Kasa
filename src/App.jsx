import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Accueil from "./pages/accueil/Accueil"
import Apropos from "./pages/apropos/Apropos"
import Footer from "./composants/footer"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
