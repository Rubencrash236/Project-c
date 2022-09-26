import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ListTraysService {

  private endpoint: string = `${this.authService.url}/trays`;
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});

  constructor(private router: Router, private authService: LoginService, private http: HttpClient) { }

  getAllTrays(): Observable<any>{
    return this.http.get<any>(this.endpoint, {headers: this.httpHeaders});
  }

  createTray(): Observable<any> {
    return this.http.post<any>(this.endpoint, {headers: this.httpHeaders});
  }

  getTrayById(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${id}`, {headers: this.httpHeaders});
  }

  getAllProjects(): Observable<any> {
    return this.http.get<any>(`${this.authService.url}/projects`, {headers: this.httpHeaders});
  }

}
