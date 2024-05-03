import React from 'react'
import styled, { css } from 'styled-components'

export default function MiBoton3() {

  const BotonProp = styled.button `
    backgrond-color: cyan;
    color: red;
    padding: 15px 35px
    border-radious: 5px;

    ${props => props.naranjito && css `
        background: orange;
        color: blue;    
    `}
  
  `;

  return (
    <div>
      <BotonProp>Boton Normal</BotonProp>
      <BotonProp naranjito>Boton Naranjito</BotonProp>
    </div>
  )
}
