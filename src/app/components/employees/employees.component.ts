import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({
            html: 'Updated successfully;'
          });
          this.getEmployees();
        });
    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({
            html: 'Saved successfully!'
          });
          this.getEmployees();
        });
    }
  }

  getEmployees() {
    this.employeeService.getEmployee().subscribe(res => {
      this.employeeService.employees = res as Employee[];
    });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: String) {
    if (confirm('Are you sure to delete this employee?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          const jsonRes = JSON.parse(JSON.stringify(res));
          M.toast({
            html: jsonRes.status,
            classes: 'rounded'
          });
          console.log(res);
          this.getEmployees();
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
