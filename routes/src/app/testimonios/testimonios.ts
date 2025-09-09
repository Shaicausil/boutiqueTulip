import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Contacto } from '../shared/components/contacto/contacto';

@Component({
  selector: 'app-testimonios',
  imports: [Nav,Contacto,Footer],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.css'
})
export class Testimonios {

}
