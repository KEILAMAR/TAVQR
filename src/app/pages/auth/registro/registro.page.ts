import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthfirebaseService } from 'src/app/services/Firebase/authfirebase.service';

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
    private toastController: ToastController,
    private _authFirebase: AuthfirebaseService
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
      color: 'success', 
    });

    await toast.present();
  }

  registrar() {
    if (this.password.length < 6) {
      this.showAlert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    let domain= [
    'profesor.duocuc.cl',
      'admin.duoc.cl',
      'duocuc.cl'
    ]
    const emailDomain = this.usuario.split('@')[1];

    if (domain.includes(emailDomain)) {

      this._authFirebase.register(this.usuario,this.password)?.then((resolve)=>{
        this.showSuccessToast('¡Registro exitoso! El correo electrónico se ha registrado correctamente.');
        console.log('respuesta-desde-firebase: ',resolve);
      },(error)=>{
        console.log('error en el registro de usuario utilizando firebase: ',error);
        if (error.code === 'auth/email-already-in-use') {
        this.showAlert('Este correo electrónico ya está registrado. Por favor, inicia sesión.');
        }else {
          this.showAlert('Ocurrió un error durante el registro. Por favor, inténtalo de nuevo.');
        }
      });
    } else {
      this.showAlert('Dominio de correo no válido');
    }
  }
}