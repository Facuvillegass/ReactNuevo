import CadaElementoEnLista from "./CadaElementoEnLista";
import "./estilos.css"
import { useEffect, useState } from "react";

const ListaDeElementos = () => {

  const [peliculas,setPeliculas] = useState([])


  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2VmYWUzNzljMWY5MWYzNDRmNWM1OWIyODBkYjM0MiIsInN1YiI6IjYyZjU1ZWY1ODEzY2I2MDA4MDZlZWIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1drkM7lj2VldaVmF1RTk18XBW8u7EeorzPAufLhp-8", 
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then ((res) => {
        res.json().then((data) => {
          setPeliculas(data.results)
        })
    })
  },[])

  console.log(peliculas);


  return (
    <div>
      <ul className="EstilosListaGeneral">
        {peliculas.map((pelicula)=> {
            return <CadaElementoEnLista key={pelicula.id} pelicula={pelicula}/>
        })}
      </ul>
    </div>
  );
};

export default ListaDeElementos
