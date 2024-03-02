import React from "react";


function ComponenteHijo({onClickPasado, datosPadre}) {
    return (
        <div>
            <button onClick = {onClickPasado}>Incrementar</button>
            <ComponenteHijo datosHijo={datosPadre}/>
        </div>
    )
}
export default ComponenteHijo;