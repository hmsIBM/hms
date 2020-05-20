import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';

import { LoginComponent } from './login/login.component';
import { DepartmentComponent } from './department/department.component';

import { DoctorDisplayComponent } from './doctor-display/doctor-display.component';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';


//import { DepartmentAddComponent } from './department-add/department-add.component';
//import { PatientComponent } from './patient/patient.component';
//import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientComponent } from './patient/patient.component';
//import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ImagesComponent } from './images/images.component';
import { OverlapComponent } from './overlap/overlap.component';
import { LandingComponent } from './landing/landing.component';
import {FormUploadComponent} from './upload/form-upload/form-upload.component'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  // { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'upload', component: FormUploadComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'App', component: AppComponent },
  { path: 'patient', component: PatientComponent},
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'login' , component: LoginComponent},
  { path: 'department' , component: DepartmentComponent},
  { path: 'app-doctor-display' , component: DoctorDisplayComponent},
  
  { path: 'app-doctoradd' , component: DoctoraddComponent},

  {path: 'overlap' , component:OverlapComponent},

 // { path: 'add-patient', component: AddPatientComponent},


  //{ path: 'add' , component: DepartmentAddComponent},
  { path: 'add-patient', component: AddPatientComponent},
  { path: 'images', component: ImagesComponent},
  { path: 'homepage', component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
