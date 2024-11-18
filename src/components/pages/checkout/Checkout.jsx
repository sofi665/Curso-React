/* eslint-disable no-undef */
import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";

import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

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
  
    // Validar información del usuario
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
      // Agregar la orden a Firestore
      const refCollection = collection(db, "orders");
      const res = await addDoc(refCollection, order);
      setOrderId(res.id);
  
      // Actualizar stock de cada producto
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
    return <h2>¡Gracias por tu compra! Tu ID de orden es: {orderId}</h2>;
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Tu Nombre"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Tu Correo"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Tu Teléfono"
          name="phoneNumber"
          value={userInfo.phoneNumber}
          onChange={handleInputChange}
        />
        <button disabled={loading}>{loading ? "Procesando..." : "Comprar"}</button>
        <button type="button" onClick={() => resetCart()}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
