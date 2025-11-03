import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clien-opinion-card',
  imports: [],
  templateUrl: './clien-opinion-card.html',
  styleUrl: './clien-opinion-card.scss',
})
export class ClienOpinionCard {
  @Input() text: string = '';
  @Input() image: string = '';
}
