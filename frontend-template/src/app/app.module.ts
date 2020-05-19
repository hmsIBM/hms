import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import {HttpClientModule} from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
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
// import { PatientComponent } from './patient/patient.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { DepartmentAddComponent } from './department-add/department-add.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDisplayComponent } from './doctor-display/doctor-display.component';

import { DepartmentAddComponent } from './department-add/department-add.component';
import { DoctoraddComponent } from './doctoradd/doctoradd.component';

import { ImagesComponent } from './images/images.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientComponent } from './patient/patient.component';

import { OverlapComponent } from './overlap/overlap.component';

import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    ImagesComponent,
    LoginComponent,
    DepartmentComponent,
    PatientComponent,
    OverlapComponent,
    DepartmentComponent,
    DepartmentAddComponent,
    // DepartmentComponent,
    // DepartmentAddComponent,
    DepartmentComponent,
    DepartmentAddComponent,
    ImagesComponent,
    DoctoraddComponent,
    DoctorDisplayComponent,
    PatientComponent,
    AddPatientComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }