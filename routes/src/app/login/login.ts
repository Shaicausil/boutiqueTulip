import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ Nav, Footer, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginP = signal('assets/img/floresLogin.webp');
  error = signal('');

  usernameValue: string = '';
  passwordValue: string = '';

  constructor(private router: Router) {}

  signIn() {
    if (!this.usernameValue || !this.passwordValue) {
      this.error.set('Por favor ingresa usuario y contraseña.');
      return;
    }

    if (this.usernameValue === 'admin' && this.passwordValue === '1234') {
      this.error.set('');
      this.router.navigate(['/catalogo']);
    } else {
      this.error.set('Usuario o contraseña incorrectos.');
    }
  }
}
