import { Component } from '@angular/core';
import { NavbarComponent } from './core/components/navbar/navbar/navbar.component';
import { DescriptionComponent } from './features/about/description/description.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, DescriptionComponent],
  template: '<app-navbar /><app-description />',
})
export class AppComponent {
  title = 'portfolio-marcus';
}
