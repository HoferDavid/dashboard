import { Component, Input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Widget } from '../../../interfaces/widget';

@Component({
  selector: 'app-widget-options',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.scss',
})
export class WidgetOptionsComponent {
  // @Input() data!: Widget;
  showOptions = model<boolean>(false);
}
