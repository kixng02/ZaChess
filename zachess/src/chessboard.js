// src/components/Chessboard.js
import React, { useState } from "react";
import Chessboard from "react-chessboard";
import { Chess } from "chess.js";

const ChessGame = () => {
  const [game, setGame] = useState(new Chess()); // Initialize chess.js instance

  // Handle piece movement
  const onDrop = (sourceSquare, targetSquare) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Always promote to a queen for simplicity
    });

    // If the move is illegal, reset the board
    if (move === null) return false;

    // Update the game state
    setGame(new Chess(game.fen()));
    return true;
  };

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <h1>Chess App</h1>
      <Chessboard
        position={game.fen()} // Pass the current board position
        onPieceDrop={onDrop} // Handle piece drops
        boardWidth={600} // Set board size
      />
      <button
        onClick={() => {
          setGame(new Chess()); // Reset the game
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default ChessGame;