import "./ProjektEditor.css"
const ProjektEditor = ({ openProjket, onClose, update, save }) => { 

    return (
        <section className="wrapper">
            <div className="popup">
                <button onClick={onClose}>Zamknij</button>
                <input value={openProjket.name} onChange={(e) => update('name', e.target.value)} placeholder="wpisz nową nazwę" />
                <input value={openProjket.url} onChange={(e) => update('url', e.target.value)} placeholder="wpisz link" />
                <input value={openProjket.date} onChange={(e) => update('date', e.target.value)} placeholder="wpisz datę utworzenia" />
                <input value={openProjket.state} onChange={(e) => update('state', e.target.value)} placeholder="wpisz stan" />
                <input value={openProjket.img} onChange={(e) => update('img', e.target.value)} placeholder="dodaj url obrazu" />
                <textarea value={openProjket.description} onChange={(e) => update('description', e.target.value)} placeholder="wpisz opis"></textarea>
                <button onClick={save}>save </button>
            </div>
        </section>
    )
}
export default ProjektEditor