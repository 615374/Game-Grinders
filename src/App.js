import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer";
import Card from "./Containers/CardView/Card"
import {BrowserRouter, Routes, Route} from "react-router-dom"; 



const App = () => {
 
  const mensaje = "Los mejores Grinders del mercado";
 
  return (
    <>
     <BrowserRouter>   
     <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/categoria/:categoria" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/card" element={<Card/>}/>
     </Routes>

     </BrowserRouter>
     
    </>
  );

};

export default App;

