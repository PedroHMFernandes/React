import './Time.css';
import Colaborador from '../Colaborador/Colaborador';

const Time = (props) => {
    const cssSection = { backgroundColor: props.corSecundaria };
    const cssH3 = { borderBottomColor: props.corPrimaria };
    const cssColaborador = { backgroundColor: props.corPrimaria };

    return (
        props.colaboradores.length > 0 && <section className='time' style={cssSection}>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    nome={colaborador.nome}
                    imagem={colaborador.imagem}
                    cargo={colaborador.cargo}
                    style={cssColaborador}
                    key={colaborador.nome}
                />
                )}
            </div>
        </section>
    );
}

export default Time;