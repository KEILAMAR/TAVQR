import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthfirebaseService } from 'src/app/services/Firebase/authfirebase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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
