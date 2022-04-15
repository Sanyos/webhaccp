import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/login/login.component';
import { CompaniesComponent } from './feature/companies/page/companies/companies.component';
import { CompanyDetailsComponent } from './feature/companies/page/company-details/company-details.component';
import { HomeComponent } from './feature/home/page/home.component';

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
  },
  {
    path: 'company/details',
    component: CompanyDetailsComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'company/details/:id',
    component: CompanyDetailsComponent,
    // canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
