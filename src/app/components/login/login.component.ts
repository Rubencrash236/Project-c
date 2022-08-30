import { Component, OnInit } from '@angular/core';
import User from './models/user.model';
import asset from './asset.json';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  login(): void{
    if(this.user.username == asset.user.username && this.user.password == asset.user.password){
      this.loginService.saveUserCreds(this.user);
      this.router.navigate(['/list-trays']);
    } else {
      window.alert('Usuario o contraseña incorrectas');
    }
  }

}
