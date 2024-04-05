import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/interfaces/employee';

@Component({
  selector: 'app-insert-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insert-employee.component.html',
  styleUrl: './insert-employee.component.css'
})
export class InsertEmployeeComponent {

  @Output() employeeToInsert = new EventEmitter<Employee>();
  @Output() modalState = new EventEmitter<void>();

  employeeForm: FormGroup;
  employee: Employee | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: [''],
      lastName: ['', Validators.required],
      phoneNumber: [''],
      email: ['', Validators.email],
      filesPath: [null]
    });
  }

  submit() {    
    if (this.employeeForm.valid) {
      this.employee = {
        firstname: this.employeeForm.value.firstName,
        lastname: this.employeeForm.value.lastName,
        phoneNumber: this.employeeForm.value.phoneNumber,
        email: this.employeeForm.value.email,
        filesPath: this.employeeForm.value.filesPath
      };
      this.employeeToInsert.emit(this.employee);
    } 
    
  }
  

  closeModal() {
    this.modalState.emit()
  }



}
