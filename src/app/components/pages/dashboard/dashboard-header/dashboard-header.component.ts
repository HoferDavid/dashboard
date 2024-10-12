import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardService } from '../../../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { WidgetsPanelComponent } from '../widgets-panel/widgets-panel.component';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule, WidgetsPanelComponent],
  providers: [DashboardService],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class DashboardHeaderComponent {
  store = inject(DashboardService);

  widgetsOpen = signal(false);
}
