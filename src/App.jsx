import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "./PokedexPage";
import PokemonPage from "./PokemonPage";
import AboutPage from "./AboutPage"
import Navbar from "./Navbar"


function App() {
  return (
    <HashRouter>
    <Navbar />
      <Routes>
        <Route path="/page/:pageNumber" element={<PokedexPage />} />
        <Route path="*" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
