import React from "react";
import '../components/ButtonClear.css'

const ButtonClear = (props) => (
    <div className='Button-clear'onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default ButtonClear;