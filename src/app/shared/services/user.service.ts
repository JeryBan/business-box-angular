import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggedUser, User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const endpoint = `${environment.serverURL}/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient = inject(HttpClient)
  router: Router = inject(Router)

  loggedUser = signal<LoggedUser | null>(null);

  constructor() {
    effect( () => {
      if (this.loggedUser()) {
        console.log('User ' + this.loggedUser().username + ' loged in.')
      }
    })
  }
  
  registerUser(user: User): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(`${endpoint}/register`, user);
  }

  loginUser(user: User): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(`${endpoint}/login`, user);
  }

  logoutUser(): void {
    this.loggedUser.set(null);
    localStorage.removeItem('access_token')

    this.router.navigate(['login'])
  }

}
