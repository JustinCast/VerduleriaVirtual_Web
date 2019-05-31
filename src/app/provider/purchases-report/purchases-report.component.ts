import { Component, OnInit } from "@angular/core";
import { ProviderService } from "src/app/services/provider.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { DialogService } from "src/app/services/dialog.service";

@Component({
  selector: "app-purchases-report",
  templateUrl: "./purchases-report.component.html",
  styleUrls: ["./purchases-report.component.scss"]
})
export class PurchasesReportComponent implements OnInit {
  purchaseReportFG: FormGroup;
  constructor(
    private _provider: ProviderService,
    private _fb: FormBuilder,
    private _dialog: DialogService
  ) {
    this.purchaseReportFG = this._fb.group({
      initialDate: ["", Validators.required],
      finalDate: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    let initialDate: Date = new Date(
      this.purchaseReportFG.get("initialDate").value
    );
    let finalDate: Date = new Date(
      this.purchaseReportFG.get("finalDate").value
    );

    let initialDateFormatted = `${initialDate.getFullYear()}-${
      initialDate.getMonth() < 10
        ? "0" + Number(initialDate.getMonth() + 1)
        : Number(initialDate.getMonth() + 1)
    }-${initialDate.getDate()}`;

    let finalDateFormatted = `${finalDate.getFullYear()}-${
      finalDate.getMonth() < 10
        ? "0" + Number(finalDate.getMonth() + 1)
        : Number(finalDate.getMonth() + 1)
    }-${finalDate.getDate()}`;
    this._provider
      .getPurchasesReport(
        1,
        initialDateFormatted,
        finalDateFormatted
      )
      .subscribe(
        data => this._dialog.openPurchasesReportResult(data, initialDateFormatted, finalDateFormatted),
        (err: HttpErrorResponse) => this._provider.handleError(err)
      );
  }
}
