import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTES } from "./router";
import { RouterModule } from "@angular/router";
import { AdminModule } from './admin/admin.module';
import { ProviderModule } from './provider/provider.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    ProviderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
