import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProviderRootComponent } from "./provider-root/provider-root.component";
import { ProvidersComponent } from "./providers/providers.component";
import { PurchasesReportComponent } from "./purchases-report/purchases-report.component";
import { CreateStocktakingComponent } from "./create-stocktaking/create-stocktaking.component";
import { StocktakingComponent } from "./stocktaking/stocktaking.component";

const ROUTES: Routes = [
  {
    path: "provider",
    component: ProviderRootComponent,
    children: [
      {
        path: "providers",
        component: ProvidersComponent
      },
      { path: "create-stocktaking", component: CreateStocktakingComponent },
      { path: "show-stocktaking", component: StocktakingComponent },
      {
        path: "purchases-report",
        component: PurchasesReportComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class ProviderRoutingModule {}
