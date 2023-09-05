
function Escribir(props) {
  return (
    <div>
        <input type="text" className='boton-clear'
          placeholder="escribir"
          value={props.input}
          onChange={ (e) => props.children(e.target.value)}
        />
    </div>
  )
}

export default Escribir