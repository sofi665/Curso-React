/* eslint-disable react/prop-types */
import { useState } from "react";

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
        <div>
            <button onClick={sumar}>Sumar</button>
            <h2>Contador: {contador}</h2>
            <button onClick={restar}>Restar</button>
            <button onClick={() => agregarAlCarrito(contador)}>Agregar al carrito</button>
        </div>
    );
};

export default Counter;
