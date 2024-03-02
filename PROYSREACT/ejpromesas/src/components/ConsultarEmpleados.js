import datosEmpleados from "../data/empleados.json";

export const ConsultarEmpleados = () => {
  return new Promise((resolve, reject) => {
    resolve(datosEmpleados);
    });
};
  
  export default ConsultarEmpleados;
  