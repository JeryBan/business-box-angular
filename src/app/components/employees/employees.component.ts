import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Employee } from 'src/app/shared/interfaces/employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  employees: Employee[] = [
    {
      "firstname": "Jonathan",
      "lastname": "Williams",
      "email": "jonathan.robert.williams@aol.com",
      "phoneNumber": "402-433-5720"
    },
    {
      "firstname": "Joshua",
      "lastname": "Parker",
      "email": "j.m.parker@hotmail.com",
      "phoneNumber": "283-249-5225"
    },
    {
      "firstname": "Anthony",
      "lastname": "Barnes",
      "email": "anthony34@gmail.com",
      "phoneNumber": "260-521-3025"
    },
    {
      "firstname": "Dylan",
      "lastname": "Cook",
      "email": "dylan.cook@rocketmail.com",
      "phoneNumber": "602-744-3369"
    },
    {
      "firstname": "Andrew",
      "lastname": "Sanders",
      "email": "andrew.j.sanders@ymail.com",
      "phoneNumber": "407-825-9232"
    },
    {
      "firstname": "Amber",
      "lastname": "Carter",
      "email": "ambercarter@rocketmail.com",
      "phoneNumber": "380-711-3742"
    },
    {
      "firstname": "Kimberly",
      "lastname": "Barnes",
      "email": "kimberly_l96@outlook.com",
      "phoneNumber": "503-382-3939"
    },
    {
      "firstname": "Oliver",
      "lastname": "Bailey",
      "email": "oliver_bailey94@rocketmail.com",
      "phoneNumber": "774-536-8177"
    },
    {
      "firstname": "Jessica",
      "lastname": "Davis",
      "email": "j_davis@yahoo.com",
      "phoneNumber": "941-786-1062"
    },
    {
      "firstname": "Aubrey",
      "lastname": "Washington",
      "email": "aubreymwashington@gmail.com",
      "phoneNumber": "772-126-7670"
    }
  ]
    
}
