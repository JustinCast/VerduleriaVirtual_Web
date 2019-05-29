import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateStocktakingComponent } from '../provider/create-stocktaking/create-stocktaking.component';
import { ProviderService } from './provider.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog, private _providerServices: ProviderService) { }

  public openCreateStock(action: boolean) {
    this._providerServices.action=action;
    let dialogRef: MatDialogRef<CreateStocktakingComponent>;
    dialogRef = this.dialog.open(CreateStocktakingComponent, {
      width: "40%",
      height: "45%",
      panelClass: "dialog"
    });
    return dialogRef.afterClosed();
  }

}
