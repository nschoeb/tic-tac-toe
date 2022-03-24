import React from "react";
import ReactDOM from "react-dom";

import './index.css';

const Square = () => {
  return (
    <div style={{
      backgroundColor:'gold',
      margin:10,
      padding:20,
    }}>
      Square
    </div>
  );
};

const Board = () => {
  return (
    <div style={{
      backgroundColor:'turquoise',
      margin:10,
      padding:20,
    }}>
      <Square />
    </div>
  )
}

const Game = () => {
    return (
        <div style={{
          backgroundColor:'bisque',
          margin:10,
          padding:20,  
        }}>
            <Board />
        </div>
    )
};

ReactDOM.render(
  <Game />,
    document.getElementById('root')
);