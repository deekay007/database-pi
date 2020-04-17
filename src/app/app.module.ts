import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularDropdownModule } from 'angular-dropdown';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { BloodDonorComponent } from './blood-donor/blood-donor.component';
import { LifetimeMembersComponent } from './lifetime-members/lifetime-members.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    StudentComponent,
    VolunteersComponent,
    BloodDonorComponent,
    LifetimeMembersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule
    // AngularDropdownModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
