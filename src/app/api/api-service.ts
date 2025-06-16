import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Person } from '../shared/interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   http = inject(HttpClient);

  getAll(page: number): Observable<Person[]> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character/?page=' + page).pipe(
      map(data => ({
        results: data.results
      }.results))
    );
  }

  getCharacter(): Observable<Person> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character/1').pipe(
      map (data => ({
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        image: data.image
      }))
    );
  }
}
