import { useEffect, useState } from "react";
import ConsultarEmpleados from "./ConsultarEmpleados";
import ColeccionEmpleados from "./ColeccionEmpleados";

const ContenedorElementos = () => {
    const [empleados, setEmpleados] = useState([]);  
    
    useEffect(() => {  
      
      ConsultarEmpleados().then((resultado) => {  
        setEmpleados(resultado);  
        console.log(empleados);  
      });  
    }, []);

    return (
  
      <div>  
       <ColeccionEmpleados empleados = {empleados}/> 
      </div>  
    );  
  };

 export default ContenedorElementos;
  
  
  
  
  
  
  