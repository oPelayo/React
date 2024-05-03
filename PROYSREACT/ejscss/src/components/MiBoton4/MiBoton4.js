import React from 'react'
import styled from 'styled-components'

export default function MiBoton4() {
    const BotonInicial = styled.button `
        background-color: cyan;
        color: red;
        padding: 10px 35px;
        border: green solid;
        border-radius: 5px;
        
    `;

    const Verderon = styled(BotonInicial) `
    background-color: green;
    color: black;
        
    `;


  return (
    <div>
        <BotonInicial>Haz click aqui</BotonInicial>
        <Verderon>Boton Extendido</Verderon> 
    </div>
      
    
  )
}
