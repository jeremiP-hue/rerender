import { useState } from "react";
import "./index.css";
import "./app.css";
import reRender from "./assets/re-render.svg";
import logo2137 from "./assets/logo2137.png";
import rece from "./assets/ręce..jpeg";

const StronaGlowna = () => {
  const [krecaceSieLoga, setKrecaceSieLoga] = useState({
    react: false,
    js: false,
  });

  const dodajKlaseKrecenie = (nazwaLogo) => {
    setKrecaceSieLoga((poprzednieLoga) => ({
      ...poprzednieLoga,
      [nazwaLogo]: true,
    }));

    setTimeout(() => {
      setKrecaceSieLoga((poprzednieLoga) => ({
        ...poprzednieLoga,
        [nazwaLogo]: false,
      }));
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
        <p className="p22">
          W re-render zajmujemy się
          <br />
          robieniem stron internetowych
          <br />
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
          <p>re-render to jednoosobowa działalność zajmująca się robieniem stron internetowych</p>
        </div>
      </div>

      <div className="marzenia">
        <h1 className="h33">Poprzez swoje strony internetowe staram się spełniać swoje marzenia</h1>
        <p className="p33">
          Od zawsze moim marzeniem było robić gry.
          <br />
          Kiedy zacząłem uczyć się programowania, zacząłem robić gry w Pythonie,
          <br />
          a potem nauczyłem się robić strony internetowe.
          <br />
          Dzięki pieniądzom ze stron zbieram na komputer i kursy robienia gier.
        </p>      </div>

      <div className="ja">
        <h1 className="czesc">Cześć, tu Jeremi</h1>
        <h2
          className="czesc"
          style={{
            top: "70px",
          }}
        >
          i mam 12 lat
        </h2>

        <div className="karta-ja">
          <img className="rece-zdjecie" src={rece} alt="Ręce" />

          <div className="imie">
            <h1>Jeremi Pińkowski</h1>
          </div>
        </div>

        <p className="opis-ja">
          Uczę się tworzyć strony internetowe, rozwijam się w programowaniu i z
          każdym kolejnym projektem zdobywam nowe doświadczenie. Lubię uczyć się
          nowych rzeczy, testować własne pomysły i krok po kroku stawać się coraz
          lepszy w tym, co robię. Tworzenie stron daje mi dużo satysfakcji, a
          jednocześnie pomaga mi zbliżać się do mojego największego celu, czyli
          robienia własnych gier w przyszłości.
        </p>
      </div>
    </>
  );
};

export default StronaGlowna;
