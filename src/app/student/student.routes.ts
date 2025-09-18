import { Routes } from "@angular/router";

export const STUDENT_ROUTES: Routes =[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadComponent:()=> import('../student/home/home.component')
        .then(m=> m.HomeComponent)
    }
]