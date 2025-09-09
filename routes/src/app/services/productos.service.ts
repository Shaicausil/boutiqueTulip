import { Injectable, signal, computed } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  productos = signal<Producto[]>([
    {
      id: 1,
      nombre: 'Afrodita',
      precio: 58000,
      cantidad: 60,
      imagen: 'assets/img/gerberas.jpeg'
    },
    {
      id: 2,
      nombre: 'Venus',
      precio: 78000,
      cantidad: 90,
      imagen: 'assets/img/lirios.jpeg'
    },
    {
      id: 3,
      nombre: 'Artemisa',
      precio: 52000,
      cantidad: 500,
      imagen: 'assets/img/rosas.jpeg'
    },
    {
      id: 4,
      nombre: 'Perséfone',
      precio: 88000,
      cantidad: 60,
      imagen: 'assets/img/gerb2.jpeg'
    },
    {
      id: 5,
      nombre: 'Nix',
      precio: 93000,
      cantidad: 59,
      imagen: 'assets/img/girasoles.jpeg'
    },
    {
      id: 6,
      nombre: 'Selene',
      precio: 73000,
      cantidad: 70,
      imagen: 'assets/img/girasolesRosas.jpeg'
    },
    {
      id: 7,
      nombre: 'Aurora',
      precio: 68000,
      cantidad: 60,
      imagen: 'assets/img/gerberastulip.jpeg'
    },
    {
      id: 8,
      nombre: 'Iris',
      precio: 45000,
      cantidad: 58,
      imagen: 'assets/img/rosasa.jpeg'
    },
    {
      id: 9,
      nombre: 'Victoria',
      precio: 67000,
      cantidad: 40,
      imagen: 'assets/img/rosase.jpeg'
    },
    {
      id: 10,
      nombre: 'Musas',
      precio: 50000,
      cantidad: 60,
      imagen: 'assets/img/tulipanes.jpeg'
    },
    {
      id: 11,
      nombre: 'Arcus',
      precio: 87000,
      cantidad: 300,
      imagen: 'assets/img/ryt.jpeg'
    },
    {
      id: 12,
      nombre: 'Atenea',
      precio: 65000,
      cantidad: 350,
      imagen: 'assets/img/rrosas.jpeg'
    }
  ]);


  carrito = signal<Producto[]>([]);

  
  total = computed(() =>
    this.carrito().reduce((sum, p) => sum + p.precio * p.cantidad, 0)
  );

 
  agregarAlCarrito(producto: Producto) {
    const carritoActual = [...this.carrito()];
    const index = carritoActual.findIndex(p => p.id === producto.id);

    if (index > -1) {
      carritoActual[index].cantidad += 1;
    } else {
      carritoActual.push({ ...producto, cantidad: 1 });
    }

    this.carrito.set(carritoActual);
  }

 
  quitarDelCarrito(id: number) {
    this.carrito.set(this.carrito().filter(p => p.id !== id));
  }


  vaciarCarrito() {
    this.carrito.set([]);
  }
}
