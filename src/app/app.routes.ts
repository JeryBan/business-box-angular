import { Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authenticationGuard } from './shared/guards/authentication.guard';

export const routes: Routes = [
    
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [authenticationGuard]},
    {path: 'employees', component: EmployeesComponent, canActivate: [authenticationGuard]},
    {path: 'inventory', component: InventoryComponent, canActivate: [authenticationGuard]}
];
