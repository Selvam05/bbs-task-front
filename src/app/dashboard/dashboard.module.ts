import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LoginComponent } from './login/login.component';
import { RegSuccessComponent } from './reg-success/reg-success.component';
import { RegisterComponent } from './register/register.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    RegisterComponent,
    RegSuccessComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    
  ]
})
export class DashboardModule { }
