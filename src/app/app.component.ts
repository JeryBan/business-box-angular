import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        LoginComponent,
        NavigationComponent
    ]
})
export class AppComponent {
  

}
