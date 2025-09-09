import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Login } from './login/login';
import { Testimonios } from './testimonios/testimonios';
import { Carrito } from './carrito/carrito';
import { Catalogo } from './catalogo/catalogo';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'login',component:Login},
    {path:'testimonios',component:Testimonios},
    {path:'carrito',component:Carrito},
    {path:'catalogo',component:Catalogo}
];
