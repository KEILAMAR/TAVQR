import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  usuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success', // Puedes personalizar el color según tus necesidades
    });

    await toast.present();
  }

  registrar() {
    // Validar que la contraseña tenga al menos 6 caracteres
    if (this.password.length < 6) {
      this.showAlert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Realizar la verificación del dominio del correo electrónico
    const emailDomain = this.usuario.split('@')[1];

    switch (emailDomain) {
      case 'profesor.duocuc.cl':
        // Realizar acciones específicas para el dominio del profesor
        break;
      case 'admin.duoc.cl':
        // Realizar acciones específicas para el dominio del administrador
        break;
      case 'duocuc.cl':
        // Realizar acciones específicas para el dominio del alumno
        break;
      default:
        // Mostrar alerta si el dominio no es válido
        this.showAlert('Dominio de correo no válido');
        return;
    }

    // Almacena el correo electrónico y la contraseña en Firebase o en otro servicio
    localStorage.setItem('usuario', this.usuario);
    localStorage.setItem('password', this.password);

    // Muestra un mensaje de éxito
    this.showSuccessToast('Usuario registrado correctamente');

    const navigationExtras: NavigationExtras = {
      queryParams: {
        usuario: this.usuario,
      },
    };

    // Redirige al usuario a la página de inicio de sesión
    if (navigationExtras) {
      this.router.navigate(['login'], navigationExtras);
    }
  }
}
