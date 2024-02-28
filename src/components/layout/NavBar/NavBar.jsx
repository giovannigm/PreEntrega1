import React from "react";
import "./NavBar.css";
import Cartwidget from "../../common/Cartwidget/Cartwidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="titulo-logo">
        <img src="/logo-tipo.svg" alt="logo-vidrialum" id="logoTipo" />
        <h1>VIDRIALUM</h1>
      </div>
      <nav>
        <ul className="lista-nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <a>Categorias</a>
            <ul className="desplegable">
              <li>
                <Link to={"/category/ventanas"}>Ventanas</Link>
              </li>
              <li>
                <Link to={"/category/puertas"}>Puertas</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <Link to="/cart">
        <Cartwidget />
      </Link>
    </header>
  );
};

export default NavBar;
