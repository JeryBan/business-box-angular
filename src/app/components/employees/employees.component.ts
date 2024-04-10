import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Employee } from 'src/app/shared/interfaces/employee';
import { deleteEmployee, fetchEmployees, insertEmployee, updateEmployee } from './employees.controller';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";

@Component({
    selector: 'app-employees',
    standalone: true,
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.css',
    imports: [RouterLink, InsertEmployeeComponent, UpdateEmployeeComponent]
})
export class EmployeesComponent implements OnChanges {

  employees: Employee[] = [];
  selectedEmployee: Employee | undefined;
  modalOperation: string | undefined;

  ngOnChanges(): void {
    this.getEmployees();
  }
  

  async getEmployees(): Promise<void> {
    try {
      this.employees = await fetchEmployees();
    } catch (error) {
      console.error(error.message);
      this.employees = [];
    }
  }

  async addEmployee(data): Promise<void> {
    try {
      await insertEmployee(data);
      this.closeModal()
      this.getEmployees();

    } catch (error) {
      console.error(error.message);
    }
  }

  async removeEmployee(): Promise<void> {
    try {
      await deleteEmployee(this.selectedEmployee['id']);
      this.closeModal();
      this.getEmployees();

    } catch (error) {
      console.error(error.message);
    }
  }

  async editEmployee(data): Promise<void> {
    try {
      await updateEmployee(data, data['id']);
      this.closeModal();
      this.getEmployees();

    } catch (error) {
      console.error(error.message)
    }
  }

  getEmployee(idx: number): void {
    this.selectedEmployee = this.employees[idx]
    
  }

  openModal(operation: string): void {
    this.modalOperation = operation;
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  closeModal(): void {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
  }
  
  
}
