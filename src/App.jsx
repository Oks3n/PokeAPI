import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "./PokedexPage";
import PokemonPage from "./PokemonPage";
import AboutPage from "./AboutPage"
import Navbar from "./Navbar"


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/page/:pageNumber" element={<PokedexPage />} />
        <Route path="*" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
