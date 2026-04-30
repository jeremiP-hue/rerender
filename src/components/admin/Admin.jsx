import { useEffect, useState } from "react";
const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
import ProjektEditor from "./Projekteditor";

/*
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    top: 0;
    z-index: 999999999999999999;
*/

const Admin = () => {
    const [projekty, setProjekty] = useState([])
    const [openProjket, setOpenProjket] = useState()
    useEffect(() => {
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

        pobierz();
    }, []);
    return (
        
    <section className="sekcja-projekty">
        
            
        { openProjket && <ProjektEditor openProjket={openProjket} onClose={() => setOpenProjket(null)}/> }
      <ul className="lista-projektow">
        {projekty.map((e) => {

          return (
            <li key={`${e.name}-${e.date}`} className="karta-projektu">
              <button onClick={() => setOpenProjket(e)}>otworz projekt</button>
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