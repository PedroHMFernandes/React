import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa.js";
import Botao from "../Botao/Botao.js";
import { useState } from "react";

const Formulario = () => {

    const [nome, setNome] = useState();
    const [cargo, setCargo] = useState();
    const [imagem, setImagem] = useState();
    //  const [time, setTime] = useState();

    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "DevOps",
        "UX e Desing",
        "Mobile",
        "Inovação e Gestão",
    ];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log(nome, cargo, imagem)
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" obrigatorio={true} valor={nome} aoAlterado={setNome} />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" obrigatorio={true} valor={cargo} aoAlterado={setCargo} />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={setImagem} />
                <ListaSuspensa label="Time" itens={times} />
                <Botao> Criar um card </Botao>
            </form>
        </section>
    );
};

export default Formulario;