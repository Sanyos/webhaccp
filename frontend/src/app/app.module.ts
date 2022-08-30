import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CardsSectionComponent } from './feature/home/component/cards-section/cards-section.component';
import { AboutComponent } from './feature/home/component/about/about.component';
import { ProfileComponent } from './feature/profile/page/profile.component';
import { SettingsFormComponent } from './feature/profile/component/settings-form/settings-form.component';
import { AdminComponent } from './feature/admin/page/admin.component';
import { UsersTableComponent } from './feature/admin/component/users-table/users-table.component';
import { JwtInterceptorInterceptor } from './core/interceptor/interceptor/jwt-interceptor.service';
import { HaccpComponent } from './feature/haccp/page/haccp.component';
import { AllCompaniesTableComponent } from './feature/admin/component/all-companies-table/all-companies-table.component';
import { AllDocumentsTableComponent } from './feature/admin/component/all-documents-table/all-documents-table.component';
import { HaccpFormComponent } from './feature/haccp/component/haccp-form/haccp-form.component';
import { HaccpFormSecondComponent } from './feature/haccp/component/haccp-form-second/haccp-form-second.component';
import { HaccpFormThirdComponent } from './feature/haccp/component/haccp-form-third/haccp-form-third.component';
import { HaccpCertificateComponent } from './feature/companies/page/haccp-certificate/haccp-certificate.component';
import { DocumentCardsComponent } from './feature/companies/component/document-cards/document-cards.component';
import { HaccpCategoryFormComponent } from './feature/haccp/component/haccp-category-form/haccp-category-form.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { SelectFormControlComponent } from './shared/select-form-control/select-form-control.component';
import { InputFormControlComponent } from './shared/input-form-control/input-form-control.component';
import { RadioFormControlComponent } from './shared/radio-form-control/radio-form-control.component';
import { HaccpRestaurantComponent } from './feature/haccp/page/haccp-restaurant/haccp-restaurant.component';
import { DescriptionComponent } from './feature/home/component/description/description.component';
import { ImageSectionComponent } from './feature/home/component/image-section/image-section.component';
import { DownloadHaccpComponent } from './feature/haccp/page/download-haccp/download-haccp.component';

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
    CardsSectionComponent,
    AboutComponent,
    ProfileComponent,
    SettingsFormComponent,
    AdminComponent,
    UsersTableComponent,
    HaccpComponent,
    AllCompaniesTableComponent,
    AllDocumentsTableComponent,
    HaccpFormComponent,
    HaccpFormSecondComponent,
    HaccpFormThirdComponent,
    HaccpCertificateComponent,
    DocumentCardsComponent,
    HaccpCategoryFormComponent,
    LoaderComponent,
    SelectFormControlComponent,
    InputFormControlComponent,
    RadioFormControlComponent,
    HaccpRestaurantComponent,
    DescriptionComponent,
    ImageSectionComponent,
    DownloadHaccpComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
