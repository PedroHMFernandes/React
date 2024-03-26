import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }


    return (
        <div className="campo__texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} required={props.obrigatorio} onChange={aoDigitado} />
        </div>
    )



}




export default CampoTexto;