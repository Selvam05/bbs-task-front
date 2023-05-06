import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authManagerUrl: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  login(loginData: Login) {
    return this.http.post<any>(`${this.authManagerUrl}` + `/auth`, loginData);
  }


}
