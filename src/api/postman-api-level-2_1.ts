import { PlanetsResponse} from './Interfaces/IStarWarsPlanets';

async function fetchPlanets() {
    try {
        const response = await fetch('https://swapi.dev/api/planets');
        if (!response.ok) {
            throw new Error(`Fehler bei API Aufruf ${response.status}`)
        }
        const planetsResponse: PlanetsResponse = await response.json();
        planetsResponse.results.forEach(planet => {
            console.log(`Name: ${planet.name}, Rotation Period ${planet.rotation_period}, Climate: ${planet.climate}`);
        })
    } catch(error) {
    console.error('Fehler bei API Auruf', error)}
}
fetchPlanets();






