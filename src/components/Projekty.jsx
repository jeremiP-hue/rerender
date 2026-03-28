import { useEffect, useState } from "react";

const apiBaseUrl = import.meta.env.VITE_API_URL || "https://backrerender.vercel.app";

const Projekty = () => {
  const [projekty, setProjekty] = useState([]);
  const [bladLadowania, setBladLadowania] = useState("");

  useEffect(() => {
    const pobierz = async () => {
      try {
        const projektyUrl = `${apiBaseUrl}/projects`;
        const res = await fetch(projektyUrl);

        if (!res.ok) {
          throw new Error("Nie udalo sie pobrac projektow.");
        }

        const projektys = await res.json();
        setProjekty(projektys);
      } catch (error) {
        console.error(error);
        setBladLadowania(
          error instanceof Error ? error.message : "Nie udalo sie pobrac projektow.",
        );
      }
    };

    pobierz();
  }, []);

  return (
    <section className="sekcja-projekty">
      <h1>Oto moje Projekty</h1>
      {bladLadowania ? <p className="meta-projektu">{bladLadowania}</p> : null}
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
