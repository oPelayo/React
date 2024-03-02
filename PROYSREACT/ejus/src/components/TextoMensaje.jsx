import { useState, useEffect } from "react";

const TextoMensaje = () => {
    const [textoMensaje, setTextoMensaje] = useState("")

    const procesarTexto = (evento) => {
        setTextoMensaje(evento.target.value);
    }

    //console.log("Soy un componente");

    useEffect (() => {
        console.log("Soy un componente y estoy montado");
        return () => {
            console.log("Soy un componente y estoy desmontado");
        }
    },[]);

    useEffect (() => {
        console.log("Texto actualizado");
    },[textoMensaje]);

    return (
        <div>
            <input type="text" onChange={procesarTexto}></input>
            <h1>{textoMensaje}</h1>
        </div>
    )
}
export default TextoMensaje;