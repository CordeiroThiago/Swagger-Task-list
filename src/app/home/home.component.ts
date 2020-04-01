import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username = "";
  password = "";
  loading = false;

  constructor(private _auth: LoginService,
    private _router: Router) { }

  login(): void {
    this.loading = true;
    this._auth.login(this.username, this.password).subscribe(
      res => {
        this.loading = false;
        localStorage.setItem("token", res["access_token"])
        localStorage.setItem("username", this.username)
        localStorage.setItem("password", this.password)

        this._router.navigate(['/lists'])
      },
      err => {
        console.log(err);
        this.loading = false;

        if (err.status == 401) {
          alert("Usuário ou senha incorretos.");
        } else {
          alert("não foi possivel concluir a ação.");
        }
      }
    )
  }

}
