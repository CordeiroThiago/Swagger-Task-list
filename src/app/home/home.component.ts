import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from "angular-notifier";

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
    private readonly notifier: NotifierService,
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
          this.notifier.notify("error", "Usuário ou senha incorretos.");
        } else {
          this.notifier.notify("error", "Erro ao fazer login.");
        }
      }
    )
  }

}
