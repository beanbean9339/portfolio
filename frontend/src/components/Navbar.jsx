import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
      <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
      <Link to="/projects" style={{ margin: "0 1rem" }}>Projects</Link>
      <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
