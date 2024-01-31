import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {

  }
 leerqr() {
    this.router.navigate(['/leerqr']);
  }

  irAHomeA() {
    this.router.navigate(['/homea']);
  }

}
