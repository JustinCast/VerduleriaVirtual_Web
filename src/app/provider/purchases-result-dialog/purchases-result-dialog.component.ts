import { Component, OnInit, Inject } from "@angular/core";
import { PurchaseReport } from "src/app/models/PurchaseReport";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-purchases-result-dialog",
  templateUrl: "./purchases-result-dialog.component.html",
  styleUrls: ["./purchases-result-dialog.component.scss"]
})
export class PurchasesResultDialogComponent implements OnInit {
  total: number = 0;
  constructor(
    public dialogRef: MatDialogRef<PurchasesResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.data.purchases.forEach(e => {
      this.total += e.total_price
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
