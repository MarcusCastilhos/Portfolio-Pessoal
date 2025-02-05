import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-description',
  imports: [CommonModule],
  template: `
    <section class="description">
      <div class="container">
        <div class="side-description fadeIn">
          <h2 class="title">Desenvolvedor Web Full-Stack</h2>
          <p>
            Olá! Sou Marcus Castilhos, um desenvolvedor Full-Stack apaixonado
            por tecnologia e inovação.
          </p>
          <p>
            Com formação em Análise e Desenvolvimento de Sistemas e Engenharia
            de Software, além de quatro pós-graduações na área de TI, estou
            sempre em busca de novos desafios e oportunidades para aplicar meus
            conhecimentos.
          </p>
          <p>
            Minha experiência no Exército Brasileiro como Sargento Técnico
            Temporário me proporcionou disciplina, organização e uma grande
            capacidade de aprendizado, habilidades que levo para o mundo do
            desenvolvimento.
          </p>
          <p>
            Tenho domínio em HTML, CSS, JavaScript, Node.js, Angular, React e
            SQL, e meu objetivo é criar soluções eficientes, funcionais e que
            gerem impacto. Estou aberto a oportunidades como desenvolvedor
            Full-Stack, pronto para contribuir e crescer profissionalmente em um
            time dinâmico e inovador. Vamos conversar?
          </p>
        </div>
        <div class="img-description fadeIn">
          <img src="/marcus.jpg" alt="Marcus" />
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./description.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {}
