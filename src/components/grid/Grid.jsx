import { useState } from "react";
import Card from "../card/Card";
import "../grid/grid.css"
import IsWinner from "../helper/IsWinner";
function Grid({numberOfCard}){
    const [board,setBoard] = useState(Array(numberOfCard).fill(""))
    const [turn,setTurn] = useState(true);
    const [winner, setWinner] = useState(null)
    function play(index){
        if(turn == true){
            board[index] = "0"
        }else{
            board[index] = "X"
        }
        const win = IsWinner(board, turn ? "0" : "X");
        if(win){
           setWinner(win)
        }
        setBoard([...board])
        setTurn(!turn)

    }
    function reset(){
        setBoard(Array(numberOfCard).fill(""))
        setTurn(true)
        setWinner(null)
    }
    return (
      <div className="grid-wrapper">
        {
            winner && (
                <>
                <h1 className="turn-higlight">Winner is {winner}</h1>
                <button onClick={reset}>Reset</button>
                </>
            )
        }
        <h1>Current Turn: {(turn) ? '0' : 'X'}</h1>
          <div className="grid">
            {board.map((ele,idx)=> <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={ele} index={idx}></Card>)}
        </div>

      </div>
    )
}

export default Grid;