import { ApiService } from './../../api/api-service';
import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { Person } from '../../shared/interfaces/person.interface';
import { Paginator } from '../../shared/components/paginator/paginator';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  imports: [Card, Paginator],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  persons!: Person[];

  apiService = inject(ApiService);


  ngOnInit(): void {
    this.getAll(1);
  }

  onChangePage(e: PageEvent) {
    this.getAll(e.pageIndex + 1)
  }

  getAll(page: number) {
    this.apiService.getAll(page).subscribe( (data) => {
      this.persons = data;
    });
  }

 }
