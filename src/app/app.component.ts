import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'verduleriavirtualweb';
  admin = false;
  provider = true;

  ngOnInit() {
    //JSON.parse(localStorage.getItem('actual_user')).id == 'admin' ? this.admin = true : this.provider=true
  }
}
