// Importa las dependencias necesarias
import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Personaje from '../components/Personaje/Personaje'; // Asegúrate de tener la ruta correcta a tu componente Personaje

// Define la página ApiDisney
const ApiDisney = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ mt: 6, mb: 3, ml: 10, color: 'text.secondary', justifyContent: 'center' }}> 
        {'ApiDisney con Material UI '}
      </Typography>
      <Personaje />
      <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
        {'Creo que tumbamos el servidor de Apidisney alguno de nosotros en '}
        <Link href="https://status.disneyapi.dev/">Febrero</Link>
        {' mientras practicabamos.'}
      </Typography>
    </div>
  );
}

export default ApiDisney;
