import React, { useEffect, useState } from "react";
import {stockProductos} from "../ItemList/ItemList";
import Card from "../CardView/Card";
import {useParams} from "react-router-dom";



export const ItemListContainer = ({ greeting }) => {
  

  const {id} = useParams();
  const [productos, setProductos] = useState ([])
  const promesa = new Promise ((resolve,reject) =>{
      setTimeout(()=>{
        resolve(stockProductos);
      },2000);
  })

  useEffect(() => {
  promesa.then((response)=> {
   if (Id){
     const productsFiltered=response.filtered(elm=>elm.categoria===categoryId)
     setProductos(productsFiltered);
    }else{
      setProductos(response)
    }
  })
  },[categoryId]) 

  
  const products = stockProductos.map(product =>(
    <Card key={product.id} {...product} />  
   ))

   

  return(
    <>
     
     <div className="contenedor-productos">{products}</div>
     
     </>
    
  );
};



