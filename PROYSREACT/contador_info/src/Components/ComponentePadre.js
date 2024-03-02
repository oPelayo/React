import React, { useState } from "react";
import ComponenteHijo from "./ComponenteHijo";

function ComponentePadre() {
    const [numero, SetNumero] = useState();
    const incrementarNum = () => {
        SetNumero(numero+1)
    }
    return (
        <div>
            <h1>{numero}</h1>
            
            <ComponenteHijo onClickPasado ={incrementarNum} datosPadre={numero} />
        </div>
    )
}
export default ComponentePadre;