import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homep',
  templateUrl: './homep.page.html',
  styleUrls: ['./homep.page.scss'],
})
export class HomepPage implements OnInit {


  ngOnInit() {
  }

  constructor(private router: Router) { }

  async perfil(){
    this.router.navigate(['perfilp'])
  }

  async clases(){
    this.router.navigate(['clases'])
  }

  async horario(){
    this.router.navigate(['horario'])
  }

  async qr(){
    this.router.navigate(['mostrarqr'])
  }

  async home(){
    this.router.navigate(['homep'])
  }


}