import React, { useState } from 'react';
import './App.css';

function App() {
  const [mark, setMark] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState("No winner");

  const checkWinner = (mark) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of winPatterns) {
      if (mark[a] && mark[a] === mark[b] && mark[a] === mark[c]) {
        setWinner(mark[a]);
        return;
      }
    }
  };

  const clickHandler = (idx) => {
    if (mark[idx] || winner !== "No winner") return;

    const newMark = [...mark];
    newMark[idx] = isX ? 'X' : 'O';
    setMark(newMark);
    setIsX(!isX);
    checkWinner(newMark);
  };

  const resetGame = () => {
    setMark(Array(9).fill(null));
    setIsX(true);
    setWinner("No winner");
  };

  return (
    <div className="ttt-app">
      <h1>Tic Tac Toe ✖️⭕</h1>
      <div className="board">
        {mark.map((val, i) => (
          <button key={i} className="cell" onClick={() => clickHandler(i)}>
            {val}
          </button>
        ))}
      </div>
      <h2>{winner === "No winner" ? `Turn: ${isX ? 'X' : 'O'}` : `🎉 Winner: ${winner}`}</h2>
      <button className="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default App;
