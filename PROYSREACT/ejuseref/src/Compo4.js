import React, {useRef} from 'react';


const Compo4 = () => {
    const ref = useRef(null); 
    const onClick = () => {
        ref.current.style.backgroundColor = 'blue';
        ref.current.style.padding = '40px';
        ref.current.style.textAlign = 'center';
       
    };
    return (
        <div>
            <h1> Cambiamos estilo del DOM con useRef</h1>
            <h1 ref={ref}>Dar estilo</h1>
            <input type='text' ref={ref}/>
            <br/>
            <button onClick={onClick}>dale estilo</button>
        </div>
    );
};
export default Compo4;