import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AdminRootComponent } from "./admin-root/admin-root.component";
import { AddProductComponent } from './add-product/add-product.component';

const ROUTES: Routes = [
  { 
    path: "admin", component: AdminRootComponent,
    children: [
      { path: 'add-product', component: AddProductComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
