import { Component } from '@angular/core';
import { LegalNoticeSectionComponent } from './legal-notice-section/legal-notice-section.component';

@Component({
  selector: 'app-legal-notices',
  standalone: true,
  imports: [LegalNoticeSectionComponent],
  templateUrl: './legal-notices.component.html',
  styleUrl: './legal-notices.component.scss',
})
export class LegalNoticesComponent {}
