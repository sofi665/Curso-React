/* eslint-disable no-undef */
import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import "./checkout.css"; 

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleFormSubmit = async (evento) => {
    evento.preventDefault();

    if (!userInfo.name || !userInfo.email || !userInfo.phoneNumber) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);
    const total = getTotalAmount();
    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: new Date().toISOString(),
    };

    try {
      const refCollection = collection(db, "orders");
      const res = await addDoc(refCollection, order);
      setOrderId(res.id);

      const refCol = collection(db, "products");
      for (const item of cart) {
        const refDoc = doc(refCol, item.id);
        await updateDoc(refDoc, { stock: item.stock - item.quantity });
      }

      resetCart();
    } catch (error) {
      console.error("Error al procesar la orden:", error);
      alert("Ocurrió un error al procesar tu compra. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return <h2 className="checkout-order-id">¡Gracias por tu compra! Tu ID de orden es: {orderId}</h2>;
  }

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleFormSubmit}>
        <input
          className="checkout-input"
          type="text"
          placeholder="Tu Nombre"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />
        <input
          className="checkout-input"
          type="email"
          placeholder="Tu Correo"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        <input
          className="checkout-input"
          type="text"
          placeholder="Tu Teléfono"
          name="phoneNumber"
          value={userInfo.phoneNumber}
          onChange={handleInputChange}
        />
        <button className="checkout-btn" disabled={loading}>
          {loading ? "Procesando..." : "Comprar"}
        </button>
        <button className="checkout-btn checkout-btn-cancel" type="button" onClick={() => resetCart()}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
