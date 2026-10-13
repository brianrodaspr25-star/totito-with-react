import "./Modal.css"
import {createPortal} from "react-dom"

function Modal ({winner, onRestart, isDraw}) {
    return createPortal (
    <section className="endgame" >
        <p className="endgame__text" >{isDraw ? "¡Empate!" : `¡${winner} ha ganado el juego!`}</p>
        <p className="endgame__subtext">¿Quieres volver a jugar?</p>
        <button className="btn-restart" onClick={onRestart} >Reiniciar el juego</button>
    </section>,
    document.body
    )
}

export default Modal