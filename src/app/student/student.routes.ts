import { Routes } from "@angular/router";
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

export const STUDENT_ROUTES: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent }
        ]
    }
];