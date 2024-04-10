import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/interfaces/employee';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnChanges {

  @Input() currentEmployee: Employee | undefined;
  @Output() employeeToUpdate = new EventEmitter<Employee>();
  @Output() modalState = new EventEmitter<void>();

  employeeForm: FormGroup;
  employee: Employee | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: [this.currentEmployee.firstname],
      lastName: [this.currentEmployee.lastname, Validators.required],
      phoneNumber: [this.currentEmployee.phoneNumber, Validators.pattern('^[0-9]{10}$')],
      email: [this.currentEmployee.email, Validators.email],
      filesPath: [null]
    })
  }

  submit(): void {    
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
  
  closeModal(): void {
    this.modalState.emit()
  }

}
