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
            &nbsp;&nbsp;Sou um profissional apaixonado por tecnologia e
            inovação, sempre em busca de novos desafios para crescer e evoluir.
            Com uma trajetória marcada por disciplina e dedicação, venho de uma
            experiência única no Exército, onde aprimorei habilidades valiosas
            como liderança, responsabilidade e a capacidade de aprender
            rapidamente. Esses valores são aplicados no meu trabalho, onde busco
            sempre entregar soluções eficazes e criativas.
          </p>
          <p>
            &nbsp;&nbsp;Estou em uma jornada contínua de desenvolvimento e estou
            pronto para contribuir com meu potencial em projetos que me desafiem
            a aprender ainda mais. Fique à vontade para explorar meu portfólio e
            conhecer mais sobre minhas experiências e projetos. Se você procura
            alguém comprometido, responsável e com uma grande capacidade de
            adaptação, estou à disposição para conversar sobre como posso
            agregar valor à sua equipe.
          </p>
          <p>Vamos conversar!</p>
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
