import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "./chat/chat.component";
import { BusinessService } from 'src/app/shared/services/business.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, ChatComponent]
})
export class DashboardComponent {

  businessService: BusinessService = inject(BusinessService);

}
