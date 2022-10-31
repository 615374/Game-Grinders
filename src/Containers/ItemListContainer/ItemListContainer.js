import React from "react";
import {stockProductos} from "../ItemList/ItemList";
import Card from "../CardView/Card";
import {useParams} from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {
  
  
  const {algo} = useParams();
  console.log(algo);


  const products = stockProductos.map(product =>(
    <Card key={product.id} {...product} />  
   ))

   

  return(
    <>
     
     <div className="contenedor-productos">{products}</div>
     
     </>
    
  );
};

