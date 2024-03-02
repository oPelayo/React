import React, {useRef} from 'react';


const Compo1 = () => {
    const ref = useRef(null); 
    const onClick = () => {
        let valorInput = ref.current.value;
        alert(valorInput);
    };
    return (
        <div>
            <h1>Utilizando datos Input no seleccionado, usandpo useRef</h1>
            <input type='text' ref={ref}/>
            <br/>
            <button onClick={onClick}>Obtener Dato</button>
        </div>
    );
};
export default Compo1;