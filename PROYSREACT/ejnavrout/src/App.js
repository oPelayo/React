import { Route, Routes } from "react-router-dom";
import ContenedorRouting from "./paginas/ContenedorRouting";
import About from "./paginas/About";
import Home from "./paginas/Home";
import Info from "./paginas/Info";
import Error from "./paginas/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContenedorRouting />}>
          <Route path="about" element={<About />} />
          <Route path="info" element={<Info />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Error;
