import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // This is the proper positon. don't move the function out of the class! Thank you.
  @ViewChild ('header') header : ElementRef
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const pos = window.scrollY
      if (pos > 325) {
        this.header.nativeElement.classList.add('show');
        this.header.nativeElement.classList.remove('hidden');
        this.header.nativeElement.style.transition = '2s'
      }else{
        this.header.nativeElement.classList.add('hidden');
        this.header.nativeElement.classList.remove('show');
        this.header.nativeElement.style.transition = '2s';
      }
    })
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    freeDrag: true,
    navSpeed: 600,
    margin: 70,
    navText: ['', ''],
    slideBy: 2,
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

