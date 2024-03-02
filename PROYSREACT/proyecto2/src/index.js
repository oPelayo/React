import React from 'react';
import ReactDOM from 'react-dom/client';
import { Nav } from './components/Nav/nav';
import { Header } from './components/Header/header';
import { Section } from './components/Section/section';
import { Footer } from './components/Footer/footer';

//Elemento JSX que contiene header,Nav, section y footer
//const txtSaludo ='Mi proyecto React';
//const textoSaludoInicial = 'mi proyecto react';
//const textoMotivacion = 'vamos a por ello';
//const textoAutor = 'Pepito Grillo'
//const nombre = 'pepito';
//const apellido = 'grillo';
//let edad = 27;
//let valoracion = 8.81;
//let estaDisponible = true;

//Array de datos inyectados en las props
const conocimientos = ['Desarrollo','React','Javascript','JSX']

const datosAutor = {
  txtSaludo: "Mi proyecto React",
  textoMotivacion: "vamos a por ello",
  nombre: "Pepito",
  apellido: "Grillo",
  edad: 27,
  valoracion: 8.81,
  estaDisponible:true
}
//Declaracion de la aplicación
const App = () => {
  return (
    <div>
      <Header datosAutor = {datosAutor}
        //txtSaludo = {txtSaludo}
        //textoMotivacion = {textoMotivacion} 
        //nombre = {nombre}
        //apellido = {apellido} 
        //edad = {edad} 
        //valoracion = {valoracion}
        //estaDisponible = {estaDisponible}
      />
      <Nav/>
      <Section conocimientos = {conocimientos}/>
      <Footer/>
    </div>
  );
};

//Reenderizado de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
//root.render([header,section,footer]);
/*
root.render(header);
root.render(section);
root.render(footer);
*/

/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

