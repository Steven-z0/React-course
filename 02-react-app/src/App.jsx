import { useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  //manejo de eventos y estado
  const [contador, setContador] = useState(10);

  const disminuir = () =>{
    console.log(contador);
    setContador(contador - 1);
  }

  const aumentar = () =>{
    console.log(contador);
    setContador(contador + 1);
  }
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={disminuir}>-</button>
      <h1 id='number'>{contador}</h1>
      <button onClick={aumentar}>+</button>
    </div>
  )
}

export default App
