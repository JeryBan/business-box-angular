import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/interfaces/employee';
import { BusinessService } from 'src/app/shared/services/business.service';

@Component({
  selector: 'app-insert-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insert-employee.component.html',
  styleUrl: './insert-employee.component.css'
})
export class InsertEmployeeComponent implements OnInit {

  @Output() employeeToInsert = new EventEmitter<Employee>();
  @Output() modalState = new EventEmitter<void>();

  employeeForm: FormGroup;
  employee: Employee | undefined;

  businessService: BusinessService = inject(BusinessService);
  formBuilder: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: [''],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.pattern('^[0-9]{10}$')],
      email: ['', Validators.email],
      filesPath: [null]
    });
  }

  submit(): void {    
    if (this.employeeForm.valid) {
      this.employee = {
        id: null,
        firstname: this.employeeForm.value.firstName,
        lastname: this.employeeForm.value.lastName,
        phoneNumber: this.employeeForm.value.phoneNumber,
        email: this.employeeForm.value.email,
        filesPath: this.employeeForm.value.filesPath,
        business: this.businessService.activeBusiness()
        
      };
      this.employeeToInsert.emit(this.employee);
    } 
    
  }
  

  closeModal(): void {
    this.modalState.emit()
  }



}
