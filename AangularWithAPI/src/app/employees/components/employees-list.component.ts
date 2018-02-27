import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "../models/employee.model";
import { EmployeeService } from "../services/employee.service";
@Component({
    selector: 'app-employeelist',
    templateUrl: '../views/employees-list.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    @Input() messageFromParent: string;
    @Input()
    set empId(id: number) {
        this.employeeService.getEmployeeDetails(id).subscribe(
            (data) => this.EmployeeDetails = data
        );
    }
    @Output()
    change: EventEmitter<string> = new EventEmitter<string>();
    //@Input() empId: number;
    title: string = "Employee Details";
    EmployeeDetails: Employee;
    constructor(private employeeService: EmployeeService) {

    }
    triggerMessagetoParent(msg: string) {
        this.change.emit(msg);
    }
    ngOnInit() {
        // this.employeeService.getEmployeeDetails(2).subscribe(
        //     (data) => this.EmployeeDetails = data
        // );
    }
}