import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMassage: string;
  constructor(
    private fms: FlashMessagesService,
    private fb: FormBuilder,
     private auth:AuthService,
     private router: Router,
     public afAuth: AngularFireAuth
     ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });

    this.auth.getAuth().subscribe(user => {
      if(!!user) this.router.navigate(["/"])
    })
  }

  onSubmit() {
    if(this.signupForm.valid){
      const {email, password} = this.signupForm.value;
      this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
        this.router.navigate(["/"]);
        setTimeout(() => {
          this.fms.show("Welcome! you've create a new account", {
            cssClass: "fixed-top m-auto bg-success w-50 text-white text-center",
            timeout: 3000
          });
        }, 1000);

      }).catch(error => {
        this.fms.show(error.message, {
          cssClass: "fixed-top m-auto bg-danger w-50 text-white text-center",
          timeout: 3000
        });
      })
    }
  }

  routeToLogin(){
    this.router.navigate(["/login"])
  }
}

