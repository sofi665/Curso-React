/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Counter from "../../common/counter/Counter";
import "./itemDetail.css";

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    const agregarAlCarrito = (quantity) => {
        if (quantity > 0) {
            addToCart({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity,
                stock: item.stock,
            });
        } else {
            alert("Debes agregar al menos un producto");
        }
    };

    return (
        <div className="item-detail-container">
            <h2 className="item-name">{item.title}</h2>
            <h2 className="item-description">{item.description}</h2>
            <img src={item.imageUrl} alt={item.description} className="item-image" />
            <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} />
        </div>
    );
};

export default ItemDetail;
