import { Component } from '@angular/core';
import { LoginService } from './components/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService: LoginService){ }
  isAuthenticated(): boolean{
    return this.loginService.isAuthenticated();
  }

  logout(): void{
    this.loginService.logout();
  }
  title = 'project-c';
}
