import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
