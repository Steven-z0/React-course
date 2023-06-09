import React from "react";
import '../styles/boton.css';

export default function Boton(props){

    const esOperador = (valor) =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

    return(
        <div className={`boton ${esOperador(props.children) ? 'operador' : '' }`}>
            {props.children}
        </div>
    )
}