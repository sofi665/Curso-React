import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProduct = async () => {
      const productsCollection = collection(db, "products"); 
      const docRef = doc(productsCollection, id); 
      try {
        const res = await getDoc(docRef);
        if (res.exists()) {
          setItem({ ...res.data(), id: res.id });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Skeleton variant="rectangular" width={300} height={200} />
        <Skeleton variant="text" width={200} height={50} />
        <Skeleton variant="text" width={300} />
        <Skeleton variant="text" width={300} />
      </div>
    );
  }

  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <ItemDetail item={item} />
      <h4>Más información aquí</h4>
    </div>
  );
};

export default ItemDetailContainer;
