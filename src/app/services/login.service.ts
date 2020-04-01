import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const auth = require('../../assets/auth.json');

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const url = `https://api-fluig.staging.totvs.app/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=${username}&password=${password}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${auth.authorization}`
      })
    };
    
    return this.http.post(url, {}, httpOptions)
  }
}