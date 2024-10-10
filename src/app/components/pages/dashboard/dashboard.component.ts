import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../widget/widget.component';
import { Widget } from '../../../interfaces/widget';
import { SubscribersComponent } from './widgets/subscribers/subscribers.component';
import { DashboardService } from '../../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent, MatButtonModule, MatIconModule, MatMenuModule],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  store = inject(DashboardService);
}
