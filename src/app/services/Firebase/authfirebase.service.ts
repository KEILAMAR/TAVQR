import { MessageBundle } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthfirebaseService {

  constructor(private auth: AngularFireAuth, private navCtrl: NavController, private loadingCtrl: LoadingController) { }
  private loading:any;


  async login(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      console.log("sesion iniciada")
      this.loadingCtrl.create({
        message: 'Autenticando'
      }).then((overlay) => {
        this.loading = overlay;
        this.loading.present();
      })
  
      setTimeout(() => {
  
        this.loading.dismiss();
        this.navCtrl.navigateRoot('homea');
  
      }, 800);
    } catch (error) {
      console.error("error al iniciar sesion")

      this.loadingCtrl.create({
        message: 'Autenticando'
      }).then((overlay) => {
        this.loading = overlay;
        this.loading.present();
      })
  
      setTimeout(() => {
  
        this.loading.dismiss();
        this.navCtrl.navigateRoot('login');
        
  
      }, 800);
    }
  }


  async register(email: string, password: string) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      console.log("usuario creado")
    } catch (error) {
      console.error("error al crear usuario")
    }
  }


  async logout() {
    try {      
      await this.auth.signOut()
      console.log("sesion finalizada")
      this.loadingCtrl.create({
        message: 'Saliendo'
      }).then((overlay) => {
        this.loading = overlay;
        this.loading.present();
      })
  
      setTimeout(() => {
  
        this.loading.dismiss();
        this.navCtrl.navigateRoot('login');
  
      }, 800);





    } catch (error) {
      console.error("error al finalizar sesion")
    }
  }


  
  async resetPass(email: string){
    try {
      return this.auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error)
    }

  }

}
