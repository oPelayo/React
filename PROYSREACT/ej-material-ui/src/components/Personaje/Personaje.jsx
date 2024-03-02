import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import  { buttonStyles } from '../common/CommonButton/buttonStyles';
import Typography from '@mui/material/Typography';

/*
//Capturar un endpoint de un personaje y mostrarlo

function Personaje() {

  const [personaje, setPersonaje] = useState();

  useEffect(()=> {
    fetch("http://api.disneyapi.dev/character/308")
    .then((resp) => resp.json())
    .then((datos) =>{
      //console.log(datos);
      setPersonaje(datos);
    })
    
  }, [])

  return (
    <div>
      <h1>{personaje && personaje.data.name}</h1>
      <p>{personaje && personaje.data._id}</p>
      <img src={personaje && personaje.data.imageUrl} alt="Imagen del Personaje" />
    </div>
  );
};

export default Personaje;
*/


//Navegar diferentes endpoints a partir del id 300 usando dos botones


function Personaje() {
    const [personaje, setPersonaje] = useState(null);
    const [currentId, setCurrentId] = useState(300);

    useEffect(() => {
        fetch(`https://api.disneyapi.dev/character/${currentId}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPersonaje(data.data);
            })
            .catch((error) => {
                console.error('Error fetching character:', error);
            });
    }, [currentId]);

    const handleNext = () => {
        setCurrentId((prevId) => prevId + 1);
    };

    const handlePrev = () => {
        if (currentId > 300) {
            setCurrentId((prevId) => prevId - 1);
        }
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='personaje'>
              {personaje && (
                  <div>
                      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                          ID de personaje: {personaje._id}
                      </Typography>
                      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                          Nombre: {personaje.name}
                      </Typography>
                      <img src={personaje.imageUrl} alt="Imagen del Personaje" />
                  </div>
              )}
              <Button
                  sx={buttonStyles}
                  variant="contained"
                  onClick={handlePrev}
                  disabled={currentId <= 300}
              >
                  Anterior
              </Button>
              <Button
                  sx={buttonStyles}
                  variant="contained"
                  onClick={handleNext}
              >
                  Siguiente
              </Button>
          </div>
      </div>
  );
}

export default Personaje;




/* 
//Recibir los datos de un solo endpoint,
//renderizar un personaje y navegarlos todos a traves de los botones 


function Personaje() {
  const [personaje, setPersonaje] = useState(null);
  const [personajes, setPersonajes] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    // Obtener la lista completa de personajes
    fetch('https://api.disneyapi.dev/character')
      .then((resp) => resp.json())
      .then((datos) => {
        setPersonajes(datos.data);
        setPersonaje(datos.data[indiceActual]);
        //console.log(datos)
      });
  }, [indiceActual]);

  const handleNext = () => {
    // Avanzar al siguiente personaje
    setIndiceActual((prevIndice) => (prevIndice + 1) % personajes.length);
  };

  const handlePrev = () => {
    // Retroceder al personaje anterior
    setIndiceActual((prevIndice) =>
      prevIndice === 0 ? personajes.length - 1 : prevIndice - 1
    );
  };

  return (
    <div>
      {personaje && (
        <div>
          <h1>{personaje._id}</h1>
          <p>{personaje.name}</p>
          <img src={personaje.imageUrl} alt="Imagen del Personaje" />
        </div>
      )}
      <button onClick={handlePrev}>Anterior</button>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
}

export default Personaje;
*/