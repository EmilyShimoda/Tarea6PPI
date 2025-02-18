import clsx from "clsx";
interface SquareProps {
    value: string;  
    onSquareClick: () => void; 
}
  
export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return <button className={
        clsx("text-8xl border-[1px] border-[#c8e9db] size-32 bg-white cherry-bomb-one-regular", 
            {
                "text-white" : value != "X" && value != "O",
                "text-[#fabe9c]" : value == "X",
                "text-[#e0e098]" : value == "O"
            }
        )} onClick={onSquareClick}> 
        {value} 
    </button>;
}