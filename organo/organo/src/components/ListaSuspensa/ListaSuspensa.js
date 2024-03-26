import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoALterado(evento.target.value)}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;

