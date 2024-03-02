import React, {useRef} from 'react';


const Compo2 = () => {
    const ref = useRef(null); 
    const onClick = () => {
        ref.current.focus();
    }
    return (
        <div>
            <h1>llevar el foco a un elemento con useRef</h1>
            <input type='text' ref={ref}/>
            <br/>
            <button onClick={onClick}>Obtener Dato</button>
        </div>
    );
};
export default Compo2;