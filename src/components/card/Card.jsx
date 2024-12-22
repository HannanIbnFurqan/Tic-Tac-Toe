import Icons from "./Icons";
import './card.css'
function Card({ gameEnd, player, onPlay, index}) { // Accept player as a prop
  return (
    <div className="card" onClick={()=> !gameEnd && player=="" && onPlay(index)}>
      {player === "0" && <Icons name="circle" />}
      {player === "X" && <Icons name="cross" />}
      {player !== "0" && player !== "X" && <Icons name="pen" />}
    </div>
  );
}

export default Card;
