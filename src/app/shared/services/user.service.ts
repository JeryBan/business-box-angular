import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggedUser, User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserSettings } from '../interfaces/user-settings';
import { ChatService } from './chat.service';
import { BusinessService } from './business.service';

const endpoint = `${environment.serverURL}/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  businessService: BusinessService = inject(BusinessService)
  chatService: ChatService = inject(ChatService)
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
    this.chatService.disconnect();
    this.businessService.activeBusiness.set(null);
    this.loggedUser.set(null);
    localStorage.removeItem('access_token');

    this.router.navigate(['login'])
  }

  fetchUserSettings = async (email: string, access_token: string): Promise<UserSettings> => {
    try {
        const response = await fetch(`${endpoint}/settings/${email}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${access_token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user settings. Status: ${response.status}`);
        }

        const settings = await response.json();
        return settings;

    } catch (error) {
        console.error('Error fetching user settings: ', error.message);
        return null;
    }
  }

  updateSettings = async (data: UserSettings, email, access_token: string): Promise<void> => {
    try {
      const response = await fetch(`${endpoint}/settings/${email}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
      });

      if(!response.ok) {
        throw new Error(`Failed to update settings. Status: ${response.status}`)
      }

    } catch (error) {
      console.error('Error updating settings: ', error.message)
    }
  }
  
}
