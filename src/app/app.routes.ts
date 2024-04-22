import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authenticationGuard } from './shared/guards/authentication.guard';
import { NavigationComponent } from './components/navigation/navigation.component';

export const routes: Routes = [
    
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: NavigationComponent, canActivate: [authenticationGuard]},

];
