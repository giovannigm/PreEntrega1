import React from "react";
import "./NavBar.css";
import Cartwidget from "../Cartwidget/Cartwidget";

const NavBar = () => {
  return (
    <div className="header">
      <div className="titulo-logo">
        <img src="/logo-tipo.svg" alt="logo-vidrialum" id="logoTipo" />
        <h1>VIDRIALUM</h1>
      </div>
      <nav>
        <ul className="lista-nav">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Categorias</a>
            <ul className="desplegable">
              <li>
                <a href="#">categoria1</a>
              </li>
              <li>
                <a href="#">categoria2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <Cartwidget />
    </div>
  );
};

export default NavBar;
