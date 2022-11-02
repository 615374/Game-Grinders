import React, { useEffect, useState } from "react";
import { stockProductos } from "../ItemList/ItemList";
import Card from "../CardView/Card";
import { useParams } from "react-router-dom";



export const ItemListContainer = ({ greeting }) => {


  const { categoria } = useParams();
  const [productos, setProductos] = useState([])
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stockProductos);
    }, 2000);
  })

  useEffect(() => {
    promesa.then((response) => {
      if (categoria) {
        const productsFiltered = response.filter(elm => elm.categoria === categoria)
        setProductos(productsFiltered);
        console.log(productsFiltered);
      } else {
        setProductos(response)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria])

  const products = productos.map(product => (
    <Card key={product.id} {...product} />
  ))

  return (
    <>

      <div className="contenedor-productos">{products}</div>

    </>

  );
};
