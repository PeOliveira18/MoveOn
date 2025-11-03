import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { SeeClients } from '../../components/see-clients/see-clients';
import { Contato } from '../../components/contato/contato';
import { ClientOpinion } from '../../components/client-opinion/client-opinion';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Header, Hero, Services, SeeClients, Contato, ClientOpinion],
})
export class Home {

}
