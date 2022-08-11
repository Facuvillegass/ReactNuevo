import movieDetail from "./dataUnaMovie.json"
import "./estilos.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const CadaElementoEnDetalle = () => {
    const {movieId} = useParams()
    const [idMovie,setIdMovie] = useState(null)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2VmYWUzNzljMWY5MWYzNDRmNWM1OWIyODBkYjM0MiIsInN1YiI6IjYyZjU1ZWY1ODEzY2I2MDA4MDZlZWIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1drkM7lj2VldaVmF1RTk18XBW8u7EeorzPAufLhp-8", 
            "Content-Type": "application/json;charset=utf-8"
          }
        }).then ((res) => {
            res.json().then((data) => {
             setIdMovie(data)
            })
        })
      },[movieId])

      
    const imagenPelicula = "https://image.tmdb.org/t/p/w300" + idMovie?.poster_path

   
    return (
        <div className="detalleCadaMovie">
           <img src={imagenPelicula} className="col movieImage"/>
           <div className="col">
           <h2>{idMovie?.title}</h2>
           <h4 className="overviewMovie">{idMovie?.overview}</h4>
           <h5>Date: {idMovie?.release_date}</h5>
           </div>
        </div>
    )
}

export default CadaElementoEnDetalle