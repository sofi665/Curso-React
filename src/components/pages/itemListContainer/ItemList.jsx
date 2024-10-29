/* eslint-disable react/prop-types */
import './itemList.css'
import { Card } from "../../common/Cards/Card";
const ItemList =({items}) =>{
    return(
        <><h2>Listado de productos</h2>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
            {items.map(({id, title, price, stock,imageUrl}) =>(
                <Card 
                key={id}
                title={title}
                price={price}
                stock={stock}
                image={imageUrl}
                id={id}/>

            ))}

        </div>
        </>
    )
};
export default ItemList;