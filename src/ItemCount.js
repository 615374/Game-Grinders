import React, {useState, useEffect} from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

export const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(1);

    useEffect(()=>{
        //console.log("se ejecuta useEffect");
        
    },[]);


    const handlerClickSumar = () =>{
        if( contador < stock){
        setContador (contador + 1);
        }
    };

    const handlerClickRestar = () =>{
        
        setContador (contador - 1);
    };

    const handlerClickReset = () =>{
        
        setContador (1);
        onAdd()
    };

    /*const addToCart = ()=>{
        console.log(`El usuario quiere agregar ${contador} productos al carrito`);
    
    }*/


    return (
        <div>
        
         <h1 class="contador">{contador}</h1>
         <button class="botones-add-remove-cached" onClick={handlerClickSumar}><AddCircleRoundedIcon fontSize="small"/></button>
         <button class="botones-add-remove-cached" onClick={handlerClickRestar}><RemoveCircleRoundedIcon fontSize="small"/></button>
         <button class="botones-add-remove-cached" onClick={handlerClickReset}><RestartAltRoundedIcon fontSize="small"/></button>
        </div>
    );
    
}; 



