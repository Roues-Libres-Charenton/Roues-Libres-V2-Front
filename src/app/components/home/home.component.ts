import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { WheelSeparatorComponent } from '../../shared/components/wheel-separator/wheel-separator.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatButtonModule,
    WheelSeparatorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Roues libres Charenton - Accueil');
    this.meta.updateTag({
      name: 'description',
      content:
        "Bienvenue sur le site de l'association Roues Libres Charenton. Découvrez nos ateliers, nos évènements et nos actions pour promouvoir la pratique du vélo à Charenton-le-Pont.",
    });
  }

  externalNavigateTo(url: string): void {
    window.open(url, '_blank');
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
