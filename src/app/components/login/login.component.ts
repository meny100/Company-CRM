import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMassage: string;
  constructor(
    private fms: FlashMessagesService,
    private fb: FormBuilder,
     private auth:AuthService,
     private router: Router) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });

    this.auth.getAuth().subscribe(user => {
      if(!!user) this.router.navigate(["/"])
    })
  }

  onSubmit() {
    if(this.loginForm.valid){
      const {email, password} = this.loginForm.value;
      this.auth.login(email, password).then(res => {
        this.router.navigate(["/"]);
        setTimeout(() => {
          this.fms.show("You are now logged in!", {
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

  routeToSignup(){
    this.router.navigate(["/signup"])
  }
}
