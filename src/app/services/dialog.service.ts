import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateStocktakingComponent } from '../provider/create-stocktaking/create-stocktaking.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openCreateStock() {
    let dialogRef: MatDialogRef<CreateStocktakingComponent>;
    dialogRef = this.dialog.open(CreateStocktakingComponent, {
      width: "40%",
      height: "45%",
      panelClass: "dialog"
    });
    return dialogRef.afterClosed();
  }

}
