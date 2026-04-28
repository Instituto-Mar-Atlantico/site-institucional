import { Component, computed, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButton, MatIconButton,   MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly isDarkTheme = signal(document.documentElement.getAttribute('data-theme') === 'dark');
  readonly themeIcon = computed(() => this.isDarkTheme() ? 'light_mode' : 'dark_mode');
  readonly themeAriaLabel = computed(() => this.isDarkTheme() ? 'Ativar tema claro' : 'Ativar tema escuro');

  toggleTheme() {
    const root = document.documentElement;
    const nextIsDark = !this.isDarkTheme();

    if (nextIsDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }

    this.isDarkTheme.set(nextIsDark);
  }
}
