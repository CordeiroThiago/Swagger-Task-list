import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _auth: LoginService,
    private _router: Router) { }

  ngOnInit(): void {
    this._auth.login().subscribe(
      res => {
        localStorage.setItem("token", res["access_token"])
        this._router.navigate(['/lists'])
      },
      err => {
        console.log(err);
      }
    )
  }

}
