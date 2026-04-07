import { useState } from "react";
import "./index.css";
import reRender from "./assets/re-render.svg";
import logo2137 from "./assets/logo2137.png";


const StronaGlowna = () => {
  const [krecaceSieLoga, setKrecaceSieLoga] = useState({
    react: false,
    js: false,
  });

  const dodajKlaseKrecenie = (nazwaLogo) => {
    setKrecaceSieLoga((poprzednieLoga) => ({
      ...poprzednieLoga,
      [nazwaLogo]: true,

    }
    ));
    setTimeout(() => {
      setKrecaceSieLoga((poprzednieLoga) => ({
        ...poprzednieLoga,
        [nazwaLogo]: false,
      }))
    }, 2000);
  };

  return (
    <>
      <div className="sekcja-powitalna">
        <div className="wiersz-powitalny">
          <div className="tresc-powitalna">
            <h1>Witaj w</h1>
            <img className="napis-re-render" src={reRender} alt="Re-render" />
            <h2 className="opis-strony">strony internetowe dla każdego</h2>
          </div>

          <img src={logo2137} className="logo-glowne" alt="Logo 2137" />
        </div>

      </div>
      <div className="powitanie22">
        <p className="p22">W re-render zajmujemy się<br /> robieniem stron internetowych <br />

        </p>
        <img
          className={`react-logo-blue ${krecaceSieLoga.react ? "kręcenie" : ""}`}
          src="/react-logo-blue.svg"
          alt="React logo"
          onClick={() => dodajKlaseKrecenie("react")}
        />

        <img
          className={`js-logo-blue ${krecaceSieLoga.js ? "kręcenie" : ""}`}
          src="/js-logo-blue.svg"
          alt="Blue JS logo"
          onClick={() => dodajKlaseKrecenie("js")}
        />

        <div className="powitanie22-22">
          <p>re-render to jednoosobowa firma zajmująsca się robieniem stron internetowych</p>
        </div>
      </div>
      <div className="marzenia">
        <h1 className="h33">Poprzez swoje strony internetowe staram się spełniać swoje marzenia</h1>
        <img className="gam33 komputer33" src="/gaming-computer-transparent.svg" alt="Komputer gamingowy" />
        <p className="p33">Od zawsze moim marzeniem było robić gry.<br />
          Kiedy zacząłem uczyć się programowania
          zacząłem robić gry w Pythonie,<br /> a potem nauczyłem się robić strony internetowe.
          <br />Dzięki pieniądzą ze stron zbiram na kopputer i kursy robienia gier</p>
        <img className="gam33 konsola33" src="/console-transparent.svg" alt="Konsola do gier" />


      </div>
    </>


  );
};

export default StronaGlowna;
