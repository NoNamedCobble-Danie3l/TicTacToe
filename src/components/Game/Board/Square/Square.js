import React from "react";
import { Button } from "./SquareStyle.js";
const Square = ({value,click}) => {

  return (
    <Button onClick={click}>
      {value}
    </Button>
  );
};

export default Square;
