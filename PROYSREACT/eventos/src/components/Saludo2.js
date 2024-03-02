import React from 'react'

class Saludo2 extends React.Component{
manejadorClick2(){
    alert("Hola, Tu")
}
render() {
  return (
    <div>
        <br></br>
        <button onClick={this.manejadorClick2}>Saludo Personal</button>
    </div>
)}
}