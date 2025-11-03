import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-card',
  imports: [],
  templateUrl: './client-card.html',
  styleUrl: './client-card.scss',
})
export class ClientCard {

  @Input() text: string = "";
  @Input() image: string = "";
}
