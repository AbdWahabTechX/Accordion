import { useState } from "react";

export const QAndAns = ({curEle, isActive, setActive}) => {
    const {id, question, answer} = curEle;
   
    const handleToggle = (id) =>{
        setActive((prevId) => (prevId === id ? false : id));

    }
    return(
        <li key={id}>
         <h2> {question} </h2>
         <button onClick={() => handleToggle(id)}> {isActive === id ? "▲ ":  "▼"} </button>
         <p> { isActive === id && answer} </p>
         </li>
    )
}
