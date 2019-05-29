import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;


  constructor() {

   }

  ngOnInit() {
  }



}
