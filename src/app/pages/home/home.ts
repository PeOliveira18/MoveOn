import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Services],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
