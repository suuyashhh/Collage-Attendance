import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ComponentsModule } from 'app/components/components.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component'; // Add this import

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    MarkAttendanceComponent // Add LandingComponent here
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ComponentsModule
  ]
})
export class StudentModule { }