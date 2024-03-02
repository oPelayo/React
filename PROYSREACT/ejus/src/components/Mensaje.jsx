import { useState } from "react";
import TextoMensaje from "./TextoMensaje";

const Mensaje = () => {
    //Uso de useState, Controlar cambios de estado
    const [mensajeVisible, setMensajeVisible] = useState(true);
    const cambiarVisibilidad = () => {
        setMensajeVisible(!mensajeVisible);
    }

    return (
        <div>
            <br></br>
            <br></br>
            {mensajeVisible && <TextoMensaje/>}{/*O tambien: mensajeVisible && <h1>hola como estas</h1> si es que quieres hacer algo*/}
            <button onClick={cambiarVisibilidad}>{mensajeVisible ? "Ocultar" : "Mostrar"}</button>
            
        </div>
    )
}
export default Mensaje;