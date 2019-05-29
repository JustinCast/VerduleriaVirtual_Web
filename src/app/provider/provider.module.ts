import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocktakingComponent } from './stocktaking/stocktaking.component';
import { CreateStocktakingComponent } from './create-stocktaking/create-stocktaking.component';
import { ProviderRootComponent } from './provider-root/provider-root.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProviderRootComponent,
    StocktakingComponent, 
    CreateStocktakingComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [ProviderRootComponent]
})
export class ProviderModule { }
