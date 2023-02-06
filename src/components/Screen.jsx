import React from "react";
import '../components/Screen.css'

const Screen = ({input}) => (//desustructuracion, podria usar props también.
        <div className='input'> 
            {input}
        </div>
    )


export default Screen;