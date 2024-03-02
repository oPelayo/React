import "./section.css"
import imagenAutor from "../../imgs/pepi.png";

//const conocimientos = ['Desarrollo','React','Javascript','JSX']
//Declaracion de el elemento imagen con estas propiedades
const imgAutor = (
    <div>
      <img src={imagenAutor} alt='Imagen del autor' width="25%" height="25%"/>
    </div>
  );
/*
function generarConocimientosLi (arrayIn) {
  const liConocimientos = [];
  for (let i=0; i<arrayIn.length; i++) {
    liConocimientos.push(<li>{arrayIn[i]}</li>)
  }
  return liConocimientos;
}
*/
//Elemento JSX para el section
//Con el array_conocimientos de las props crea un 'li' por cada elemento 
//y lo almacena en liConocimientos
export const Section = (props)=> {
  const liConocimientos = props.conocimientos.map((conocimiento) => <li>{conocimiento}</li>)
  return <section> 
  <p>Aprenderemos muchas cosas de:</p>
  <ul>{liConocimientos}</ul>
  {imgAutor}
</section>
}
 
 /*
 return <section> 
    <p>Aprenderemos muchas cosas de:</p>
    <ul>{generarConocimientosLi(props.conocimientos)}</ul>
    {imgAutor}
  </section>
  }
*/