import "./Cennik.css";

const Cennik = () => {
    return (
        <div className="tlo-cennika">
            <h1>Cennik test</h1>
            <h2>Cennik startowy</h2>
            <p className="opis-cennika">
                Ceny są orientacyjne i zależą od trudności projektu. Każdą stronę
                wyceniam indywidualnie.
            </p>

            <div className="ceniktabelka">
                <div className="elementy">
                    <h2>Strona one page</h2>
                    <div className="wiersz-cennika">
                        <div className="p-wych">do 4 szerokości ekranu</div>
                        <p className="p-wych-oo">~ 100 zł</p>
                    </div>
                    <div className="wiersz-cennika">
                        <div className="p-wych">do 6 szerokości ekranu</div>
                        <p className="p-wych-oo">~ 150 zł</p>
                    </div>
                </div>

                <div className="elementy">
                    <h2>Dodatki</h2>
                    <div className="wiersz-cennika">
                        <div className="p-wych">dodatkowa podstrona</div>
                        <p className="p-wych-oo">~ 50-100 zł</p>
                    </div>
                    <div className="wiersz-cennika">
                        <div className="p-wych">projekt graficzny od zera</div>
                        <p className="p-wych-oo">~ 100 zł</p>
                    </div>
                    <div className="wiersz-cennika">
                        <div className="p-wych">prosty backend / przesyłanie danych</div>
                        <p className="p-wych-oo">~ 200 zł</p>
                    </div>
                </div>

                <div className="elementy">
                    <h2>Strona dla firmy</h2>
                    <div className="wiersz-cennika">
                        <div className="p-wych">prosta strona firmowa</div>
                        <p className="p-wych-oo">od ~ 300 zł</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cennik;
