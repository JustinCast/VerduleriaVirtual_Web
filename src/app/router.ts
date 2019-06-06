import { Routes } from '@angular/router';
import { AdminRootComponent } from './admin/admin-root/admin-root.component';
import { ProviderRootComponent } from './provider/provider-root/provider-root.component';

export const ROUTES: Routes = [
  {path: 'admin', component: AdminRootComponent},
  {path: 'provider', component: ProviderRootComponent}
]