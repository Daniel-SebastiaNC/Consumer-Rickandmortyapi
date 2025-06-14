import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  person = input<Person>();
}
