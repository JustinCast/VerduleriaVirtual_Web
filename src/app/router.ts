import { Routes } from '@angular/router';
import { AdminRootComponent } from './admin/admin-root/admin-root.component';
import { ProviderRootComponent } from './provider/provider-root/provider-root.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  {path: 'admin', component: AdminRootComponent},
  {path: 'provider', component: ProviderRootComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: LoginComponent}
]
