import { Component } from '@angular/core';
import { ClientCard } from '../client-card/client-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-see-clients',
  imports: [ClientCard, CommonModule],
  templateUrl: './see-clients.html',
  styleUrl: './see-clients.scss',
})
export class SeeClients {

  cards = [1, 2, 3, 4];

  getCards(){
    return [
    { text: 'Clientes de alta qualidade que confiam em nossos serviços.', image: 'assets/images/hand.png' },
    { text: 'Um portfólio sólido com marcas de destaque.',  image: 'assets/images/cellphone.svg' },
    { text: 'Confiado por empresas reconhecidas.',  image: 'assets/images/map.png' },
    { text: 'Parcerias que refletem excelência.',  image: 'assets/images/icon.png' }
  ];
  }

}
