import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserSettings } from 'src/app/shared/interfaces/user-settings';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent implements OnInit {

  userService: UserService = inject(UserService);
  formBuilder: FormBuilder = inject(FormBuilder);
  
  user = this.userService.loggedUser;
  userSettings: UserSettings = {} as UserSettings;
  settingsForm: FormGroup;
  applyCheck: boolean;

  ngOnInit(): void {
  
    this.settingsForm = this.formBuilder.group({
      theme: [''],
      chatVisible: [''],
      notificationsEnabled: [''],
    })

    this.getSettings(this.user().username)
    this.applyCheck = false;

    this.settingsForm.valueChanges.subscribe(() => {
      this.applyCheck = false;
    });
    
  
  }


  async getSettings(username: string): Promise<void> {
    try {
      this.userSettings = await this.userService.fetchUserSettings(username, localStorage.getItem('access_token'));

      this.settingsForm.get('theme').setValue(this.userSettings.theme)
      this.settingsForm.get('chatVisible').setValue(this.userSettings.chatVisible);
      this.settingsForm.get('notificationsEnabled').setValue(this.userSettings.notificationsEnabled);   
      
    } catch (error) {
      console.error(error.message);
    }
  }
  
  async applyChanges(): Promise<void> {
    this.userSettings = {
      id: null,
      theme: this.settingsForm.value.theme,
      chatVisible: this.settingsForm.value.chatVisible,
      notificationsEnabled: this.settingsForm.value.notificationsEnabled
    }

    try {
      this.userService.updateSettings(
        this.userSettings,
        this.user().username,
        localStorage.getItem('access_token')
      )
      this.applyCheck = true;

    } catch (error) {
      console.error(error.message)
    }

  }

}
