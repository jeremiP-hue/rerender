import { Link } from "react-router";
import logo from "./logo.png";
import "./Nawigacja.css";

const Nawigacja = () => {
  return (
    <header className="pasek-nawigacji">
      <nav className="linki-nawigacji">
        <Link to="/" className="link-nawigacji">
          O mnie
        </Link>
        <Link to="/kontakt" className="link-nawigacji">
          Kontakt
        </Link>
        <Link to="/projekty" className="link-nawigacji">
        Projekty
        </Link>
        <Link to="/cennik" className="link-nawigacji">Cennik</Link>
      </nav>
      <div className="logo-nawigacji">
        <img src={logo} alt="Logo strony" />
      </div>

    </header>
  );
};

export default Nawigacja;
