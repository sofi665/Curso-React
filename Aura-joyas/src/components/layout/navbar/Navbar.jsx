import { CartWidget } from "../../common/cartWIdget/cartWidget"
import "./navbar.css"

export const Navbar = ()=>{
    return ( <div className="container-navbar">
      <img
        src="https://res.cloudinary.com/dwxeovcwr/image/upload/v1728514174/AURA_spyndx.png"
        alt="logo"
        className="navbar-logo"
      />
    <ul className="navbar-menu">
      <li> Todos</li>
    <li>Anillos</li>
    <li>Collares</li>
    <li>Pulseras</li>
    <li>Aros</li>

    </ul>
      <CartWidget />
  </div>)
}