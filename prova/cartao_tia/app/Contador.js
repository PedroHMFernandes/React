"use client"
import { useState } from "react"


const Contador = () => {

    const [num, setNum] = useState(0);
    return (
        <div>
            <button onClick={() => setNum(num + 1)}>
                +
            </button>
            <p>{num}</p>
            <button onClick={() => setNum(num - 1)}>
                -
            </button>

        </div>
    )
}

export default Contador