import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesComponent } from "../app/employees/components/employees.component";
import {EmployeeListComponent } from "../app/employees/components/employees-list.component";
import { HttpModule } from "@angular/http";
import { EmployeeService } from "../app/employees/services/employee.service";
import { FirstLetterCapital } from "../app/employees/pipes/First-letter-capital";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,EmployeeListComponent,FirstLetterCapital
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
