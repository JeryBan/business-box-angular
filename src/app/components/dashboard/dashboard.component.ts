import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "./chat/chat.component";
import { BusinessService } from 'src/app/shared/services/business.service';
import { UserSettings } from 'src/app/shared/interfaces/user-settings';
import { UserService } from 'src/app/shared/services/user.service';
import { Business, BusinessToInsert } from 'src/app/shared/interfaces/business';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, ChatComponent]
})
export class DashboardComponent implements OnInit {

  businessService: BusinessService = inject(BusinessService);
  userService: UserService = inject(UserService);

  user = this.userService.loggedUser;
  userSettings: UserSettings | null;

  ngOnInit() {
    this.getSettings(this.user().username)
  }

  async getSettings(username: string): Promise<void> {
    try {
      this.userSettings = await this.userService.fetchUserSettings(username, localStorage.getItem('access_token')); 
      
    } catch (error) {
      console.error(error.message);
    }
  }

  addBusiness(name: string): void {
    const businessToInsert: BusinessToInsert = {
      name: name,
      email: this.user().username
    }

    this.businessService.addBusinessToUser(businessToInsert, localStorage.getItem('access_token')).subscribe({
      next: (response: Business) => {
        this.businessService.activeBusiness.set(response)
      },
      error: (error) => {
        console.error('Error adding business', error.message)
      }
    })
  }

}
