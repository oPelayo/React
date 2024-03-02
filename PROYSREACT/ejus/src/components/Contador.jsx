import { useState } from "react";

const Contador = () => {
   
    const [numero, setNumero] = useState(0);
    const incrementar = () =>{
       setNumero(numero+1);
    }

    const duplicar = () => {
        setNumero( numero * 2 );
    }
    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <br></br>
            <button onClick = {duplicar}>Duplicar</button>
        </div>
    )
}
export default Contador;


