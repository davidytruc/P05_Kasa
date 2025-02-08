import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navigation from "./composants/Navigation"
import Accueil from "./pages/accueil/Accueil"
import Apropos from "./pages/apropos/Apropos"
import Detail from "./composants/Detail.jsx"
import Page404 from "./pages/404/Page404.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Detail />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
