// import React, { useState } from "react";
// import "./NavBar.css";
// import Cartwidget from "../../common/Cartwidget/Cartwidget";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleMenuClick = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <header>
//       <div className="titulo-logo">
//         <img src="/logo-tipo.svg" alt="logo-vidrialum" id="logoTipo" />
//         <h1>VIDRIALUM</h1>
//       </div>
//       <nav>
//         <div id="menuIcon" onClick={handleMenuClick}>
//           &#9776;
//         </div>
//         <ul className={`list-nav ${showMenu ? "show-menu" : ""}`}>
//           <li>
//             <Link to="/">Inicio</Link>
//           </li>
//           <li>
//             <a>Categorias</a>
//             <ul className="desplegable">
//               <li>
//                 <Link to={"/category/ventanas"}>Ventanas</Link>
//               </li>
//               <li>
//                 <Link to={"/category/puertas"}>Puertas</Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="#">Contacto</a>
//           </li>
//         </ul>
//       </nav>
//       <Cartwidget />
//     </header>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import "./NavBar.css";
import Cartwidget from "../../common/Cartwidget/Cartwidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    // Close the dropdown menu when the main menu is toggled
    if (showMenu) setShowDropdown(false);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <Link to="/">
        <div className="titulo-logo">
          <img src="/logo-tipo.svg" alt="logo-vidrialum" id="logoTipo" />
          <h1>VIDRIALUM</h1>
        </div>
      </Link>

      <nav>
        <div id="menuIcon" onClick={handleMenuClick}>
          &#9776;
        </div>
        <ul className={`list-nav ${showMenu ? "show-menu" : ""}`}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <a onClick={handleDropdownClick}>Categorias</a>
            <ul
              className={`desplegable ${showDropdown ? "show-dropdown" : ""}`}
            >
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
      <Cartwidget />
    </header>
  );
};

export default NavBar;
