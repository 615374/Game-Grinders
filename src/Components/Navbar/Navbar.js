import React from 'react';
import logo from '../../Assets/logo.jpeg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {style} from './Navbar.style'

const Navbar = ({children}) => {

    const categorias = [
        {nombre:"LLaveros", id:0, ruta:"#"},
        {nombre:"Picadores", id:1, ruta:"#"},
        {nombre:"Tuqueros", id:2, ruta:"#"},
        {nombre:"Kits", id:3, ruta:"#"},
    ];

    return (
    <header style={style.container}>
        <img style={style.imagenes} src={logo} alt="tienda online" />
        <h1 id="titulo" >Bienvenidos a Game Grinders</h1>
        <h2 id="titulo">Impresiones 3D</h2>
        <nav id="categorias">

            {
                categorias.map((categoria)=>{
                    return <a key={categoria.id} style={style.categorias} href={categoria.ruta}>{categoria.nombre}</a>
                })
            }
            
        </nav>

        
        
        <button id="boton-carrito">
        <ShoppingCartIcon color="inherit" fontSize="large"/>
        </button>
    </header>
   
   );

};

export default Navbar;



