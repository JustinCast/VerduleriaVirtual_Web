import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocktakingComponent } from './stocktaking/stocktaking.component';
import { CreateStocktakingComponent } from './create-stocktaking/create-stocktaking.component';

@NgModule({
  declarations: [StocktakingComponent, CreateStocktakingComponent],
  imports: [
    CommonModule
  ]
})
export class ProviderModule { }
