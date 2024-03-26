import './Colaborador.css';

const Colaborador = (props) => {

    return (
        <div className='colaborador' style={props.style} >
            <img src={props.imagem} alt='Foto do colaborador' className='cabecalho' />
            <div className='rodape' >
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;