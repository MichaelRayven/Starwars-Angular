import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../model/Film';
import { Person } from '../model/Person';
import { Planet, Planets } from '../model/Planet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  filmsUrl: string = "https://swapi.dev/api/films"
  peopleUrl: string = "https://swapi.dev/api/people"
  planetsUrl: string = "https://swapi.dev/api/planets"

  constructor(private http: HttpClient) { }

  getPlanets(page: number): Observable<Planets> {
      return this.http.get<Planets>(`${this.planetsUrl}/?page=${page}`)
  }

  searchPlanets(text: string): Observable<Planets> {
    return this.http.get<Planets>(`${this.planetsUrl}/?search=${text}`)
  }

  getPlanetById(id: number) {
    return this.http.get<Planet>(`${this.planetsUrl}/${id}`)
  }

  getPersonById(id: number) {
    return this.http.get<Person>(`${this.peopleUrl}/${id}`)
  }

  getFilmById(id: number) {
    return this.http.get<Film>(`${this.filmsUrl}/${id}`)
  }
}