import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
}

