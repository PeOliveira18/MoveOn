import { Component } from '@angular/core';
import { ClienOpinionCard } from '../clien-opinion-card/clien-opinion-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-opinion',
  imports: [ClienOpinionCard, CommonModule],
  templateUrl: './client-opinion.html',
  styleUrl: './client-opinion.scss',
})
export class ClientOpinion {
  
  getCards(){
    return [
      { text: 'teste', image: 'assets/images/icon.png' },
      { text: 'teste', image: 'assets/images/icon.png' },
      { text: 'teste', image: 'assets/images/icon.png' },
      { text: 'teste', image: 'assets/images/icon.png' },
      
    ];
  }
}
