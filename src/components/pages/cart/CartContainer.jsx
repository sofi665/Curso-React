import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./cartContainer.css";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } = useContext(CartContext);
  let totalEnElCarrito = getTotalAmount();

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div className="cart-item" key={product.id}>
          <div>
            <h2>{product.title}</h2>
            <h3>Cantidad: {product.quantity}</h3>
          </div>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        </div>
      ))}
      <div className="cart-actions">
        <button onClick={resetCart}>Limpiar carrito</button>
        <h2 className="cart-total">El total a pagar es {totalEnElCarrito}</h2>
        <Link className="cart-checkout-link" to="/checkout">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default CartContainer;
