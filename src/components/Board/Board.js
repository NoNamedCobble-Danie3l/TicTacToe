import React from "react";
import Square from "./Square/Square.js";
import { Wrapper } from "./BoardStyle.js";
const Board = ({ state }) => {
  return (
    <Wrapper>
      {state.map((s, i) => (
        <Square key={i} dataValue={i} />
      ))}
    </Wrapper>
  );
};

export default Board;
