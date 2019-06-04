import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { ProviderService } from 'src/app/services/provider.service';


@Component({
  selector: 'app-stocktaking',
  templateUrl: './stocktaking.component.html',
  styleUrls: ['./stocktaking.component.scss']
})
export class StocktakingComponent implements OnInit {

  constructor(
    private _dialogService: DialogService,
    private _providerService: ProviderService
  ) { }

  ngOnInit() {
    this._providerService.getStocks(1);
  }

  openCreateStock(action: boolean, stock: Object) {
    stock ? this._providerService.stockToModify = stock : this._providerService.stockToModify = undefined;
    this._providerService.action = action;
    this._dialogService.openCreateStock();

    console.log("Este es el original"+JSON.stringify(stock))
  }
}
