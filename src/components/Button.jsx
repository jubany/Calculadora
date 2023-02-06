import React from "react";
import '../components/Button.css';

function Button(props) {
    
const esOperador = valor => {
            return isNaN(valor) && (valor !=='.') && (valor !=='=');
            
        }
        return(
    <div className={`button-container ${esOperador(props.children) ? 'operador' : ''}`}//para agregarle eventListener, lo agregamos en la estructura jsx,onClick,props.manejarClick, sabemos que necesita un valor, el valor del prop aqui es manejarClick.le pasamos el valor de props.children xq cuando hagamos click en uno de los botones queremos que se agregue a la pantalla el valor de ese boton, ese valor aqui es props.children.
    onClick={() => props.manejarClick(props.children)}>
        {props.children}
    </div>// si la pasamos sin una funcion anonima q aqui es la arrow function nos tira que estamos pasando un string, para decirle al div q estamos llamando esa funcion,(sino lo haria seria solo hacer una llamada a la function, retornaria solo un valor), hacemos la arrow function, retorna el resultado de llamar a onClick, escribiendo la funcion flecha estamos escribiendo una funcion como tal, para que funcione el eventListener
    )
}

export default Button;