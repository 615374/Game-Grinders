import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ComponenteBoton } from './ComponenteBoton'
import { ComponenteTitulo } from './ComponenteTitulo'

const App = () => {



  return (
    <>
      <Navbar>
        <ComponenteBoton/>
        <ComponenteTitulo/>

      </Navbar>
    </>
  );

};

export default App;

