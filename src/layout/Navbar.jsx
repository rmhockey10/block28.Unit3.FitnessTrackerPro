import { NavLink } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/routines">Routines</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}
