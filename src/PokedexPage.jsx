import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { typeColors } from "./PokemonPage"

function PokedexPage() {
  const { pageNumber } = useParams()
  const navigate = useNavigate()

  const page = parseInt(pageNumber) || 1
  const limit = 20
  const offset = (page - 1) * limit

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())
    .then(async (data) => {
      const detailed = await Promise.all(
        data.results.map(p =>
          fetch(p.url).then(res => res.json())
        )
      )
      setPokemonList(detailed)
    })
}, [page])

 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pokédex - Page {page}</h1>

      {/* 🧩 Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px"
        }}
      >
        {pokemonList.map((pokemon) => {
 const id = pokemon.id
  const mainType = pokemon.types?.[0]?.type?.name
const bgColor = typeColors[mainType] || "#f9f9f9"
          return (
            <div
              key={pokemon.name}
              onClick={() => navigate(`/pokemon/${id}`)}
              style={{
                cursor: "pointer",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                backgroundColor: bgColor,
                color: "white"
              }}
            >
              <p>#{id} {pokemon.name}</p>

              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={pokemon.name}
              />
            </div>
          )
        })}
      </div>

      {/* 🔁 Navigation */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate(`/page/${page - 1}`)}
          disabled={page === 1}
        >
          ⬅ Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page}
        </span>

        <button onClick={() => navigate(`/page/${page + 1}`)}>
          Next ➡
        </button>
      </div>
    </div>
  )
}

export default PokedexPage