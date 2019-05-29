import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProviderRootComponent } from './provider-root/provider-root.component';
import { PurchasesReportComponent } from './purchases-report/purchases-report.component';

const ROUTES: Routes = [
  { 
    path: "provider", component: ProviderRootComponent,
    children: [
      {
        path: 'purchases-report', component: PurchasesReportComponent
      }
    ]
  }
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
