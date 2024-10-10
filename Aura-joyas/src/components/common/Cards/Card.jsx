
// eslint-disable-next-line react/prop-types
export const Card = ({ title, price, stock }) => {
    return (
        <div className="card-container">
        <h2 className="card-title">Título: {title}</h2>
        <h3 className="card-price">Precio: ${price}</h3>
        <h3 className="card-stock">Stock: {stock}</h3>
      </div>
    );
  };

