/* eslint-disable react/prop-types */
import './itemDetail.css';

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail-container">
            <h2 className="item-description">{item.description}</h2>
            <img src={item.imageUrl} alt={item.description} className="item-image" />
        </div>
    );
};
  
  export default ItemDetail;
  