import Game from "@/components/game";

export default function Home() {
  return (
    <div className="bg-[url(/6584811.jpg)] bg-center bg-cover h-screen">
      <h1 className="modak-regular text-8xl pt-[40px] text-center mb-[20px] text-[#ee7f68]">
        Tic Tac Toe
      </h1>
      <Game/>
    </div>
  );
}
