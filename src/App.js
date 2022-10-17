import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer";
import { ItemCount }  from "./ItemCount";

const App = () => {
 
  const nombre = "Gisela";
  const mensaje = " "

  const onAdd =() => {
    console.log("agregaste un producto al carrito")
  }


  return (
    <>
     <Navbar nombreUsuario={nombre} apellidoUsuario="Lanzillotta"/>
     <ItemListContainer greeting={mensaje} mensaje=""/>
     <ItemCount stock={10} initial={1} onAdd={onAdd} />
   
    </>
  );

};

export default App;

