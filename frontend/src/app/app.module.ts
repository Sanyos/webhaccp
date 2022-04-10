import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavMenuComponent } from './feature/nav-menu/nav-menu.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { HomeComponent } from './feature/home/page/home.component';
import { LoginFormComponent } from './feature/auth/component/login-form/login-form.component';
import { RegisterFormComponent } from './feature/auth/component/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavMenuComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
