import Popup from "./Popup"
import { Link } from "react-router";
import { useState } from "react"
const Zaloguj = ({ zaloguj }) => {
    const [password, setPassword] = useState()
    const sprawdz = () => {
        if (password == "OK") {
            zaloguj()

        }

    }

    return (
        <Popup>
            <p>czy to ty</p>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="podaj hasło" />
            <button onClick={sprawdz} >zaloguj</button>
            <Link to="/"> jeżęli to nie ty to wruć na stronę głuwną</Link>

        </Popup>
    )
}
export default Zaloguj