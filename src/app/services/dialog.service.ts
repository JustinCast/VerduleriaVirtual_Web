import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateStocktakingComponent } from '../provider/create-stocktaking/create-stocktaking.component';
import { PurchaseReport } from '../models/PurchaseReport';
import { PurchasesResultDialogComponent } from '../provider/purchases-result-dialog/purchases-result-dialog.component';
import { CreateModifyProviderComponent } from '../provider/create-modify-provider/create-modify-provider.component';
import { Provider } from '../models/Provider';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  public openCreateStock() {
    let dialogRef = this.dialog.open(CreateStocktakingComponent, {
      width: "40%",
      height: "45%",
      panelClass: "dialog"
    });
    return dialogRef.afterClosed();
  }

  public openPurchasesReportResult(purchases: Array<PurchaseReport>, initialDate, finalDate) {
    let dialogRef: MatDialogRef<PurchasesResultDialogComponent>;
    dialogRef = this.dialog.open(PurchasesResultDialogComponent, {
      width: "70%",
      height: "80%",
      data: {purchases: purchases, initialDate: initialDate, finalDate: finalDate}
    });
    return dialogRef.afterClosed();
  }

  public openCreateProviders(provider: Provider) {
    let dialogRef: MatDialogRef<CreateModifyProviderComponent>;
    dialogRef = this.dialog.open(CreateModifyProviderComponent, {
      width: "90%",
      height: "90%",
      data: {provider}
    });
    return dialogRef.afterClosed();
  }


}
