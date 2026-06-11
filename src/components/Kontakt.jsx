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

    const creATEparams = (placeholder, wratosc, czyTextarea) => ({
        
        className:  czyTextarea ? "kontakt-textarea" : "kontakt-input",
        placeholder,
        value: dane[wratosc],
        onChange: (e) => setDane(d => ({ ...d, [wratosc]: e.target.value }))

    })
    const przesli = () => {


        let isError = false
        if(imie =){ isError = true}
    if(isError = false)
    {axios
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
  });}
}


    return (
        <div className="kontakt">
            <h1 className="kontakt-naglowek">Witaj jeżeli jesteś zainteresowany moimi usługami</h1>
            <img className="kontakt-obrazek"></img>
            <input {...creATEparams("Imie i Nazwisko", "imie")}></input>
            <input {...creATEparams("e-mail", "e_mail")}></input>
            <input {...creATEparams("telefon ", "telefon")}></input>


            <textarea {...creATEparams("wiadomość", "widomosc", true )}></textarea>
            <button className="kontakt-input kontakt-button" onClick={przesli}>zapisz</button>
        </div >
    )
}
export default Kontakt
