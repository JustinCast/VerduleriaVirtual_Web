import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { loginService } from './services/login.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  actualUser = null;
  title = "verduleriavirtualweb";

  constructor(private _router: Router, private _login: loginService) {}

  ngOnInit() {
    this._login.authSubject.asObservable().subscribe(() => {
      this.actualUser = JSON.parse(localStorage.getItem("actual_user"));
    });
    this._login.auth();
  }

  logout() {
    localStorage.removeItem("actual_user");
    this._login.auth();
    this._router.navigate(["/login"]);
    this.actualUser = null;
  }
}
