
import { useEffect, useState } from "react";

const Projekty = () => {
    const [projekty, setProjekty] = useState([])


    useEffect(() => {
        const pobierz = async () => {
            const projektyUrl = "http://localhost:3000/projects"
            const res = await fetch(projektyUrl)
            const projektys = await res.json()
            setProjekty(p => projektys)
        }
        console.log('test')
        pobierz()
    }, [])


  return (
    <section className="sekcja-projekty">
      <h1>Oto moje Projekty</h1>
      <ul className="lista-projektow">
        {projekty.map((e) => (
          <li key={`${e.name}-${e.date}`} className="karta-projektu">
            <h4 className="tytul-projektu">{e.name}</h4>
            <p className="opis-projektu">{e.description}</p>
            <a className="link-projektu" href={e.url} target="_blank" rel="noreferrer">
              to jest link albo nie bo nie wszystkie dzialaja
            </a>
            <img 
              className="obraz-projektu"
              src={e.img}
              alt={`Podglad projektu ${e.name}`}
            />
            <p className="meta-projektu">
              ten projekt zostal zrobiony w {e.date} i jest w statusie {e.state}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projekty;
