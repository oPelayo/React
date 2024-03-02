import React, {useRef} from 'react';


const Compo3 = () => {
    const ref = useRef(null); 
    const onClick = () => {
        let valorH1 = ref.current.textContent;
        alert(valorH1);
        console.log(valorH1);
    };
    return (
        <div>
            <h1>Cojo contenido estatico del DOM con useRef</h1>
            <h1 ref={ref}>Coger contenido de elemento del DOM</h1>
            <br/>
            <button onClick={onClick}>Obtener Contenido</button>
        </div>
    );
};
export default Compo3;