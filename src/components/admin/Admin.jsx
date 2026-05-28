import { useEffect, useState } from "react";
const apiBaseUrl = import.meta.env.VITE_API_URL || "https://backrerender.vercel.app";
import ProjektEditor from "./ProjektEditor.jsx";
import "./admin.css"
import Potwierdz from "./Potwierdz.jsx";
import Zaloguj from "./Zaloguj.jsx";
const emptyProject = {
  "name": "",
  "description": "",
  "url": "",
  "img": "",
  "date": "",
  "state": ""
}

const Admin = () => {
  const [projekty, setProjekty] = useState([])
  const [openProjket, setOpenProjket] = useState()
  const [errorr, seterrorr] = useState("")
  const [idDoUsuniencia, setIdDoUsuniencia] = useState()
  const [CzyNieToty, SetCzyNieToty] = useState(!sessionStorage.getItem('czyZalogowano'))//pobierane z sessionstorage
  //funkcja zapisujaca


  const zaloguj = () => {
    SetCzyNieToty(false)
    sessionStorage.setItem("czyZalogowano", true)
  }

  const wyloguj = () => {
    SetCzyNieToty(true)
    sessionStorage.setItem("czyZalogowano", false)
  }

  const pobierz = async () => {
    try {
      const projektyUrl = `${apiBaseUrl}/projects`;
      const res = await fetch(projektyUrl);

      if (!res.ok) {
        throw new Error("Nie udaĹ‚o siÄ™ pobraÄ‡ projektĂłw.");
      }

      const projektys = await res.json();
      setProjekty(projektys);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    pobierz();
  }, []);

  const update = (name, value) => setOpenProjket(o => ({ ...o, [name]: value }))
  const close = () => setOpenProjket(null)




  const save = async () => {
    if (!/^\d+$/.test(openProjket.date)) {
      seterrorr("wpisz liczbę ")
      return
    }
    if (openProjket.id == null) {
      try {
        const projektyUrl = `${apiBaseUrl}/project`;
        const res = await fetch(projektyUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(openProjket)
        });

        if (!res.ok) {
          throw new Error("Nie udało‚o się pobrać projektĂłw.");
        }

        pobierz()
      }
      catch (error) {
        console.error(error);
      }
      close()
    }
    else {
      try {
        const projektyUrl = `${apiBaseUrl}/project/${openProjket.id}`;
        const res = await fetch(projektyUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(openProjket)
        });

        if (!res.ok) {
          throw new Error("Nie udaĹ‚o siÄ™ pobraÄ‡ projektĂłw.");
        }

        pobierz()
      }
      catch (error) {
        console.error(error);
      }
      close()
    }
  }


  const deletee = async (id) => {
    try {

      const projektyUrl = `${apiBaseUrl}/project/${id}`;

      const res = await fetch(projektyUrl, {
        method: "DELETE",
      });



      if (!res.ok) {
        throw new Error("Nie udało‚o się™ pobraać projektółw.");
      }


      pobierz()

    }


    catch (error) {
      console.error(error);
    }
  }

  return (
    CzyNieToty ? <Zaloguj zaloguj={zaloguj}/> :
    <section className="sekcja-projekty">
      <button onClick={() => setOpenProjket(emptyProject)} className="nowyprojekt">otworz projekt</button>
      <button onClick={wyloguj}>wyloguj</button>


      {openProjket && <ProjektEditor openProjket={openProjket} update={update} save={save} onClose={close} errorr={errorr} />}
      {idDoUsuniencia && <Potwierdz idDoUsuniencia={idDoUsuniencia} deletee={deletee} setIdDoUsuniencia={setIdDoUsuniencia} />}


      <ul className="lista-projektow">
        {projekty.map((e) => {

          return (
            <li key={`${e.name}-${e.id}`} className="karta-projektu">
              <button onClick={() => setOpenProjket(e)}>otworz projekt</button>
              <button onClick={() => setIdDoUsuniencia(e.id)} className="usun">usuń</button>
              <h4 className="tytul-projektu">{e.name}</h4>
              <p className="opis-projektu">{e.description}</p>
              <a className="link-projektu" href={e.url} target="_blank" rel="noreferrer">
                To jest link, ale nie wszystkie działają
              </a>
              <img
                className="obraz-projektu"
                src={e.img}
                alt={`Podgląd projektu ${e.name}`}
              />
              <p className="meta-projektu">
                Ten projekt został‚ zrobiony w {e.date} i jest w statusie {e.state}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  )
}
export default Admin
