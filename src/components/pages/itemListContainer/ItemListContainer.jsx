/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; 
import ItemList from "./ItemList";
import { Box, Skeleton, CircularProgress, Alert } from "@mui/material";

export const ItemListContainer = () => {
  const { name } = useParams(); 
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      const productsCollection = collection(db, "products");
      let docsRef = productsCollection;

      
      if (name) {
        docsRef = query(productsCollection, where("category", "==", name));
      }

      try {
        const querySnapshot = await getDocs(docsRef);
        const productsArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItems(productsArray);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [name]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, padding: 2 }}>
        {[...Array(4)].map((_, index) => (
          <Box key={index} sx={{ width: 200 }}>
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" width={200} height={50} />
            <Skeleton variant="text" width={200} height={30} />
          </Box>
        ))}
      </Box>
    );
  }

  

  return (
    <div>
      {items.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
          <CircularProgress />
          <Alert variant="outlined" severity="warning">
            No se encontraron productos
          </Alert>
        </Box>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

