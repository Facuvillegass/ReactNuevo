import { Link } from "react-router-dom";
import Puntuador from "./Puntuador";

const CadaElementoEnLista = ({ pelicula }) => {
    const imagenPelicula = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path
  
    
  return (


    <div>
      <li className="EstilosListaPeliculas">
        <Link to={"/movies/" + pelicula.id}>
        <img className="EstilosImagenPelicula"src={imagenPelicula}/>
        <div>{pelicula.title}</div>
        </Link>
        <Puntuador/>
      </li>
    </div>
  );
};

export default CadaElementoEnLista;
