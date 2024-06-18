import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "./chat/chat.component";
import { BusinessService } from 'src/app/shared/services/business.service';
import { UserSettings } from 'src/app/shared/interfaces/user-settings';
import { UserService } from 'src/app/shared/services/user.service';

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

}
