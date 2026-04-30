import "./ProjektEditor.css"
const ProjektEditor = ({ openProjket, onClose }) => {
    //<input value={} onChange={}/>-->

    return (
        <section className="wrapper">
            <div className="popup">
            <button onClick={onClose}>Zamknij</button>
                <input value={openProjket.name} placeholder="wpisz nową nazwę" />
                <input value={openProjket.url} placeholder="wpisz link"/>
                <input value={openProjket.date} placeholder="wpisz datę utworzenia"/>
                <input value={openProjket.state} placeholder="wpisz stan"/>
                <input value={openProjket.img} placeholder="dodaj url obrazu"/>
                <textarea placeholder="wpisz opis">{openProjket.description}</textarea>
            </div>
        </section>
    )
}
export default ProjektEditor