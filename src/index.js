import React, {useState} from "react";
import ReactDOM from "react-dom";

import './index.css';

const Square = (props) => {
  return (
    <button 
      className="square"
      onClick={props.onClickEvent}
      >
      {props.value}
    </button>
  );
};

const Board = () => {
 
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);

const handleClickEvent = (index) => {
  //1 make a copy of the squares state array
  const newSquares = [...squares];
  //2 mutate the copy, setting the i element to "X"
  newSquares[index] = "X";
  //3 call t he setSquares function with the mutated copy
  setSquares(newSquares);

}
  const renderSquare = (index) => {
    return (
      <Square 
      value={squares[index]}
      onClickEvent={() => handleClickEvent(index)}
      />
    )
  }

  return (
    <div style={{
      backgroundColor:'turquoise',
      margin:10,
      padding:20,
    }}>
      Board
      <div className="board-row">
        {renderSquare(0)}        {renderSquare(1)}        {renderSquare(2)}
        </div>
        <div className="board-row">
        {renderSquare(3)}        {renderSquare(4)}        {renderSquare(5)}
        </div>
        <div className="board-row">
        {renderSquare(6)}        {renderSquare(7)}        {renderSquare(8)}
        </div>
    </div>
  )
}

const Game = () => {
    return (
        <div className="game">
            Game
            <Board />
        </div>
    )
};

ReactDOM.render(
  <Game />,
    document.getElementById('root')
);