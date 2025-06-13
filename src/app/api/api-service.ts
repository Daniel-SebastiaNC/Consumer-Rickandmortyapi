import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Person } from '../shared/interfaces/person.interface';
import { Page } from '../shared/interfaces/page.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/';

   http = inject(HttpClient);

  getAll(): Observable<Page> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character/?page=2').pipe(
      map(data => ({
        results: data.results
      }))
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
