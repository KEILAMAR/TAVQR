import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrarqr',
  templateUrl: './mostrarqr.page.html',
  styleUrls: ['./mostrarqr.page.scss'],
})
export class MostrarqrPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //detalleramo

//obtener fecha para la clase
  getCurrentDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //Enero es 0
    const yyyy = today.getFullYear();
    
    return `${yyyy}-${mm}-${dd}`
  }
/*
//metodo para obtener las clases que tenga un profesor
  if (userData) {
    console.log(id_seccion);
    this.http
      .get(`aqui debe ir el link de la data en firebase`)
      .subscribe((dataClases:any)) => {
        console.log(dataClases);
        if (dataClases) {
          const secciones: any[] = [];
          dataClases.forEach((clase:any) => {
            if (Number(clase.id_seccion) === Number(id_seccion)) {
              secciones.push(clase);
            }
           });
           //Ordena las secciones por la propiedad fecha
           secciones.sort(
             (a,b) =>
               new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
           );
           console.log(secciones);
           this.secciones = secciones;
           this.cd.detectChanges();
          }
      }
  }*/
}
