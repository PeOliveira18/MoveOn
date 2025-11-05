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
      { name: "Daniele Morais", subtitle: "HR Analyst, WIPRO", text: 'Trabalhar com a MoveOn nos nossos treinamentos comportamentais tem sido uma experiência enriquecedora para os nossos colaboradores. Nossos trainees e estagiários só nos dão feedbacks positivos sobre o que vivenciam e aprendem com os conteúdos trazidos. O mais marcante pra eles tem sido a forma leve com que assuntos tão profundos são trabalhados, sempre levando a uma reflexão que realmente os fazem evoluir de alguma forma naquilo que acham relevante.', image: 'assets/images/people1.jpg' },
      { name: "Rodrigo Castanho", subtitle: "Co-fundador, Seu Guru", text: 'A MoveOn foi fundamental no processo de contratação dos primeiros funcionários da nossa Startup, pois conseguiu contratar com agilidade, entendendo nossa disponibilidade de orçamento e principalmente nos deu feedback de fatores que poderiam aumentar nossa atratividade para talentos.', image: 'assets/images/people2.jpg' },
      { name: "Andre Ynouye", subtitle: "Diretor, GTMX", text: 'A MoveOn estabeleceu um espaço de grande importância estratégica na GTMX. Nosso crescimento tem sido suportado diretamente pela MoveOn no processo de expansão de equipes de forma ágil e qualificada. Além da ótima entrega, a equipe da MoveOn é muito atenciosa em todas as etapas, acompanhando todos os processos com o cliente, é possível se sentir amparado em qualquer situação.', image: 'assets/images/people3.jpg' },
      { name: "Raquele Pandolfo", subtitle: "Cofunder e CEO , Pantos Empreendimentos", text: 'Contar com a MoveOn no processo de expansão e ajuste de foco do nosso core business foi fundamental. A Dayanna soube conduzir majestosamente a mudança da nossa liderança! O LeaderOn fez toda a diferença, refletindo diretamente em nosso modo de atuar e, consequentemente, trazendo resultados muito mais eficientes e satisfatórios! Ter decidido que era preciso se aperfeiçoar e ter a assessoria perfeita para isso, foi um divisor de águas em nossa trajetória!', image: 'assets/images/people4.jpg' },
      
    ];
  }
}
