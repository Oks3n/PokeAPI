import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";
import PokemonStats from "./PokemonStats";


export const typeColors = {
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c850",
  electric: "#f8d030",
  psychic: "#f85888",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  fairy: "#ee99ac",
  normal: "#a8a878",
  fighting: "#c03028",
  flying: "#a890f0",
  poison: "#a040a0",
  ground: "#533e05",
  rock: "#b8a038",
  bug: "#191919",
  ghost: "#705898",
  steel: "#b8b8d0",
};

function PokemonPage() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <p>Loading...</p>;

  const mainType = pokemon.types?.[0]?.type?.name;
  const backgroundColor = typeColors[mainType] || "#fff";

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor,
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1>
        #{pokemon.id} {pokemon.name}
      </h1>

      {/* 🧩 Info section */}
      <PokemonInfo pokemon={pokemon} />

      {/* 📊 Stats section */}
      <PokemonStats pokemon={pokemon} />

      {/* 🔙 Back button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ⬅ Back
      </button>
    </div>
  );
}

export default PokemonPage;