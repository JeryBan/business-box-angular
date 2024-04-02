import { Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    
    {path: 'login', component: LoginComponent},
    {path: 'home', component: NavigationComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'inventory', component: InventoryComponent}
];
