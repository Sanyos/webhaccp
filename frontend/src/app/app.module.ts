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
import { CompaniesComponent } from './feature/companies/page/companies/companies.component';
import { CompaniesTableComponent } from './feature/companies/component/companies-table/companies-table.component';
import { CompaniesFormComponent } from './feature/companies/component/companies-form/companies-form.component';
import { CompanyDetailsComponent } from './feature/companies/page/company-details/company-details.component';
import { DocumentsTableComponent } from './feature/companies/component/documents-table/documents-table.component';
import { DocumentListComponent } from './feature/companies/page/document-list/document-list.component';
import { HeaderComponent } from './feature/home/component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavMenuComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CompaniesComponent,
    CompaniesTableComponent,
    CompaniesFormComponent,
    CompanyDetailsComponent,
    DocumentsTableComponent,
    DocumentListComponent,
    HeaderComponent,
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
