
import { NavLink } from "react-router";


export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/movies">
        <h2>🎬 MovieApp</h2>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/movies" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Películas
        </NavLink>
        <NavLink to="/movies/create" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Agregar película
        </NavLink>
      </div>
    </nav>
  );
}
