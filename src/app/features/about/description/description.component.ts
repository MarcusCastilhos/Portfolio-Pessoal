import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AboutSlide1Component } from './about-slide1/about-slide1.component';
import { AboutSlide2Component } from './about-slide2/about-slide2.component';
import { AboutSlide3Component } from './about-slide3/about-slide3.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-description',
  imports: [
    CommonModule,
    FontAwesomeModule,
    AboutSlide1Component,
    AboutSlide2Component,
    AboutSlide3Component,
  ],
  template: `
    <section class="description">
      <div class="container">
        <button class="btn-next" (click)="nextSlide()">
          <fa-icon [icon]="faCaretRight"></fa-icon>
        </button>
        <button class="btn-prev" (click)="previousSlide()">
          <fa-icon [icon]="faCaretLeft"></fa-icon>
        </button>

        <div class="slider">
          <app-about-slide1 *ngIf="currentSlide === 0"></app-about-slide1>
          <app-about-slide2 *ngIf="currentSlide === 1"></app-about-slide2>
          <app-about-slide3 *ngIf="currentSlide === 2"></app-about-slide3>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./description.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent implements OnInit, OnDestroy {
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;

  currentSlide = 0;

  intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + 3) % 3;
    this.cdr.detectChanges();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 3;
    this.cdr.detectChanges();
  }
}
