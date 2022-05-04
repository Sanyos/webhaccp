import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from './core/guards/admin-auth-guard/admin-auth-guard.service';
import { AuthGuardService } from './core/guards/auth-guard/auth-guard.service';
import { AdminComponent } from './feature/admin/page/admin.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { CompaniesComponent } from './feature/companies/page/companies/companies.component';
import { CompanyDetailsComponent } from './feature/companies/page/company-details/company-details.component';
import { DocumentListComponent } from './feature/companies/page/document-list/document-list.component';
import { HomeComponent } from './feature/home/page/home.component';
import { ProfileComponent } from './feature/profile/page/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'company/details',
    component: CompanyDetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'company/details/:id',
    component: CompanyDetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'company/documents/:id',
    component: DocumentListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: {
      expected: ['ADMIN'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
