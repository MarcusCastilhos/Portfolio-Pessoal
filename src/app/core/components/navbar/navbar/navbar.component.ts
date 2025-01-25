import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  template: `<nav>
  <div class="navbar-bg">
    <div class="logo">
      <span class="logo-icon">MC</span>
      <span class="logo-text">Marcus Castilhos</span>
    </div>
  </div>
  <div class="nav-links-bg">
    <ul class="nav-links">
      <li>
        <a routerLink="/about" routerLinkActive="active">Sobre Mim</a>
      </li>
      <li>
        <a routerLink="/projects" routerLinkActive="active">Projetos</a>
      </li>
      <li>
        <a routerLink="/contact" routerLinkActive="active">Contato</a>
      </li>
      <li>
        <a routerLink="/game" routerLinkActive="active">Jogar</a>
      </li>
    </ul>
  </div>
</nav>`,
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
