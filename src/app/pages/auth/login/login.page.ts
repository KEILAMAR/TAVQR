import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthfirebaseService } from 'src/app/services/Firebase/authfirebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario: string = '';
  password: string = '';

  isAlertOpen = false;
  alertController: AlertController;

  constructor(private router: Router, 
    private _authFirebase: AuthfirebaseService,
    alertController: AlertController) {
      this.alertController = alertController;
    }

    async showAlert(message: string) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
    }

  iniciarSesion() {

    if (this.password.length < 6) {
      this.showAlert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    const emailDomain = this.usuario.split('@')[1];
    const validDomains = ['profesor.duocuc.cl', 'admin.duoc.cl', 'gmail.com', 'duocuc.cl'];

    if (!validDomains.includes(emailDomain)) {
      this.showAlert('Dominio de correo no válido');
      return;
    }
    //derivacion segun dominio email
     this._authFirebase.login(this.usuario,this.password).then((resolve)=>{
      console.log('login-response: ',resolve);
      const emailDomain = this.usuario.split('@')[1];
  
      localStorage.setItem('usuario',JSON.stringify({usuario:emailDomain}));
  
      switch (emailDomain) {
        case 'profesor.duocuc.cl':
        this.router.navigate(['homep']);          
          break; 
          case 'admin.duoc.cl':
            this.router.navigate(['home-adm']);
          break;
          case 'gmail.com':
            this.router.navigate(['home-adm']);
          break; 
          case 'duocuc.cl':
            this.router.navigate(['homea']);
          break;      
        default:
          break;
      }

    }).catch((error) => {
      console.log('error: ', error);
      if (error.code === 'auth/user-not-found') {
        this.showAlert('El correo ingresado no ha sido registrado');
      } else {
        // Agrega una alerta para otros posibles errores de inicio de sesión
        this.showAlert('La credeciales ingresadas no son correctas');
      }
    });

  }

  recuperarClave() {
    this.router.navigate(['recPassword']);
  }

  registrarse() {
    this.router.navigate(['registro']);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
