"use client"
import { useState } from "react";
import Contador from "./Contador.js";
import Frente from "./Frente.js";
import Verso from "./Verso.js";


export default function Home() {
  const [lado, setLado] = useState(true)

  return (
    <section>
      <Contador />
      <button onClick={() => { lado == true ? setLado(false) : setLado(true) }}>Frente/Verso</button>
      {lado === true ? <Frente /> : <Verso />}
    </ section >
  );
}
