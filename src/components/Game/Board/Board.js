import React, {useContext} from "react";
import Square from "./Square/Square.js";
import { Wrapper } from "./BoardStyle.js";

import {BoardContext} from './BoardContext';


const Board = () => {

  const {boardState} = useContext(BoardContext);
  const {handleUserClick} = useContext(BoardContext);

  return (
    <Wrapper>
      {boardState.map((val, i) => (
        <Square key={i} value={val} click={()=>handleUserClick(i)}/>
      ))}
    </Wrapper>
  );
};

export default Board;
