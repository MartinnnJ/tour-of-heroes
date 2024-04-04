import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Hero from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _baseUrl = 'http://127.0.0.1:3000';

  constructor(private _http: HttpClient) {}

  getHeroes() {
    return this._http.get<Hero[]>(`${this._baseUrl}/heroes`);
  }

  getHeroDetails(id: string) {
    return this._http.get<Hero>(`${this._baseUrl}/heroes/${id}`);
  }

  createHero(name: string, popularity: number) {
    const newHero = new Hero(name, popularity);
    return this._http.post<Hero>(`${this._baseUrl}/heroes`, newHero);
  }

  updateHero(id: string, newName: string) {
    return this._http.patch<Hero>(`${this._baseUrl}/heroes/${id}`, { name: newName });
  }

  removeHero(id: string) {
    return this._http.delete<Hero>(`${this._baseUrl}/heroes/${id}`);
  }
}
