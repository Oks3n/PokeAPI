import "./App.css";

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import PokedexPage from "./PokedexPage";
import PokemonPage from "./PokemonPage";
import AboutPage from "./AboutPage";
import Navbar from "./Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
       
        <Route path="/" element={<Navigate to="/page/1" />} />

      
        <Route path="/page/:pageNumber" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="/about" element={<AboutPage />} />

     
        <Route path="*" element={<Navigate to="/page/1" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;