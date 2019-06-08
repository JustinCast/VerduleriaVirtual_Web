import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  admin = false;
  provider = true;

  constructor(private _router: Router) { }


  ngOnInit() {
    if(localStorage.getItem('actual_user') !== null)
      JSON.parse(localStorage.getItem('actual_user')).id == 'admin' ? this.admin = true : this.provider=true
  }

  logout() {
    localStorage.removeItem('actual_user');
    this._router.navigate(['/login'])
  }

}
