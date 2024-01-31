import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthfirebaseService } from 'src/app/services/Firebase/authfirebase.service';

@Component({
  selector: 'app-perfil-adm',
  templateUrl: './perfil-adm.page.html',
  styleUrls: ['./perfil-adm.page.scss'],
})
export class PerfilAdmPage implements OnInit {

  constructor(private formBuilder: FormBuilder,private authFire: AuthfirebaseService, private router: Router) { }

  ngOnInit() {
  }

  async logout() {
    try {
      await this.authFire.logout();
    } catch (error) {

    }
  }
}
