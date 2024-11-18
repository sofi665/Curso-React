import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";


export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <FaShoppingCart />
      <span>{cart.length}</span>
    </Link>
  );
}

