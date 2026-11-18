import { Link } from "react-router"

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/movies" className="btn-reload">Go back to movies</Link>
    </div>
  )
}
