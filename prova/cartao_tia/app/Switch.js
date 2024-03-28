"use client"
import { useState } from "react";
import Frente from "./Frente.js";
import Verso from "./Verso.js";

export default function Switch(props) {

    const [lado, setLado] = useState(true)
    function trocaLado() {
        setLado(!lado)
    }

    return lado ? (<Frente toggleSide={trocaLado} />) : (<Verso toggleSide={trocaLado} />)
}