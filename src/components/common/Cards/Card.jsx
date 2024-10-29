/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export const Card = ({ title, price, stock, image, id}) => {
    return (
        <div className="card-container">
          <img src={image} alt="" style={{ width: "100px" }} />
        <h2 className="card-title"> {title}</h2>
        <h3 className="card-price">Precio: ${price}</h3>
        <h3 className="card-stock">Stock: {stock}</h3>
        <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
      </div>
    );
  };

