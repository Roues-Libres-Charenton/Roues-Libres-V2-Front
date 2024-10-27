import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.menuOpen = false;
    const burgerIcon = document.querySelector('.burger-icon');
    const sideMenu = document.querySelector('.side-menu');
    burgerIcon?.classList.remove('open');
    sideMenu?.classList.remove('open');
    this.router.navigate([route]);
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const burgerIcon = document.querySelector('.burger-icon');
    const sideMenu = document.querySelector('.side-menu');
    if (this.menuOpen) {
      burgerIcon?.classList.add('open');
      sideMenu?.classList.add('open');
    } else {
      burgerIcon?.classList.remove('open');
      sideMenu?.classList.remove('open');
    }
  }
}
