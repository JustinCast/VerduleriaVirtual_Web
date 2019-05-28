import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [AdminRootComponent, AddProductComponent],
  imports: [
    CommonModule,
    AdminRootComponent,
    AdminRoutingModule
  ],
  exports: [AdminRootComponent]
})
export class AdminModule { }
