import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductosService, Producto } from '../services/productos.service';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';


@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NgFor, Nav,  Footer],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class Catalogo {
  servicio = inject(ProductosService);
  productos = this.servicio.productos;

  agregar(producto: Producto) {
    this.servicio.agregarAlCarrito(producto);
  }
}

