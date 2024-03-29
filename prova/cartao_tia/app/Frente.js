import { MdSwitchRight } from "react-icons/md";

export default function Frente(props) {
    return (
        <section className="card">
            <h1>Mackenzie</h1>
            <div className="card__conteudo">
                <img src="https://github.com/PedroHMFernandes.png" alt="oi" />
                <div>
                    <p>PEDRO HENRIQUE MANSANO FERNANDES</p>
                    <div className="dif">
                        <p>42303885-5</p>
                        <p>07/2028</p>
                    </div>
                    <p>SISTEMAS DE INFORMACAO</p>
                </div>
            </div>
            <button onClick={props.toggleSide}>
                <MdSwitchRight size={30} />

            </button>
        </ section>
    );
}