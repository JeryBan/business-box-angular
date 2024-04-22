import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusinessToInsert, Business, ActiveBusiness } from '../interfaces/business';

const endpoint = `${environment.serverURL}/business`

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  http: HttpClient = inject(HttpClient)

  activeBusiness = signal<Business | null>(null);

  constructor() {
    effect( () => {
      if (this.activeBusiness()) {
        console.log('Business ' + this.activeBusiness().name + ' selected.')
      }
    })
  }

  fetchUserBusinesses(email, access_token: string): Observable<Business[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });

    return this.http.get<Business[]>(`${endpoint}/${email}`, { headers })
  }

  addBusinessToUser(business: BusinessToInsert, access_token: string): Observable<Business> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });

    return this.http.post<Business>(`${endpoint}/`, business, { headers })
  }
}
