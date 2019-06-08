import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTES } from "./router";
import { RouterModule } from "@angular/router";
import { AdminModule } from './admin/admin.module';
import { ProviderModule } from './provider/provider.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { loginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ProviderService } from './services/provider.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    ProviderModule,
    //AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
