import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,
            RouterOutlet,
            ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  userRegistered: Boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  registerUser() {
    const user = this.loginForm.value as User;

    this.userService.registerUser(user).subscribe({
      next: (response) => {
        console.log(response.msg)
      },
      error: (error) => {
        if (error.status == '409') {
          console.error('User already exists.')
        } else {
          console.error('Error registering user', error.message);
        }
      }
    })
  }

  signIn() {
    const user = this.loginForm.value as User;
  
    this.userService.loginUser(user).subscribe({
      next: (response) => {
        if (response.status == 200) {
          this.userRegistered = true;
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        if (error.status == '401') {
          console.error('Unauthorized.')
          this.userRegistered = false;
        } else {
          console.error('Error login in:', error.mesage);
        }
        
      }
    })    
  }

}
