
"use client";
import { useState } from "react";
import Board from "./board";

export default function Game (){
    const [history, setHistory] = useState([Array(9).fill("M")]);
    const [currentMove, setCurrentMove] = useState(0);
    const xTurn = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares : Array<string>){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }
    
    function Return(){
        return (
            <button className="place-self-center shadows-into-light-regular rounded-md bg-[#ee7f68] p-2 text-[#fff9f2] text-4xl w-[150px]" onClick={() => jumpTo(currentMove - 1)}>
                Return
            </button>
        )
    }
    
    return (
        <div className="flex flex-col gap-5">
            <div>{Board(xTurn, currentSquares, handlePlay)}</div>
            {Return()}
        </div>
    );
}