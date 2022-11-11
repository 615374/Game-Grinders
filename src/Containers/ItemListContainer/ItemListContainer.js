
import React, { useEffect, useState } from "react";
import Card from "../CardView/Card";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

export const ItemListContainer = ({ greeting }) => {

  const { categoria } = useParams();
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  
  const productCollection = collection(db, "productos");

  var q = query(productCollection)

  if(categoria){
    q = query(productCollection, where('categoria', '==', categoria ))
  }
  
  useEffect(() => {
    getDocs(q)
    .then((result) => {
      const listaProductos = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProductos(listaProductos);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));
  }, [categoria, q ]);

  const products = productos.map(item => (
    <Card key={item.id} {...item} />
  ))

  return (
    <>
      <div className="contenedor-productos">{products}</div>
    </>
  );
};
