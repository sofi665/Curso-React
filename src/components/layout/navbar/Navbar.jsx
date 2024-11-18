/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dwxeovcwr/image/upload/v1728514174/AURA_spyndx.png"
          alt="logo"
          className="navbar-logo"
        />
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Todas</Link>
        </li>
        <li>
          <Link to="/category/aros">Aros</Link>
        </li>
        <li>
          <Link to="/category/collares">Collares</Link>
        </li>
        <li>
          <Link to="/category/anillos">Anillos</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};