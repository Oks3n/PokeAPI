function PokemonStats({ pokemon }) {
  const statColors = {
    hp: "#ff5959",
    attack: "#f5ac78",
    defense: "#fae078",
    "special-attack": "#9db7f5",
    "special-defense": "#a7db8d",
    speed: "#fa92b2",
  }

  return (
    <div>
      <h2>Stats</h2>

      {pokemon.stats.map((statInfo) => {
        const statName = statInfo.stat.name
        const value = statInfo.base_stat
        const color = statColors[statName]

        return (
          <div key={statName} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
              <span>{statName}</span>
              <span>{value}</span>
            </div>

            <div style={{
              backgroundColor: "#ddd",
              borderRadius: "10px",
              height: "10px",
              overflow: "hidden"
            }}>
              <div
                style={{
                  width: `${(Math.min(value, 250) / 250) * 100}%`,
                  backgroundColor: color,
                  height: "100%"
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonStats