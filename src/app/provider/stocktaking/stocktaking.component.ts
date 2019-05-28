import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-stocktaking',
  templateUrl: './stocktaking.component.html',
  styleUrls: ['./stocktaking.component.scss']
})
export class StocktakingComponent implements OnInit {

  stockList: Array<any>;

  constructor(private _dialogService:DialogService) { }

  ngOnInit() {
    this.stockList=[{productName:'lechuga',description:'Este productos es excelente',price:2000, quantity:20},{productName:'lechuga',description:'Este productos es excelente',price:2000, quantity:20},{productName:'lechuga',description:'Este productos es excelente',price:2000, quantity:20},{productName:'lechuga',description:'Este productos es excelente',price:2000, quantity:20}]
  }

  openCreateStock(){
    console.log("algo")
    this._dialogService.openCreateStock();
  }
}
