import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminRootComponent],
  imports: [
    CommonModule,
    AdminRootComponent,
    AdminRoutingModule
  ],
  exports: [AdminRootComponent]
})
export class AdminModule { }
