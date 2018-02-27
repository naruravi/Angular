import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from "../services/employee.service";
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employees',
  templateUrl: '../views/employees.component.html',
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {


  title: string = "Employees List";
  EmployeeList: Employee[] = [];
  employeeId: number;
  parentMessage: string = "MessageFromParent!!!!";
  childMessage: string;
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe(
      (data) => this.EmployeeList = data
    );
  }
  displaySelectedEmployee(employee: Employee): void {
    this.employeeId = employee.Id;
  }
  NotifyParent(msg) {
    this.childMessage = msg;
  }
}
