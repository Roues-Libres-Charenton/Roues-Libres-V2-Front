import { Component } from '@angular/core';
import { LegalNoticeSectionComponent } from './legal-notice-section/legal-notice-section.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal-notices',
  standalone: true,
  imports: [LegalNoticeSectionComponent],
  templateUrl: './legal-notices.component.html',
  styleUrl: './legal-notices.component.scss',
})
export class LegalNoticesComponent {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Roues libres Charenton - Mentions légales');
    this.meta.updateTag({
      name: 'description',
      content:
        "Mentions légales du site de l'association Roues Libres Charenton. Informations sur les cookies, les données personnelles, les droits d'auteur et les mentions légales.",
    });
  }
}
