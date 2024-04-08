import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/interfaces/employee';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  @Input() currentEmployee: Employee | undefined;
  @Output() employeeToUpdate = new EventEmitter<Employee>();
  @Output() modalState = new EventEmitter<void>();

  employeeForm: FormGroup;
  employee: Employee | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.employeeForm = this.formBuilder.group({
      firstName: [this.currentEmployee.firstname],
      lastName: [this.currentEmployee.lastname, Validators.required],
      phoneNumber: [this.currentEmployee.phoneNumber],
      email: [this.currentEmployee.email, Validators.email],
      filesPath: [null]
    })
  }

  submit() {    
    if (this.employeeForm.valid) {
      this.employee = {
        id: this.currentEmployee.id,
        firstname: this.employeeForm.value.firstName,
        lastname: this.employeeForm.value.lastName,
        phoneNumber: this.employeeForm.value.phoneNumber,
        email: this.employeeForm.value.email,
        filesPath: this.employeeForm.value.filesPath
      };
      this.employeeToUpdate.emit(this.employee);
    } 
    
  }
  
  closeModal() {
    this.modalState.emit()
  }

}
