import "./App.css";
import ListaDeElementos from "./ListaDeElementos";
import "./estilos.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CadaElementoEnDetalle from "./CadaElementoEnDetalle";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
          <Navbar/>
      </Link>

      <Routes>     
        <Route
          path="/"
          element={
            <div>
              <main>
                <ListaDeElementos />
              </main>
            </div>
          }
        />
        <Route path="/movies/:movieId" element={<CadaElementoEnDetalle/>}></Route>
        <Route path="/*" element={<h2>La ruta no existe</h2>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
