const Empleado = ({empleado}) => {
    return (
        <div>
            <h2>{empleado.first_name}</h2>
            <p>{empleado.age}</p>
            <p>{empleado.descripcion}</p>
            <img src={empleado.image} alt="Imagen del primer empleado"/>
        </div>
    );
}

export default Empleado;