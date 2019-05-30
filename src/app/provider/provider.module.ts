import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StocktakingComponent } from "./stocktaking/stocktaking.component";
import { CreateStocktakingComponent } from "./create-stocktaking/create-stocktaking.component";
import { ProviderRootComponent } from "./provider-root/provider-root.component";
import { ProviderRoutingModule } from "./provider-routing.module";
import { PurchasesReportComponent } from "./purchases-report/purchases-report.component";
import { SharedModule } from "../shared/shared.module";
import { PurchasesResultDialogComponent } from "./purchases-result-dialog/purchases-result-dialog.component";

@NgModule({
  declarations: [
    ProviderRootComponent,
    PurchasesReportComponent,
    PurchasesResultDialogComponent,
    StocktakingComponent,
    CreateStocktakingComponent
  ],
  imports: [CommonModule, ProviderRoutingModule, SharedModule],
  entryComponents: [PurchasesResultDialogComponent],
  exports: [ProviderRootComponent]
})
export class ProviderModule {}
