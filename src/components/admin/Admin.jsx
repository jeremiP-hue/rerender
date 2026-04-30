import { useEffect, useState } from "react";
const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
import ProjektEditor from "./ProjektEditor.jsx";

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


  const pobierz = async () => {
    try {
      const projektyUrl = `${apiBaseUrl}/projects`;
      const res = await fetch(projektyUrl);

      if (!res.ok) {
        throw new Error("Nie udało się pobrać projektów.");
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
    try {
      const projektyUrl = `${apiBaseUrl}/project`;
      const res = await fetch(projektyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(openProjket),
      });

      if (!res.ok) {
        throw new Error("Nie udało się pobrać projektów.");
      }

      pobierz()
    }
    catch (error) {
      console.error(error);
    }
    close()
  }


  const deletee = async (id) => {
    try {
      const projektyUrl = `${apiBaseUrl}/project/${id}`;
      const res = await fetch(projektyUrl, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Nie udało się pobrać projektów.");
      }

      pobierz()
    }
    catch (error) {
      console.error(error);
    }
  }





  return (
    <section className="sekcja-projekty">
      <button onClick={() => setOpenProjket(emptyProject)}>otworz projekt</button>


      {openProjket && <ProjektEditor openProjket={openProjket} update={update} save={save} onClose={close} />}
      <ul className="lista-projektow">
        {projekty.map((e) => {

          return (
            <li key={`${e.name}-${e.id}`} className="karta-projektu">
              <button onClick={() => setOpenProjket(e)}>otworz projekt</button>
              <button onClick={() => deletee(e.id)}>usuń</button>
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
                Ten projekt został zrobiony w {e.date} i jest w statusie {e.state}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  )
}
export default Admin
