import { Component, effect, inject } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserService } from 'src/app/shared/services/user.service';
import { BusinessService } from 'src/app/shared/services/business.service';
import { Business, BusinessToInsert } from 'src/app/shared/interfaces/business';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EmployeesComponent } from "../employees/employees.component";
import { InventoryComponent } from "../inventory/inventory.component";
import { UserSettingsComponent } from "../user-settings/user-settings.component";


@Component({
    selector: 'app-navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css',
    animations: [
        trigger('expandCollapse', [
            state('collapsed', style({
                height: '4.2rem',
                overflow: 'hidden'
            })),
            state('expanded', style({
                height: '*',
            })),
            transition('collapsed <=> expanded', [
                animate('0.4s ease-out')
            ])
        ])
    ],
    imports: [RouterOutlet,
        RouterLink,
        RouterLinkActive,
        NgbModule, DashboardComponent, EmployeesComponent, InventoryComponent, UserSettingsComponent]
})
export class NavigationComponent {

  userService: UserService = inject(UserService);
  businessService: BusinessService = inject(BusinessService);
  router: Router = inject(Router);

  businessList: Business[] | null
  menuState: string;
  currentView: string
  user = this.userService.loggedUser
  activeBusiness = this.businessService.activeBusiness

  constructor() {
    this.menuState = 'collapsed';
    this.currentView = 'dashboard';

    effect( () => {
      if (this.userService.loggedUser()) {
        this.fetchBusinessList(this.user().username)
      }
    })

  }

  selectBusiness(business: Business): void {
    this.activeBusiness.set(business)
    this.menuState = 'collapsed';

    this.currentView = "dashboard"
  }

  fetchBusinessList(username: string): void {
    this.businessService.fetchUserBusinesses(username, localStorage.getItem('access_token')).subscribe({
      next: (response) => {
        this.businessList = response;

        if (this.businessList && this.businessList.length > 0) {
          this.activeBusiness.set(this.businessList[0]);
        }

      },
      error: (error) => {
        console.error('Error fetching business list', error.message);
      }
    })
  }

  addBusiness(name: string): void {
    const businessToInsert: BusinessToInsert = {
      name: name,
      email: this.user().username
    }

    this.businessService.addBusinessToUser(businessToInsert, localStorage.getItem('access_token')).subscribe({
      next: (response: Business) => {
        this.businessList.push(response);

        this.menuState = 'collapsed';
        this.router.navigate(['dashboard'])        
      },
      error: (error) => {
        console.error('Error adding business', error.message)
      }
    })
  }

  logout() {
    this.userService.logoutUser();
  }

  toggleMenu(): void {
    this.menuState = this.menuState === 'collapsed' ? 'expanded' : 'collapsed';
  }

  goTo(route: string) {
    this.currentView = route;
  }

}

