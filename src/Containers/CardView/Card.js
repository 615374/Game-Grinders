import React from "react";


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
            <div>
            <p className="contar" id="numero">0</p>
            </div>
            <div className="botones-add-remove-cached">
            <button className="incr" id="sumar"><span class="material-symbols-rounded">add</span></button>
            <button className="decr" id="restar"><span class="material-symbols-rounded">remove</span></button>
            <button className="reset" id="reset"><span class="material-symbols-rounded">cached</span></button>
            </div>
            
        </div>
    );
};

export default Card;