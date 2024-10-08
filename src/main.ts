import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { AdminLoginComponent } from './app/admin-login/admin-login.component';
import { RegistrationComponent } from './app/registration/registration.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
