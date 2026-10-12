import { useState } from "react"
import "./Board.css"

function Board () {

    const [board, setBoard] = useState(Array(9).fill(null))

    function handleClick (index) {
        
        const newBoard = [...board]

        newBoard[index] = "X"

        setBoard(newBoard)
    }

    return (
        <div className="game">

        <article className="game__message">
            <h2>El turno es para <span className="game__turn"></span></h2>
        </article>
    
        <section className="game__board">
            {board.map( (value, index) => (
                <button onClick={() => handleClick(index)} key={index} className="cell">{value}</button>
            ))} 
        </section>
    </div>
    )
}

export default Board