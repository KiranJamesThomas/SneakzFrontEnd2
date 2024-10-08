import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: LoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'registration', component: RegistrationComponent },
];
