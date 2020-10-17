import React from "react";
import Board from "./Board/Board";
import BoardProvider from "./Board/BoardContext";

const Game = () => {

  return (
    <>
      <BoardProvider>
        <Board/>
      </BoardProvider>
    </>
  );
};

export default Game;
