import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

const endpoint = `${environment.serverURL}/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient = inject(HttpClient)

  
  registerUser(user: User) {
    return this.http.post<{msg: string}>(`${endpoint}/register`, user);
  }

  loginUser(user: User) {
    return this.http.post<{msg: string, status: number}>(`${endpoint}/login`, user)
  }
}
