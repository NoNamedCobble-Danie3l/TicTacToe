import React, { useState } from "react";
import Board from "./components/Board/Board.js";

const App = () => {
  const [boardState] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <>
      <Board state={boardState} />
    </>
  );
};

export default App;
