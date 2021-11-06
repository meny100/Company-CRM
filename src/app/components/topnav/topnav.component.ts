import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
})
export class TopnavComponent implements OnInit {
  @Input('email') userEmail: string = '[user - email]';
  @Input('loggedin') isLogin: boolean = false;
  router: Router;

  someFuncINeedToLookInsomeWay: (argument1: number) => void;

  constructor(private auth: AuthService) {
  }

  signOut(){
    this.auth.logOut();
  }

  routeToSignup(){
    this.router.navigate(["/login"])
  }

  ngOnInit(): void {
  }
}
