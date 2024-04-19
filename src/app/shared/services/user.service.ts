import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggedUser, User } from '../interfaces/user';

const endpoint = `${environment.serverURL}/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient = inject(HttpClient)

  loggedUser = signal<LoggedUser | null>(null);

  
  registerUser(user: User) {
    return this.http.post<{access_token: string}>(`${endpoint}/register`, user);
  }

  loginUser(user: User) {
    return this.http.post<{access_token: string}>(`${endpoint}/login`, user);
  }

}
