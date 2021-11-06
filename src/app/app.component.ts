import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'comp-crm';
  isLogin: boolean = false;
  userEmail: string;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.getAuth().subscribe(user => {
      this.isLogin = !!user;
      this.userEmail = user?.email as string;
    })
  }
}


