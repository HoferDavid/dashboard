import { Component, effect, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(public sidenavService: SidenavService) {}

  darkMode = signal(false);

  setDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark', this.darkMode());
  })

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}
