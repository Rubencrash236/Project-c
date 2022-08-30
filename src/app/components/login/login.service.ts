import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import User from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _user!: User;
  constructor(private router: Router) { }

  public get user(): User{
    if(this._user != null){
      return this._user;
    } else if(this._user == null && sessionStorage.getItem('user')!= null){
     this._user = JSON.parse(sessionStorage.getItem('user')!) as User;
     return this._user;
    }
    return new User();
  }

  saveUserCreds(user: User): void{

    this._user = new User();
    this._user.username = user.username;

    sessionStorage.setItem('user', JSON.stringify(this._user));
  }

  isAuthenticated(): boolean {
    let payload = this.user;
    let isTkValid = false;

    if(payload != null && payload.username && payload.username.length > 0){
      return true;
    }
    return false;
  }

  logout(): void{
    this._user = new User();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
