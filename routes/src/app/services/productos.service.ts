import { Injectable, signal, computed } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string; 
  agregado?: boolean;
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
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954152/gerberas_vscc1n.jpg'
    },
    {
      id: 2,
      nombre: 'Venus',
      precio: 78000,
      cantidad: 90,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954150/lirios_fixl6r.jpg'
    },
    {
      id: 3,
      nombre: 'Artemisa',
      precio: 52000,
      cantidad: 500,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954150/rosas_mjo8or.jpg'
    },
    {
      id: 4,
      nombre: 'Perséfone',
      precio: 88000,
      cantidad: 60,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954139/gerb2_c5knio.jpg'
    },
    {
      id: 5,
      nombre: 'Nix',
      precio: 93000,
      cantidad:3,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954140/girasoles_jvjnaq.jpg'
    },
    {
      id: 6,
      nombre: 'Selene',
      precio: 73000,
      cantidad: 70,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954150/girasolesRosas_e9sgco.jpg'
    },
    {
      id: 7,
      nombre: 'Aurora',
      precio: 68000,
      cantidad: 60,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954134/gerberastulip_bhnds0.jpg'
    },
    {
      id: 8,
      nombre: 'Iris',
      precio: 45000,
      cantidad: 58,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954148/rosasa_zxh1an.jpg'
    },
    {
      id: 9,
      nombre: 'Victoria',
      precio: 67000,
      cantidad: 40,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954149/rosase_h3k9x8.jpg'
    },
    {
      id: 10,
      nombre: 'Musas',
      precio: 50000,
      cantidad: 60,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757953996/tulipanes_cynvq7.jpg'
    },
    {
      id: 11,
      nombre: 'Arcus',
      precio: 87000,
      cantidad: 300,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757953952/ryt_v0ulef.jpg'
    },
    {
      id: 12,
      nombre: 'Atenea',
      precio: 65000,
      cantidad: 350,
      imagen: 'https://res.cloudinary.com/dv6nljzc7/image/upload/v1757954168/rrosas_kzon4u.jpg'
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
