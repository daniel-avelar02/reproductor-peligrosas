import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Reproductor de Peligrosas 😿</h1>
      <nav>
        <a>
          {" "}
          <Link to="/">Inicio</Link>
        </a>
        <a>
          <Link to="/about">Sobre mi</Link>
        </a>
        <a>
          {" "}
          <Link to="/contacto">Contacto</Link>
        </a>
      </nav>
    </header>
  );
};

export default Header;
