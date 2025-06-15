import { ApiService } from './../../api/api-service';
import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { Person } from '../../shared/interfaces/person.interface';


@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  persons!: Person[];

  apiService = inject(ApiService);


  ngOnInit(): void {
    this.apiService.getAll().subscribe( (data) => {
      this.persons = data;
    });
  }

 }
