import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRootComponent } from './provider-root/provider-root.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { ProvidersComponent } from './providers/providers.component';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { StocktakingComponent } from "./stocktaking/stocktaking.component";
import { CreateStocktakingComponent } from "./create-stocktaking/create-stocktaking.component";
import { PurchasesReportComponent } from "./purchases-report/purchases-report.component";
import { PurchasesResultDialogComponent } from "./purchases-result-dialog/purchases-result-dialog.component";

@NgModule({
  declarations: [
    ProviderRootComponent,
    ProvidersComponent,
    PurchasesReportComponent,
    PurchasesResultDialogComponent,
    StocktakingComponent,
    CreateStocktakingComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHGUUQv1uL0NOQ3C1vB8LfbOQEFNlrQHg'
    })
  ],
  entryComponents: [PurchasesResultDialogComponent],
  exports: [ProviderRootComponent]
})
export class ProviderModule {}
