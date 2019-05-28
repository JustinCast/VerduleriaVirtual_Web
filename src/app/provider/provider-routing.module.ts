import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProviderRootComponent } from './provider-root/provider-root.component';
import { ProviderComponent } from './provider/provider.component';

const ROUTES: Routes = [
  { path: 'provider', component: ProviderRootComponent },
  {path: 'mainProvider', component: ProviderComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
