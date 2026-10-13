import "./Modal.css"

function Modal ({winner, onRestart}) {
    return (
    <section className="endgame" >
        <p className="endgame__text" >¡{winner} ha ganado el juego!</p>
        <p className="endgame__subtext">¿Quieres volver a jugar?</p>
        <button className="btn-restart" onClick={onRestart} >Reiniciar el juego</button>
    </section>
    )
}

export default Modal