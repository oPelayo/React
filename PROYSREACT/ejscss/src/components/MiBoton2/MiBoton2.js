import React from 'react'
import styled from 'styled-components'

export default function MiBoton2() {
    const Boton = styled.button `
        background-color: cyan;
        color: red;
        padding: 10px 35px;
        border: green solid;
        border-radious: 5px;
        
    `;

  return (
    
      <Boton>Haz click aqui</Boton>
    
  )
}
