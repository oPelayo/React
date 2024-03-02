import React from 'react'


function Saludo() {
    function manejadorClick(){
        alert("Hola buenas!!!");
    }
  return (
    <div>
      <h1>Haz clic y te saludaran</h1> 
      <button onClick = {manejadorClick}>Clic</button>
    </div>
  )
}

export default Saludo
