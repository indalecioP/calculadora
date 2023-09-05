import './App.css'
import hombre from './hombre.webp'
import Boton from './componentes/boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'
// import './estilos/boton-clear.css'
import Escribir from './componentes/Escribir'
import Alertar from './componentes/Alertar'

const palabras = ['hola','chau','caracol'].sort(function(){return 0.5 - Math.random()})
console.log(palabras)

function App() {

  

  const [input, setInput] = useState('') 
  const [contador, setContador] = useState(0)

  const escribir1 = (val) => {
    setInput(val)  
    console.log(val)
    if (val == palabras[contador]) {
      console.log('bien')
      setContador(contador + 1)
      setInput('')
      if (contador == 2){alert('jaja')}
    }
  }

  const avisar = (r) => {
    alert(r)
    if (input == 'hh'){alert('jjjjjjjjjjj')}

  }

  const agregarInput = val => {
    setInput(input + val)
  }

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input))
    }
  }

  return (
    <div className="App">
      <div className="logo-div">
        <img src={hombre}
          className='logo'
          alt="Logo" />
      </div>
      <div className="div-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>clear</BotonClear>
        <input type="text" 
        placeholder='algo'
        value={input} 
        className='boton-clear'
          onChange={(e)=> setInput(e.target.value)}
        />
        </div>
        <Escribir input={input}>{escribir1}</Escribir>


      </div>
      <Alertar avi={avisar} avi2={input} />

    </div>
  )
}

export default App
