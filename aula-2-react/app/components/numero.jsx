"use client"
import { useState } from "react";

export default function Numero( ){
   
    let [num, changeNum] = useState(0);
    
    function clickHandler(){
        changeNum( num + 1);
    }

    return(
        <article className={ parseInt(num)%2==0 ? "par": "impar"}> 
            {num}
            <button onClick={clickHandler}> + </button>
        </article>
    );
}