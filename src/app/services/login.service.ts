import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const auth = require('../assets/auth.json');

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login() {
    const url = `https://api-fluig.staging.totvs.app/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=${auth.username}&password=${auth.password}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': auth.authorization
      })
    };
    
    this.http.post(url, {}, httpOptions).toPromise()
    .then(
      (data:any) => {
        console.log(data);
      }
    )
  }
}