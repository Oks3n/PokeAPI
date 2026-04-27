import { typeColors } from "./PokemonPage"

function getTextColor(bgColor) {
  const color = bgColor.replace("#", "")
  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)

  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 150 ? "black" : "white"
}

function PokemonInfo({ pokemon }) {
  const height = pokemon.height / 10
  const weight = pokemon.weight / 10

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "150px" }}
      />

      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          padding: "15px",
          borderRadius: "10px"
        }}
      >
        <p><strong>Height:</strong> {height} m</p>
        <p><strong>Weight:</strong> {weight} kg</p>

        <h3>Types</h3>
        {pokemon.types.map((typeInfo) => {
          const typeName = typeInfo.type.name
          const bgColor = typeColors[typeName]
          const textColor = getTextColor(bgColor)

          return (
            <span
              key={typeInfo.slot}
              style={{
                backgroundColor: bgColor,
                color: textColor,
                padding: "5px 10px",
                margin: "5px",
                borderRadius: "10px",
                display: "inline-block",
                fontWeight: "bold",
                textTransform: "capitalize"
              }}
            >
              {typeName}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonInfo