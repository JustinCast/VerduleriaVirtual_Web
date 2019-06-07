import { Component, OnInit } from '@angular/core';
import { loginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'verduleriavirtualweb';
  admin = false;
  provider = false;
  constructor(private loginService: loginService) {

  }
  ngOnInit() {
    JSON.parse(localStorage.getItem('actual_user')).id === 'admin' ? this.admin = true : this.provider = true;
  }
  //
  signOut(){
    this.loginService.isLogin = true;
  }
}
