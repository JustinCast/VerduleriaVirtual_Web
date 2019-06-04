import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateStocktakingComponent } from '../provider/create-stocktaking/create-stocktaking.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openCreateStock() {
    let dialogRef = this.dialog.open(CreateStocktakingComponent, {
      width: "40%",
      height: "45%",
      panelClass: "dialog"
    });
    return dialogRef.afterClosed();
  }

}
