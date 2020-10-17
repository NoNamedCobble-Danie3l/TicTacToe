import React, { createContext, useState } from 'react';
import {VscClose} from "react-icons/vsc";
import {BsCircle} from "react-icons/bs";

export const BoardContext = createContext();

const BoardProvider = ({children}) =>{

    const [boardState,setBoardState] = useState(["", "", "", "", "", "", "", "", ""]);
    const [currentPlayer,setCurrentPlayer] = useState(<VscClose/>);;


 const handleUserClick = (index) =>{

    if(boardState[index]!==''){
        return;
    }


    const tempState = boardState;
    tempState[index]=currentPlayer;
    setBoardState([...tempState]);

    setCurrentPlayer(prevState=> prevState.type.name==="VscClose" ? <BsCircle/> : <VscClose/>);

}





return (
    <BoardContext.Provider value={{boardState, handleUserClick}}>
        {children}
    </BoardContext.Provider>
    );
};

export default BoardProvider;

