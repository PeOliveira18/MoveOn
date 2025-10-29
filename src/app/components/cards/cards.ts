import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() imagem: string = "";
}
