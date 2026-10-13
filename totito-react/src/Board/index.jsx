import Modal from "../Modal"
import { useState } from "react"
import "./Board.css"

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

function calculateWinner (board) {

    for (let i = 0; i < winningConditions.length; i++) {
        
        const index = winningConditions[i]
        const a = board[index[0]]
        const b = board[index[1]]
        const c = board[index[2]]

        if ( a === null || b === null || c === null) {
            continue
        }

        if ( a === b && b === c) {
            return a 
        }
    }
    return null
}

function Board () {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)

    function handleClick (index) {

        if (board[index] || winner) {
            return
        }
        
        const newBoard = [...board]

        newBoard[index] = isXNext ? "X" : "O"

        setBoard(newBoard)

        setIsXNext(!isXNext)
    }

    function handleRestart () {
            setBoard(Array(9).fill(null))
            setIsXNext(true)
    }

    const winner = calculateWinner(board)
    const isDraw = !winner && board.every( c => c !== null)

    return (
        <div className="game">

            <article className="game__message">
                <h2>El turno es para <span className="game__turn">{isXNext ? "X" : "O"}</span></h2>
            </article>
    
            <section className="game__board">
                {board.map( (value, index) => (
                    <button onClick={() => handleClick(index)} key={index} className="cell">{value}</button>
                ))} 
            </section>

            { (winner || isDraw) && <Modal winner={winner} isDraw={isDraw} onRestart={handleRestart} />}
        </div>
    )
}

export default Board