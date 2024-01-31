import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imaterias } from 'src/app/interfaces/imaterias';
import { AuthfirebaseService } from 'src/app/services/Firebase/authfirebase.service';
import { CrudfirebaseService } from 'src/app/services/Firebase/crudfirebase.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  listamaterias!: Imaterias[];

  constructor(private fire:CrudfirebaseService,
    private auth:AuthfirebaseService,
    private router:Router) { }

  ngOnInit() {
    this.listar();
  }
  ionViewWillEnter() {
    this.listar();
  }

  listar() {
    this.fire.getCollection("Materias").subscribe((aux) => {
      this.listamaterias = aux;
      console.log(this.listamaterias);
    })
  }

  addclass() {
    this.router.navigate(['addclass']);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  handleReorder(ev: CustomEvent<any>) {
    ev.detail.complete();
  }
}
