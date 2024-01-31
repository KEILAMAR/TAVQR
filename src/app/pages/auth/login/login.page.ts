import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthfirebaseService } from 'src/app/services/Firebase/authfirebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario: string = '';
  password: string = '';

  isAlertOpen = false;

  constructor(private router: Router,
    private _authFirebase: AuthfirebaseService) {}

  iniciarSesion() {


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

    },(error)=>{
      console.log('error: ',error);
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
