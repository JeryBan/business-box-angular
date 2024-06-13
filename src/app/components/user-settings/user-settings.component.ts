import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  constructor() {
    this.getUserSettings(this.user().username)
  }


  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      isChatVisible: [this.userSettings.isChatVisible],
      notificationsEnabled: [this.userSettings.notificationsEnabled],
      theme: [this.userSettings.theme]
    })
  }

  getUserSettings(username: string): void {
    this.userService.getUserSettings(username, localStorage.getItem('access_token')).subscribe({
      next: (response) => {
        this.userSettings = response;
        console.log(this.userSettings)

        const themeControl = this.settingsForm.get('theme') as FormControl;
        themeControl.patchValue(this.userSettings.theme);
      },
      error: (error) => {
        console.error('Error fetching user settings', error.message);
      }
    })

  }

}
