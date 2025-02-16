import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navigation from "./composants/Navigation"
import Accueil from "./pages/accueil/Accueil"
import Apropos from "./pages/apropos/Apropos"
import Logementid from "./pages/logement/Logementid.jsx"
import Page404 from "./pages/404/Page404.jsx"
import Footer from "./composants/Footer.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logementid />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
