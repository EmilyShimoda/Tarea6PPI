
"use client";
import { Square } from "./square";
import { GameOver } from "./gameover";
// import { useState } from "react";

export default function Board (xTurn: boolean, squares: Array<string>, onPlay: (nextSquares : Array<string>) => void){
    // const [winner, setWinner] = useState("M");

    function handleClick(i:number){
        if(calculateWinner(squares) != "M" || squares[i] != "M") return ;
        const nextSquares = squares.slice();

        if(xTurn)
            nextSquares[i] = "X";
        else 
            nextSquares[i] = "O";

        onPlay(nextSquares);
    }

    const winner : string = calculateWinner(squares);
    let status: string;
    if (winner != "M") {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xTurn ? "X" : "O");
    }

    return (
        <>
        <GameOver winner={winner}></GameOver>
        <div className="text-center text-4xl shadows-into-light-regular mb-[10px] text-gray-600">
            {status}
        </div>
        <div className="place-self-center border-[8px] border-[#80a797] rounded-md">
            <div>
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
                <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
                <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
            </div>

             <div>
                <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
                <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
                <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
            </div>

            <div>
                <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
                <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
                <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
            </div>
        </div>
        </>
    );
}


function calculateWinner(squares : Array<string>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] != "M" && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    
    if (squares.includes("M")) {
        return "M"; 
    }

    return "D";
  }