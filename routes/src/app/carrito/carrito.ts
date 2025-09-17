import { Component, inject } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass } from '@angular/common';
import { ProductosService } from '../services/productos.service';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Contacto } from '../shared/components/contacto/contacto';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass, Nav, Contacto, Footer],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class Carrito {
  servicio = inject(ProductosService);
  carrito = this.servicio.carrito;
  total = this.servicio.total;

  quitar(id: number) {
    this.servicio.quitarDelCarrito(id);
  }

  vaciar() {
    this.servicio.vaciarCarrito();
  }
}

