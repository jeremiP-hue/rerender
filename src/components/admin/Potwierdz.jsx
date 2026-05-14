import Popup from "./Popup"
const Potwierdz = ({ idDoUsuniencia, deletee, setIdDoUsuniencia}) => {
    return(
        <Popup>
            <p>czy usuwasz</p>
            <button onClick={() => {deletee(idDoUsuniencia); setIdDoUsuniencia(null)}}>tak</button>
            <button onClick={() => setIdDoUsuniencia(null)}>nie</button>

        </Popup>
    )
}
export default Potwierdz