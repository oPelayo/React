import './footer.css';

const fecha = new Date();
const textoVersion = "Version1";
const textoFooter = textoVersion + " ---- " + fecha;
//Elemento para el footer
export const Footer = ()=> {
    return <footer>
      <p>{textoFooter}</p>
    </footer>
  }