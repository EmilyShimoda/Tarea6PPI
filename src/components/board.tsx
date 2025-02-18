
"use client";
import Square from "./square";
import GameOver from "./gameover";
// import { useState } from "react";

export default function Board (xTurn: boolean, squares: Array<string>, onPlay){
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

    const winner = calculateWinner(squares);
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
                {Square(squares[0], ()=>handleClick(0))}
                {Square(squares[1], ()=>handleClick(1))}
                {Square(squares[2], ()=>handleClick(2))}
            </div>

             <div>
                {Square(squares[3], ()=>handleClick(3))}
                {Square(squares[4], ()=>handleClick(4))}
                {Square(squares[5], ()=>handleClick(5))}
            </div>

            <div>
                {Square(squares[6], ()=>handleClick(6))}
                {Square(squares[7], ()=>handleClick(7))}
                {Square(squares[8], ()=>handleClick(8))}
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
    
    let draw = true;
    for(let i = 0; i < 9; i++){
        if(squares[i] == "M") {
            draw = false;
        }
    }
    return draw ? "D" : "M";
  }