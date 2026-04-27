import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#333",
        color: "white"
      }}
    >
      <h2>Pokédex</h2>

      <div>
        <Link to="/page/1" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white" }}>
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar