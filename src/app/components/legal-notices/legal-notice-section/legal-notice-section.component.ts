import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legal-notice-section',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice-section.component.html',
  styleUrl: './legal-notice-section.component.scss',
})
export class LegalNoticeSectionComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';
}
