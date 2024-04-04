import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Employee } from 'src/app/shared/interfaces/employee';
import { fetchEmployees } from './employees.controller';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';

@Component({
    selector: 'app-employees',
    standalone: true,
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.css',
    imports: [RouterLink, InsertEmployeeComponent]
})
export class EmployeesComponent {


  openModal() {
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  closeModal() {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
  }

  employees: Employee[]

  ngOnInit(): void {
    this.getEmployees();
  }

  async getEmployees(): Promise<void> {
    try {
      this.employees = await fetchEmployees();
    } catch (error) {
      console.error('Error fetching employees:', error);
      this.employees = [];
    }
  }

}
