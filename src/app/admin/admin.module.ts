import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
=======
import { AdminRootComponent } from './admin-root/admin-root.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminRootComponent],
>>>>>>> master
  imports: [
    CommonModule,
    AdminRootComponent,
    AdminRoutingModule
  ],
  exports: [AdminRootComponent]
})
export class AdminModule { }
