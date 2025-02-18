import clsx from "clsx";

export default function Square (value: string, onSquareclick = ()=>{}){
    return <button className={
        clsx("text-8xl border-[1px] border-[#c8e9db] size-32 bg-white cherry-bomb-one-regular", 
            {
                "text-white" : value != "X" && value != "O",
                "text-[#fabe9c]" : value == "X",
                "text-[#e0e098]" : value == "O"
            }
        )} onClick={onSquareclick}> 
        {value} 
    </button>;
}