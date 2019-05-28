import { Routes } from '@angular/router';
import { AdminRootComponent } from './admin/admin-root/admin-root.component';
import { ProviderRootComponent } from './provider/provider-root/provider-root.component';
import { HomeComponent } from './admin/home/home.component';
import { CreateStocktakingComponent } from './provider/create-stocktaking/create-stocktaking.component';

export const ROUTES: Routes = [
  {path: 'admin', component: AdminRootComponent},
  {path: 'provider', component: ProviderRootComponent},
  {path: '', component: CreateStocktakingComponent},
]