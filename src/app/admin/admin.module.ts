import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminRootComponent,
    AddProductComponent,
    AdminRootComponent,
    HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [AdminRootComponent]
})
export class AdminModule { }
