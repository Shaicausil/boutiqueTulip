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
    'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954174/carrusel1_agimgw.jpg',
    'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954135/carrusel2_ahiqyo.jpg',
    'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954129/carrusel3_e2kv2h.jpg'
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
