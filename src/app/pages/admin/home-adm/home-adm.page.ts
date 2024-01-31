import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.page.html',
  styleUrls: ['./home-adm.page.scss'],
})
export class HomeAdmPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  async perfil(){
    this.router.navigate(['perfil-adm'])
  }


  async home(){
    this.router.navigate(['home-adm'])
  }

  async addmat(){
    this.router.navigate(['materias'])
  }
}
