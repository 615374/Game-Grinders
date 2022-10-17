import React from 'react';
import logo from '../../Assets/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BlurCircularRoundedIcon from '@mui/icons-material/BlurCircularRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import {style} from './Navbar.style'



const Navbar = () => {

    return (
    <header style={style.container}>
        <img style={style.imagenes} src={logo} alt="tienda online" />
        <div class="padre-transform">
        <div>
        <h1 id="titulo" >Bienvenidos a Game Grinders</h1>
        <h2 id="titulo">Impresiones 3D</h2>
       
        <nav>
            <div class= "categorias" >
                    <ul>
                        
                        <li class= "categorias"><a href="#">
                            <div class="wrap">
                                <span class="icon">
                                  <KeyRoundedIcon/>  
                                </span>
                                <span class="text">LLaveros</span>
                            </div>
                        </a></li>
                        <li class= "categorias"><a href="#">
                            <div class="wrap">
                                <span class="icon">
                                 <BlurCircularRoundedIcon/>    
                                </span>
                                <span class="text">Picadores</span>
                            </div>
                        </a></li>
                        <li class= "categorias"><a href="#">
                            <div class="wrap">
                                <span class="icon">
                                 <AutoFixHighRoundedIcon/>
                                </span>
                                <span class="text">Tuqueros</span>
                            </div>
                        </a></li>
                        <li class= "categorias"><a href="#">
                            <div class="wrap">
                                <span class="icon">
                                  <ShoppingBagRoundedIcon/>  
                                </span>
                                <span class="text">Kits</span>
                            </div>
                        </a></li>
                    </ul>
                </div>
                        
        </nav>
        
       
    </div>
    </div>   

    <button id="boton-carrito">
        <ShoppingCartIcon color="inherit" fontSize="large"/>
        </button>
   



    </header>
    
   
   );
};
export default Navbar;








