import Empleado from "./Empleado";

const ColeccionEmpleados = ({empleados}) => {
    return (
        <div>
            <h1>Informacion de los empleados</h1>
            {empleados.length > 0 && empleados.map((empleado) => {
                    return (
                        <Empleado empleado = {empleado} />
                    )
            })
            }       
        </div>
    );
};
export default ColeccionEmpleados;