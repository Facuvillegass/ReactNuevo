import "./estilos.css"
import { useState } from "react"


const Puntuador = () => {
    const [puntuador,setPuntuador] = useState(5)

    const sumarPunto = () => {
      setPuntuador(puntuador + 1)
    }

    const restarPunto = () => {
      if (puntuador <= 1) {
        puntuador = 1
      }
      setPuntuador(puntuador -1)
      
    }
    return (
        <div>
        <button className="btnPuntuador" onClick={sumarPunto}>+</button>
        <p>¡Dale puntos a esta película!</p>
        <h2>{puntuador}</h2>
        <button className="btnPuntuador" onClick={restarPunto}>-</button>
        </div>
    )
}

export default Puntuador