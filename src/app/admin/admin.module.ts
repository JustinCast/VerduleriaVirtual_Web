import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRootComponent } from "./admin-root/admin-root.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AddProductComponent } from "./add-product/add-product.component";
import { SharedModule } from "../shared/shared.module";
import { DropZoneDirective } from "./add-product/drop-zone.directive";

@NgModule({
  declarations: [
    AdminRootComponent,
    AddProductComponent,
    AdminRootComponent,
    DropZoneDirective
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  exports: [AdminRootComponent]
})
export class AdminModule {}
