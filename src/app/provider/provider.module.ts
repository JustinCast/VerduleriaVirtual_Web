import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocktakingComponent } from './stocktaking/stocktaking.component';
import { CreateStocktakingComponent } from './create-stocktaking/create-stocktaking.component';
import { ProviderRootComponent } from './provider-root/provider-root.component';
import { ProviderRoutingModule } from './provider-routing.module';

@NgModule({
  declarations: [
    ProviderRootComponent,
    StocktakingComponent, 
    CreateStocktakingComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ],
  exports: [ProviderRootComponent]
})
export class ProviderModule { }
