import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import App from './App.js';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
    <CssBaseline />
  </ThemeProvider>,
);






/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// Instalar material UI
// "npm install @mui/material @emotion/react @emotion/styled"

// Instalar fuente roboto
// "npm install @fontsource/roboto"

// Añadir los imports de la fuente roboto en el punto de entrada (index.js)

// Instalar Material Icons
// "npm install @mui/icons-material"

