export interface Planets {
    name: string; 
    rotation_period: number, 
    orbital_period: number,
    diameter: number; 
    climate: string; 
    gravity: string; 
    terrain: string; 
    surface_water: string; 
    population: string;
    residents: string[]; 
    films: string[]; 
    created: string;
    edited: string; 
    url: string; 
}
export interface PlanetsResponse {
    count: number; 
    next?: string; 
    previous?: string; 
    results: Planets[]; 
}

