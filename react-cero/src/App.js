import './App.css';
import Boton from './components/boton';
import Pantalla from './components/pantalla';


function App() {

  return (
    <div className="App">
      <div className='contenedor'>
        <h2 className='title'>Calculadora en React</h2>
      </div>
      <div className='calculadora'>
        < Pantalla />


        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'></div>        
      </div>
    </div>
  );
}

export default App;
