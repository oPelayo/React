import "./nav.css"
export const Nav = () => (
    <nav>
      <ul id="ulhorizontal">
        <li><a href="https://www.upm.es/">Universidad politecnica</a></li>
        <li><a href="https://www.ucm.es/">Universidad complutense</a></li>
        <li><a href="https://www.urjc.es/">Universidad rey juancarlos</a></li>
      </ul>
    </nav>
)


//Otras forma de exportar la funcion
/*
export const Nav = () => {
    return<nav>
      <ul>
        <li><a href="#https://www.upm.es/">Universidad politecnica</a></li>
        <li><a href="#https://www.ucm.es/">Universidad complutense</a></li>
        <li><a href="#https://www.urjc.es/">Universidad rey juancarlos</a></li>
      </ul>
    </nav>
}
*/



/*export default function nav() {
    return(
        <nav>
        <ul>
          <li><a href="#https://www.upm.es/">Universidad politecnica</a></li>
          <li><a href="#https://www.ucm.es/">Universidad complutense</a></li>
          <li><a href="#https://www.urjc.es/">Universidad rey juancarlos</a></li>
        </ul>
      </nav> 
    )
} 
*/


//rfc, rfca --acceso rapido a estructuras para exportar funciones, rafc(exportar parametros entre componentes)





