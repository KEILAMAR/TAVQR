import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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


  materia: Imaterias = {
    clase: '',
    inicio: '',
    salida: '',
    profesor: '',
    sala: '',
    seccion: ''
  }

  constructor(private fireService: CrudfirebaseService,
    private router: Router,
    private toast: ToastController,
    private fb:FormBuilder) { }

  ngOnInit() {
  }

  async mensajeToast(msj: string) {
    const mensaje = await this.toast.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    mensaje.present();
  }

  addMateria() {
    if (this.materia.clase && this.materia.inicio && this.materia.salida && this.materia.profesor && this.materia.sala && this.materia.seccion) {
      this.fireService.createDocument('Materias', this.materia);
      this.mensajeToast("Materia agregada!");
      this.router.navigate(['materias']);
    } else {
      this.mensajeToast("Completa todos los campos correctamente");
    }
  }

}
