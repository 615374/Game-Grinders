//import { Link } from "@mui/material";
import React from "react";
import { ItemCount } from "../../ItemCount";


export const onAdd = (contador) => {
    console.log("agregaste", contador);
}

const Card = ({nombre, precio, categoria, img}) => {
    return (
        <div className="producto">
            <section>
              <img src={img} alt= ""/>
            </section>
            <h3>{nombre}</h3>
            <p>{categoria}</p>
            <p className="precioProducto">Precio:$ {precio}</p>
            <button className="boton-agregar">Agregar<i class="fas fa-shopping-cart"></i></button>
            <div className="botones-add-remove-cached" > 
            <ItemCount stock={10} initial ={1} onAdd={onAdd}/>   
            </div>
           
        </div>
    );
};

export default Card;