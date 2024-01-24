import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario: string = '';
  password: string = '';

  isAlertOpen = false;

  constructor(private router: Router) {}

  iniciarSesion() {
    const storedUsuario = localStorage.getItem('usuario');
    const storedPassword = localStorage.getItem('password');

    if (this.usuario === storedUsuario && this.password === storedPassword) {
      // Credenciales válidas, redirigir a la página principal y pasar el nombre de usuario como estado
      this.router.navigate(['principal'], { state: { user: storedUsuario } });
    } else {
      // Credenciales incorrectas, mostrar la alerta
      this.isAlertOpen = true;
    }
  }

  recuperarClave() {
    this.router.navigate(['resset']);
  }

  registrarse() {
    this.router.navigate(['registro']);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
