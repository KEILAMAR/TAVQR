import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Imaterias } from 'src/app/interfaces/imaterias';
import { CrudfirebaseService } from 'src/app/services/Firebase/crudfirebase.service';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.page.html',
  styleUrls: ['./addclass.page.scss'],
})
export class AddclassPage implements OnInit {
  materia: Imaterias={
    clase:'software',
    inicio:'11:35',
    salida:'13:45',
    profesor:'Fernando Espinoza',
    sala:'nos08',
    seccion:'0012g'
  }

  constructor(private fireService:CrudfirebaseService,
    private router:Router,
    private toast:ToastController) { }

  ngOnInit() {
  }

  async mensajeToast(msj:string) {
    const mensaje = await this.toast.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    mensaje.present();
  }

  addmateria() {
    this.fireService.createDocument('Materias', this.materia);
    this.mensajeToast("materia agregada!");
    this.router.navigate(['home-adm']);
  }

}
