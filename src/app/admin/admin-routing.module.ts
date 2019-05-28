import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AdminRootComponent } from "./admin-root/admin-root.component";

const ROUTES: Routes = [{ path: "admin", component: AdminRootComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
