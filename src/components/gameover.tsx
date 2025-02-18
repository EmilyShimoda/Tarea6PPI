interface GameProps{
    winner: string;
}

export const GameOver : React.FC<GameProps> = ({winner}) => {
    console.log(winner);
    if(winner == 'M'){
        return (<div></div>);
    }
    else 
    {
        return (
            <>
            <div className="absolute bg-[#0009] w-screen h-screen z-[1] top-0 flex items-center justify-center">
            <div className="bg-white rounded-xl w-[70vw] h-[50vh] flex flex-col justify-center items-center gap-[50px]">

                <h1 className="autour-one-regular text-7xl text-[#80a797] text-center">
                    {(winner == "D") ? "It's a draw!" : winner + " wins  the game!"}
                </h1>

                <button className="rounded-md shadows-into-light-regular bg-[#ee7f68] p-2 text-[#fff9f2] text-4xl w-[150px]" onClick={refreshPage}>
                    Restart
                </button>
            </div>
            </div>
            </>
        );
    }
} 

function refreshPage(){ 
    window.location.reload(); 
}