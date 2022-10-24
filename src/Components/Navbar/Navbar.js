import React from 'react';
import logo from '../../Assets/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BlurCircularRoundedIcon from '@mui/icons-material/BlurCircularRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import { style } from './Navbar.style';
import { Link } from "react-router-dom";



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
       
        <nav>
            <div className='categorias'>
                    <ul>
                        
                        <li className='categorias'><Link to="/categoria/llaveros" className='a_parent'>
                            <div className='wrap'>
                                <span className='icon'>
                                  <KeyRoundedIcon/>  
                                </span>
                                <span className='text'>LLaveros</span>
                            </div>
                        </Link></li>
                        <li className='categorias'><Link to="/categoria/picadores" className='a_parent'>
                            <div className='wrap'>
                                <span className='icon'>
                                 <BlurCircularRoundedIcon/>    
                                </span>
                                <span className='text'>Picadores</span>
                            </div>
                        </Link></li>
                        <li className='categorias'><Link to="/categoria/tuqueros" className='a_parent'>
                            <div className='wrap'>
                                <span className='icon'>
                                 <AutoFixHighRoundedIcon/>
                                </span>
                                <span className='text'>Tuqueros</span>
                            </div>
                        </Link></li>
                        <li className='categorias'><Link to="/categoria/kits" className='a_parent'>
                            <div className='wrap'>
                                <span className='icon'>
                                  <ShoppingBagRoundedIcon/>  
                                </span>
                                <span className='text'>Kits</span>
                            </div>
                        </Link></li>
                    </ul>
                </div>
                        
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








