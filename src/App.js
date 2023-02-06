import './App.css';
import FreeCodeCampLogo from '../src/imagenes/Freecodecamp-logo.png'
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import {useState} from 'react'
import { evaluate } from 'mathjs';//libreria para operaciones math.


function App() {

const [input,setInput] = useState('');

const agregarInput = (valor) => {
  setInput(input + valor);
}
const calcularResult = () => {//function para evaluar matemáticamente el input
  if (input) {
    setInput(evaluate(input));  //si no esta vacia devuelve la operacion, si esta vacia manda alerta
  }
  else{
    alert('Por favor ingrese valores');
  }
}


  return (
    <div className='App'>
     <div className='logo-container'>
      <img 
      src={FreeCodeCampLogo}
      className='logo'
      alt='Logo de free' />
</div> 
<div className='container-calculator'>
  <Screen input={input}/>
<div className='fila'>
<Button manejarClick={agregarInput}>1</Button>
<Button manejarClick={agregarInput}>2</Button>
<Button manejarClick={agregarInput}>3</Button>
<Button manejarClick={agregarInput}>+</Button></div>
<div className='fila'>
  <Button manejarClick={agregarInput}>4</Button>
  <Button manejarClick={agregarInput}>5</Button>
  <Button manejarClick={agregarInput}>6</Button>
  <Button manejarClick={agregarInput}>-</Button>
</div>
<div className='fila'>
<Button manejarClick={agregarInput}>7</Button>
<Button manejarClick={agregarInput}>8</Button>
<Button manejarClick={agregarInput}>9</Button>
<Button manejarClick={agregarInput}>*</Button>
</div>
<div className='fila'>
<Button manejarClick={calcularResult}>=</Button>
<Button manejarClick={agregarInput}>0</Button>
<Button manejarClick={agregarInput}>.</Button>
<Button manejarClick={agregarInput}>/</Button>
</div>
<div className='fila'>
  <ButtonClear manejarClear={() => setInput('')}>Clear</ButtonClear></div>

</div>
     </div>
  );
}

export default App;
