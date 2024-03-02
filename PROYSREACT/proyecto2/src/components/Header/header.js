import "./header.css"

//const textoSaludoInicial = 'mi proyecto react';
//const textoMotivacion = 'vamos a por ello';
//const textoAutor = 'Pepito Grillo'
/*
const datosAutor ={
  nombre: "Pepito",
  apellido:"Grillo",
}
*/
//elemto JSX para el header
export const Header = (props) => {
    console.log(props)
   //Condicional para verificar la funcionalidad 
    let disponibilidad = "";
    if (props.datosAutor.estaDisponible)
      disponibilidad = 'Sí'
    else
      disponibilidad = 'No'
  //Devuelve los siguientes elementos de las props inyectados desde el index
    return <header>
      <h1>{props.datosAutor.txtSaludo}</h1>
      <h2>{props.datosAutor.textoMotivacion}</h2>
      <p>Autor de la App:{props.datosAutor.nombre} {props.datosAutor.apellido}</p>
      <p>Edad: {props.datosAutor.edad}</p>
      <p>Valoración: {props.datosAutor.valoracion}</p>
      <p>Open to work: {disponibilidad}</p>
    </header> 
}