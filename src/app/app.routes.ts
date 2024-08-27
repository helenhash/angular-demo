import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './main/guard/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { RouterConfig } from './config/route.constans';

export const routes: Routes = [
  {
    path: RouterConfig.CUSTOMER.path,
    loadChildren: () => {
      return import('./pages/customer/customer.routes').then(m => m.customerRoutes);
    },
    title: RouterConfig.CUSTOMER.title,
    data: RouterConfig.CUSTOMER.data,
    canActivate: [authGuard]
  },
  {
    path: RouterConfig.DEMO.path,
    loadChildren: () => {
      return import('./pages/demo-page/demo.routes').then(m => m.demoRoutes)
    },
    data: RouterConfig.DEMO.data,
    canActivate: [authGuard]
  },
  {
    path: RouterConfig.LOGIN.path,
    component: LoginComponent,
    data: RouterConfig.LOGIN.data,
  },
  {
    path: RouterConfig.HOME.path,
    component: HomeComponent,
    data: RouterConfig.HOME.data,
  }
];
