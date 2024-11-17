import Bild from "./Interfaces/IBild";

async function bildListePicsum(): Promise<Bild[]> {
    try {
        const apiAntwort = await fetch('https://picsum.photos/v2/list');

        if (!apiAntwort.ok) {
            throw new Error(`API-Fehler, Status: ${apiAntwort.status}`)
        }
        const daten = await apiAntwort.json() as Bild[];
        console.log('Bilderliste', daten);
        return daten;   
    }
    catch (fehler) {
        console.error('Fehler beim API Aufruf', fehler)
        throw fehler
    }
    finally {
        console.log(('API-Aufruf erfolgreich abgeschlossen'));
        
    }
}
bildListePicsum()
    .then(daten => {
        console.log('empfangene Daten:', daten)
        daten.forEach(item => {
            console.log(`ID: ${item.id} Name: ${item.author} download_url ${item.download_url} email${item.width}`);
            
        })      
    })
    .catch(fehler => { 
        console.error('Fehler bei der Verarbeitung:', fehler)
    })
