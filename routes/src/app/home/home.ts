import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, Nav,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

    images = [
    'assets/img/carrusel1.jpg',
    'assets/img/carrusel2.jpg',
    'assets/img/carrusel3.jpg'
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
