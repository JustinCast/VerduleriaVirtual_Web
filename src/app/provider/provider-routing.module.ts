import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProviderRootComponent } from "./provider-root/provider-root.component";
import { ProvidersComponent } from "./providers/providers.component";

const ROUTES: Routes = [
  {
    path: "provider",
    component: ProviderRootComponent,
    children: [
      {
        path: "providers",
        component: ProvidersComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class ProviderRoutingModule {}
