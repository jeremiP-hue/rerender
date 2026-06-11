import { useEffect, useState } from "react"
import axios from "axios";
import "./Kontakt.css"

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

const Kontakt = () => {
    const [dane, setDane] = useState({
        imie: "",
        telefon: "",
        e_mail: "",
        widomosc: ""
    })
    const [blad, setBlad] = useState("")
    const [bladitem, setBladItem] = useState("")
    const createClassNames = (czyTextarea, wratosc) => {
        let classNames = czyTextarea ? "kontakt-textarea" : "kontakt-input"
        if (bladitem == wratosc) {
            classNames += " kontakt-blad"
        }
        return classNames;
    }
    const creATEparams = (placeholder, wratosc, czyTextarea) => ({

        className: createClassNames(czyTextarea, wratosc),
        placeholder,
        value: dane[wratosc],
        onChange: (e) => setDane(d => ({ ...d, [wratosc]: e.target.value }))

    })
    const przesli = () => {
        console.log("ok")

        let isError = false
        if (dane.imie.length < 5 && dane.imie.includes(" ")) {
            isError = true;
            setBlad("podaj imie i nazwisko")
            setBladItem("imie")
        }
        if (!dane.e_mail.includes("@")) {
            isError = true;
            setBlad("podaj poprawny email")
            setBladItem("e_mail")
        }
        if (isError = false) {
            axios
                .post(`${apiBaseUrl}/contact`, dane)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                    setDane({
                        imie: "",
                        telefon: "",
                        e_mail: "",
                        widomosc: ""
                    })
                })
                .finally(() => {
                    console.log("ufghijsdfghiusdhjkfshjikfbhjk")
                });
        }
    }


    return (
        <div className="kontakt">
            <h1 className="kontakt-naglowek">Witaj jeżeli jesteś zainteresowany moimi usługami</h1>
            <img className="kontakt-obrazek"></img>
            <input {...creATEparams("Imie i Nazwisko", "imie")}></input>
            <input {...creATEparams("e-mail", "e_mail")}></input>
            <input {...creATEparams("telefon ", "telefon")}></input>


            <textarea {...creATEparams("wiadomość", "widomosc", true)}></textarea>
            <button className="kontakt-input kontakt-button" onClick={przesli}>zapisz</button>
            {blad && <p className="kontakt-blad">{blad}</p>}
        </div >
    )
}
export default Kontakt
