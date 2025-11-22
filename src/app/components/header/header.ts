import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  menuMobile: boolean = false;

  toggleMenu(){
    this.menuMobile = !this.menuMobile
  }

  closeMenu(){
    this.menuMobile = false;
  }

}
