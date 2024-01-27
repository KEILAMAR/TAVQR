import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homea',
  templateUrl: './homea.page.html',
  styleUrls: ['./homea.page.scss'],
})
export class HomeaPage implements OnInit {


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