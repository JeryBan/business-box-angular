import { Component, inject } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterLinkActive,
            NgbModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  
  businessName = 'My business'
  otherBusiness = ['busibess 1', 'business 2', 'business 3']

  logout() {
   
  }


}

