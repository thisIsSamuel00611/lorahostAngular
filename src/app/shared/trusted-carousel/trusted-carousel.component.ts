import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trusted-carousel',
  templateUrl: './trusted-carousel.component.html',
  styleUrls: ['./trusted-carousel.component.scss']
})
export class TrustedCarouselComponent {
  constructor() { }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    // nav: true,
    
  }
}

