import { useEffect, useState } from "react";

const apiBaseUrl = import.meta.env.VITE_API_URL || "https://backrerender.vercel.app";

const normalizujUrlProjektu = (url) => {
  if (!url) {
    return "";
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `https://${url}`;
};

const Projekty = () => {
  const [projekty, setProjekty] = useState([]);
  const [bladLadowania, setBladLadowania] = useState("");

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
      } catch (error) {
        console.error(error);
        setBladLadowania(
          error instanceof Error ? error.message : "Nie udało się pobrać projektów.",
        );
      }
    };

    pobierz();
  }, []);

  return (
    <section className="sekcja-projekty">
      <h1>Oto moje projekty</h1>
      {bladLadowania ? <p className="meta-projektu">{bladLadowania}</p> : null}
      <ul className="lista-projektow">
        {projekty.map((e) => {
          const urlProjektu = normalizujUrlProjektu(e.url);

          return (
            <li key={`${e.name}-${e.date}`} className="karta-projektu">
              <h4 className="tytul-projektu">{e.name}</h4>
              <p className="opis-projektu">{e.description}</p>
              <a className="link-projektu" href={urlProjektu} target="_blank" rel="noreferrer">
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
  );
};

export default Projekty;
