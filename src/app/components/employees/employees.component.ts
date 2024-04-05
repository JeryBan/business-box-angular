import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Employee } from 'src/app/shared/interfaces/employee';
import { deleteEmployee, fetchEmployees, insertEmployee } from './employees.controller';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';

@Component({
    selector: 'app-employees',
    standalone: true,
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.css',
    imports: [RouterLink, InsertEmployeeComponent]
})
export class EmployeesComponent {

  employees: Employee[]
  modalOperation: string

  ngOnInit(): void {
    this.getEmployees();
  }

  async getEmployees(): Promise<void> {
    try {
      this.employees = await fetchEmployees();
    } catch (error) {
      console.error(error);
      this.employees = [];
    }
  }

  async addEmployee(data): Promise<void> {
    try {
      await insertEmployee(data);
      this.closeModal()
      this.getEmployees();

    } catch (error) {
      console.error(error);
    }
  }

  async removeEmployee(): Promise<void> {
    try {
      await deleteEmployee(1);
      this.closeModal();
      this.getEmployees();

    } catch (error) {
      console.error(error);
    }
  }

  openModal(operation: string) {
    this.modalOperation = operation;
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  closeModal() {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
  }
  

}
