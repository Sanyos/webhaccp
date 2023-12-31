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
import { HaccpComponent } from './feature/haccp/page/haccp/haccp.component';
import { AllCompaniesTableComponent } from './feature/admin/component/all-companies-table/all-companies-table.component';
import { AllDocumentsTableComponent } from './feature/admin/component/all-documents-table/all-documents-table.component';
import { HaccpFormComponent } from './feature/haccp/restaurant/component/haccp-form/haccp-form.component';
import { HaccpFormSecondComponent } from './feature/haccp/restaurant/component/haccp-form-second/haccp-form-second.component';
import { HaccpFormThirdComponent } from './feature/haccp/restaurant/component/haccp-form-third/haccp-form-third.component';
import { HaccpCertificateComponent } from './feature/companies/page/haccp-certificate/haccp-certificate.component';
import { DocumentCardsComponent } from './feature/companies/component/document-cards/document-cards.component';
import { HaccpCategoryFormComponent } from './feature/haccp/component/haccp-category-form/haccp-category-form.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { SelectFormControlComponent } from './shared/select-form-control/select-form-control.component';
import { InputFormControlComponent } from './shared/input-form-control/input-form-control.component';
import { RadioFormControlComponent } from './shared/radio-form-control/radio-form-control.component';
import { HaccpRestaurantComponent } from './feature/haccp/restaurant/page/haccp-restaurant/haccp-restaurant.component';
import { DescriptionComponent } from './feature/home/component/description/description.component';
import { ImageSectionComponent } from './feature/home/component/image-section/image-section.component';
import { DownloadHaccpComponent } from './feature/haccp/page/download-haccp/download-haccp.component';
import { HaccpBuffetComponent } from './feature/haccp/buffet/page/haccp-buffet/haccp-buffet.component';
import { HaccpMobileComponent } from './feature/haccp/mobile/page/haccp-mobile/haccp-mobile.component';
import { HaccpPubComponent } from './feature/haccp/pub/page/haccp-pub/haccp-pub.component';
import { MobileHaccpFormComponent } from './feature/haccp/mobile/component/mobile-haccp-form/mobile-haccp-form.component';
import { MobileHaccpFormSecondComponent } from './feature/haccp/mobile/component/mobile-haccp-form-second/mobile-haccp-form-second.component';
import { MobileHaccpFormThirdComponent } from './feature/haccp/mobile/component/mobile-haccp-form-third/mobile-haccp-form-third.component';
import { PubHaccpFormComponent } from './feature/haccp/pub/component/pub-haccp-form/pub-haccp-form.component';
import { PubHaccpFormSecondComponent } from './feature/haccp/pub/component/pub-haccp-form-second/pub-haccp-form-second.component';
import { PubHaccpFormThirdComponent } from './feature/haccp/pub/component/pub-haccp-form-third/pub-haccp-form-third.component';
import { BuffetHaccpFormComponent } from './feature/haccp/buffet/component/buffet-haccp-form/buffet-haccp-form.component';
import { BuffetHaccpFormSecondComponent } from './feature/haccp/buffet/component/buffet-haccp-form-second/buffet-haccp-form-second.component';
import { BuffetHaccpFormThirdComponent } from './feature/haccp/buffet/component/buffet-haccp-form-third/buffet-haccp-form-third.component';
import { QuestionsComponent } from './feature/questions/questions.component';
import { GyikComponent } from './feature/gyik/gyik.component';
import { RegConfirmComponent } from './feature/auth/reg-confirm/reg-confirm.component';
import { ChangePasswordComponent } from './feature/auth/change-password/change-password.component';
import { ReviewComponent } from './feature/review/page/review/review.component';
import { ReviewFormComponent } from './feature/review/component/review-form/review-form.component';
import { DownloadReviewComponent } from './feature/review/page/download-review/download-review.component';

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
    HaccpBuffetComponent,
    HaccpMobileComponent,
    HaccpPubComponent,
    MobileHaccpFormComponent,
    MobileHaccpFormSecondComponent,
    MobileHaccpFormThirdComponent,
    PubHaccpFormComponent,
    PubHaccpFormSecondComponent,
    PubHaccpFormThirdComponent,
    BuffetHaccpFormComponent,
    BuffetHaccpFormSecondComponent,
    BuffetHaccpFormThirdComponent,
    QuestionsComponent,
    GyikComponent,
    RegConfirmComponent,
    ChangePasswordComponent,
    ReviewComponent,
    ReviewFormComponent,
    DownloadReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
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
