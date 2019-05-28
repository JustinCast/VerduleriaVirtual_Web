import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRootComponent } from './provider-root/provider-root.component';
import { ProviderRoutingModule } from './provider-routing.module';

@NgModule({
  declarations: [ProviderRootComponent],
  imports: [
    CommonModule,
    ProviderRootComponent,
    ProviderRoutingModule
  ],
  exports: [ProviderRootComponent]
})
export class ProviderModule { }
