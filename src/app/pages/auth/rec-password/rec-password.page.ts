import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthfirebaseService } from 'src/app/services/Firebase/authfirebase.service';

@Component({
  selector: 'app-rec-password',
  templateUrl: './rec-password.page.html',
  styleUrls: ['./rec-password.page.scss'],
})
export class RecPasswordPage implements OnInit {


  userEmail: FormGroup;

  emailV!: string;

  constructor(private authFire: AuthfirebaseService, private router: Router, private formBuilder: FormBuilder) {
    this.userEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {
  }
  onReset() {
    try {
      const email = this.userEmail!.value;

      this.authFire.resetPass(email);
      window.alert('Email enviado')

      console.log('email mandao')
      this.router.navigate(['/login'])

    } catch (error) {
      console.log(error)
    }

  }

}
