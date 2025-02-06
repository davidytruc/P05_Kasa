import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navigation from "./composants/Navigation"
import Accueil from "./pages/accueil/Accueil"
import Apropos from "./pages/apropos/Apropos"
import Detail from "./composants/Detail.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Detail />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
