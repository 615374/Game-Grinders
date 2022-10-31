import React from 'react';
import logo from '../../Assets/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { style } from './Navbar.style';
import { Link } from "react-router-dom";


const categorias = [
    {nombre:"LLaveros", id:0, ruta:"/categoria/llaveros"},
    {nombre:"Picadores", id:1, ruta:"/categoria/picadores"},
    {nombre:"Tuqueros", id:2, ruta:"/categoria/tuqueros"},
    {nombre:"Kits", id:3, ruta:"/categoria/kits"},
]

 
const Navbar = () => {

    return (
    <header style={style.container}>
        <Link style={style.imagenes} to="/">
        <img style={style.imagenes} src={logo} alt="tienda online" />
        </Link>

        <div className='padre-transform'>
        <div>
        <h1 id="titulo" >Bienvenidos a Game Grinders</h1>
        <h2 id="titulo">Impresiones 3D</h2>
       
        <nav className='categorias'>
        {
            categorias.map((categoria)=>{
                return <Link key={categoria.id} style = {style.categorias} to={categoria.ruta}>{categoria.nombre}</Link>

            })
        }                   
        </nav>

        
       
    </div>
    </div>   

    <Link to="/cart">
    <button id="boton-carrito">
        <ShoppingCartIcon color="inherit" fontSize="large"/>
    </button>
    </Link>

    </header>
    
   
   );
};
export default Navbar;








