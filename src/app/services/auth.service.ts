import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogedIn$: Subject<boolean> = new Subject<boolean>();
  isLogedInB$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => {
          this.isLogedIn$.next(true);
          resolve(userData)
        },
        (err) => {
          this.isLogedIn$.next(false);
          reject(err)
        }
      );
    });
  }

  getAuth() {
    return this.afAuth.authState;
  }

  logOut() {
    this.afAuth.signOut();
  }
}
