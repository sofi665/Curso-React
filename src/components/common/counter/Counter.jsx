
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./counter.css"; 

const Counter = ({ stock, agregarAlCarrito, totalInCart = 0 }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < stock - totalInCart) {
            setContador(contador + 1);
        } else {
            alert("No hay suficiente stock disponible");
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="counter-container">
            <button className="counter-btn counter-sumar" onClick={sumar}>
                Sumar
            </button>
            <h2 className="counter-value">Contador: {contador}</h2>
            <button className="counter-btn counter-restar" onClick={restar}>
                Restar
            </button>
            <button
                className="counter-btn counter-add-to-cart"
                onClick={() => agregarAlCarrito(contador)}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default Counter;
