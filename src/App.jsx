import "./index.css";
import reRender from "./assets/re-render.svg";
import logo2137 from "./assets/logo2137.png";

  
const StronaGlowna = () => {
  return (
    <>
      <div className="sekcja-powitalna">
        <div className="wiersz-powitalny">
          <div className="tresc-powitalna">
            <h1>Witaj w</h1>
            <img className="napis-re-render" src={reRender} alt="Re-render" />
            <h2 className="opis-strony">storny internetowe na zawołanie</h2>
          </div>

          <img src={logo2137} className="logo-glowne" alt="Logo 2137" />
        </div>

      </div>
      <div className="powitanie22">
        <p>W re-render zajmujemy się </p>
        <div className="powitanie22-22">
                  <p>re-render to jedno-osobowa firma zajmująca się robieniem stron internetowych</p>
        </div>
      </div>
    </>


  );
};

export default StronaGlowna;
