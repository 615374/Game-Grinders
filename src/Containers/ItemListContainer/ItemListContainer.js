import stockProductos from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

const contenedorProductos = document.getElementById('contenedor-productos')


export const ItemListContainer = ({ greeting }) => {

  const algo = useParams();
  console.log (algo);

  return(
    
    stockProductos.forEach((producto) => {
   const div = document.createElement('div')
   div.classList.add('producto')
   div.innerHTML = `
   <img src=${producto.img} alt= "">
   <h3>${producto.nombre}</h3>
   <p>${producto.categoria}</p>
   <p class="precioProducto">Precio:$ ${producto.precio}</p>
   <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
   <div>
   <p class="contar" id="numero">0</p>
   </div>
   <div class="botones-add-remove-cached">
   <button class="incr" id="sumar"><span class="material-symbols-rounded">add</span></button>
   <button class="decr" id="restar"><span class="material-symbols-rounded">remove</span></button>
   <button class="reset" id="reset"><span class="material-symbols-rounded">cached</span></button>
   </div>

   `

      //Inyecto el contenedor de productos a traves de un appendChild en el html.
      contenedorProductos.appendChild(div)
  })

  );
};
