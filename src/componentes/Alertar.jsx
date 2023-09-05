
function Alertar(props) {
  return (
    <div>
        <input type="text" name="" id="" 
        placeholder="doble"
        value = {props.avi2+props.avi2}
        onChange={(e)=>props.avi(e.target.value)}/>
    </div>
  )
}

export default Alertar