import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoggedUser, User } from 'src/app/shared/interfaces/user';
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
export class LoginComponent implements OnInit {

  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  formBuilder: FormBuilder = inject(FormBuilder);

  loginForm: FormGroup;
  userRegistered: Boolean = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }


  registerUser() {
    const user = this.loginForm.value as User;

    this.userService.registerUser(user).subscribe({
      next: (response) => {
        const access_token = response.access_token;
        localStorage.setItem('access_token', access_token);

        const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedUser;
        this.userService.loggedUser.set({
          email: decodedTokenSubject.email
        });

        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        if (error.status == 409) {
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
        const access_token = response.access_token;
        localStorage.setItem('access_token', access_token);

        const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedUser;
        this.userService.loggedUser.set({
          email: decodedTokenSubject.email
        });

        this.router.navigate(['/dashboard']);
        
      },
      error: (error) => {
        if (error.status == 401) {
          console.error('Unauthorized.')
          this.userRegistered = false;
        } else {
          console.error('Error login in:', error.mesage);
        }
        
      }
    })    
  }

}
