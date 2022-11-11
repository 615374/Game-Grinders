/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

export const ItemDetailContainer = ({ greeting }) => {

  const { id } = useParams();
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {

   const productCollection = collection(db, "productos");
   const refDoc = doc(productCollection, id);

    getDoc(refDoc)
    .then((result) => {
      setProducto({
        id: result.id,
        ...result.data(),
        
      });
      
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));
  }, [id]);

  return (
    <>
      <div className="contenedor-productos">{producto}</div>
    </>
  );
}; */