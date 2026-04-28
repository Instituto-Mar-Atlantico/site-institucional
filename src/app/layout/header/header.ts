import { Component } from '@angular/core';
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
  toggleTheme() {
    const root = document.documentElement;

    const isDark = root.getAttribute('data-theme') === 'dark';
  
    if (isDark) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'dark');
    }
  }
}
