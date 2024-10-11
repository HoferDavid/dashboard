import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { WidgetComponent } from '../../widget/widget.component';
import { DashboardService } from '../../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { wrapGrid } from 'animate-css-grid';
import { CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent, MatButtonModule, MatIconModule, MatMenuModule, CdkDropList, CdkDropListGroup],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  store = inject(DashboardService);

  dashboard = viewChild.required<ElementRef>('dashboard');

  ngOnInit(): void {
    wrapGrid(this.dashboard().nativeElement, { duration: 300 });
  }
}
