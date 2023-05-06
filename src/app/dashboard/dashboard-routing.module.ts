import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegSuccessComponent } from './reg-success/reg-success.component';
import { RegisterComponent } from './register/register.component';
import { RegListComponent } from './reg-list/reg-list.component';

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        children: [
            {
                path: "",
                component: RegisterComponent
            },
            {
                path: "app-reg-success",
                component: RegSuccessComponent
            },
            {
                path: "app-login",
                component: LoginComponent
            }
        ]
    },
    {
        path: "app-reg-list",
        component: RegListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
