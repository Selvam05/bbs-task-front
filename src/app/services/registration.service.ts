import { Injectable } from '@angular/core';
import { Registration } from './models/registration';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';


@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    private regManagerUrl: string = `${environment.apiUrl}`;

    constructor(private http: HttpClient) { }

    findAllUser() {
        return this.http.get<any>(`${this.regManagerUrl}` + `/findAll`);
    }

    saveUser(regUser: Registration) {
        return this.http.post<any>(`${this.regManagerUrl}` + `/saveRegister`, regUser)
    }

}
