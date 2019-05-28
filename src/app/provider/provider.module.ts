import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProviderComponent } from './provider/provider.component';

@NgModule({
  declarations: [LoginComponent, ProviderComponent],
  imports: [
    CommonModule
  ]
})
export class ProviderModule { }
