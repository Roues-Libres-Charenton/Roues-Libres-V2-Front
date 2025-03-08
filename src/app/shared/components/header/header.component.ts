import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen: boolean = false;
  constructor(private router: Router) {}

  externNavigateTo(url: string) {
    window.location.href = url;
  }

  navigateTo(route: string): void {
    this.menuOpen = false;
    const burgerIcon = document.querySelector('.burger-icon');
    const sideMenu = document.querySelector('.side-menu');
    burgerIcon?.classList.remove('open');
    sideMenu?.classList.remove('open');
    this.router.navigate([route]);
  }

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

  private toggleMenuClasses(open: boolean) {
    const burgerIcon = document.querySelector('.burger-icon');
    const sideMenu = document.querySelector('.side-menu');
    if (open) {
      burgerIcon?.classList.add('open');
      sideMenu?.classList.add('open');
    } else {
      burgerIcon?.classList.remove('open');
      sideMenu?.classList.remove('open');
    }
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event) {
    const menu = document.querySelector('.side-menu');
    const burger = document.querySelector('.burger-icon');

    if (this.menuOpen && menu && burger) {
      if (
        !menu.contains(event.target as Node) &&
        !burger.contains(event.target as Node)
      ) {
        this.menuOpen = false;
        this.toggleMenuClasses(false);
      }
    }
  }
}
