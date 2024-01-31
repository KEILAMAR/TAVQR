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

  constructor(private authFire: AuthfirebaseService, private router: Router, private formBuilder: FormBuilder,
    
    ) {
    this.userEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {
  }
  onReset() {
  
      const email = this.userEmail!.value;

      console.log('email-recibido:',email.email);

      this.authFire.resetPass(email.email).then((resolve)=>{


        console.log('reset-password:',resolve);


      },(error)=>{

        console.log('error-reset-password:',error);
      });
     
  }

}
