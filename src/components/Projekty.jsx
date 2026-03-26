
import { useEffect, useState } from "react";
import logo2137 from "../assets/logo2137.png";

const Projekty = () => {
    useEffect(() => {
        const pobierz = async () => {
            const projektyUrl = "http://localhost:3000/projects"
            const res = await fetch(projektyUrl)
            const projekty = await res.json()
            console.log(projekty)
        }
        console.log('test')
        pobierz()
    }, [])

    const projekty = []

  return (
    <section className="sekcja-projekty">
      <h1>Oto moje Projekty</h1>
      <ul>
        {projekty.map((e) => (
          <li key={`${e.name}-${e.date}`}>
            <h4>{e.name}</h4>
            <h6>{e.description}</h6>
            <a href={e.url} target="_blank" rel="noreferrer">
              to jest link albo nie bo nie wszystkie dzialaja
            </a>
            <img 
              style={{width:"60%"}}
              src={e.img}
              alt={`Podglad projektu ${e.name}`}
            />
            <h6>
              ten projekt zostal zrobiony w {e.date} i jest w statusie {e.state}
            </h6>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projekty;
