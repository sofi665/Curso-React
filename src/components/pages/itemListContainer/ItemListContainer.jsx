/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import './itemContainer.css';
import { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { products } from '../../../products';



export const ItemListContainer =() => {

  const { name } = useParams();
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unaFraccion = products.filter(
      (producto) => producto.category === name
    );
    const getProducts = new Promise((resolve) => {
      resolve(name ? unaFraccion : products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, [name]);
  return <ItemList items={items} />;
};
