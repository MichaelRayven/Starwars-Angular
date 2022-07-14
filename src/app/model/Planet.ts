import { Film } from "./Film";
import { Person } from "./Person";

export interface Planets {
    count:    number;
    next:     string;
    previous: null;
    results:  Planet[];
  }

export interface Planet {
    name:            string;
    rotation_period: string;
    orbital_period:  string;
    diameter:        string;
    climate:         string;
    gravity:         string;
    terrain:         string;
    surface_water:   string;
    population:      string;
    residents:       string[];
    films:           string[];
    created:         string;
    edited:          string;
    url:             string;
  }

export interface PlanetDeep {
    name:            string;
    rotation_period: string;
    orbital_period:  string;
    diameter:        string;
    climate:         string;
    gravity:         string;
    terrain:         string;
    surface_water:   string;
    population:      string;
    residents:       Person[];
    films:           Film[];
    created:         string;
    edited:          string;
    url:             string;
  }