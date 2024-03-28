import { MdSwitchLeft } from "react-icons/md";

export default function Verso(props) {
    return (
        <section className="card">
            <h1>Mackenzie</h1>
            <div className="ca">
            </div>
            <button onClick={props.toggleSide}>
                <MdSwitchLeft size={30} />

            </button>
        </ section>
    );
}