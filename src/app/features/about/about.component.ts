import { Component } from '@angular/core';
import { DescriptionComponent } from './description/description.component';

@Component({
  selector: 'app-about',
  imports: [DescriptionComponent],
  template: '<app-description />',
})
export class AboutComponent {}
