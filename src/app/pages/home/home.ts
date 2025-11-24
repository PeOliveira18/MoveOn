import { AfterViewInit, Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { SeeClients } from '../../components/see-clients/see-clients';
import { Contato } from '../../components/contato/contato';
import { ClientOpinion } from '../../components/client-opinion/client-opinion';
import { Ad } from '../../components/ad/ad';
import { Footer } from '../../components/footer/footer';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Header, Hero, Services, SeeClients, Contato, ClientOpinion, Ad, Footer],
})
export class Home implements AfterViewInit{
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".anim").forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
        },
        opacity: 0,
        x: -150,         
        duration: 1.5,
        ease: "power2.out"
      });
    });
  }

}
