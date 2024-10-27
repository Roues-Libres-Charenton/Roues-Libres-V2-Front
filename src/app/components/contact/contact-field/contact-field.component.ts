import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-field',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contact-field.component.html',
  styleUrl: './contact-field.component.scss',
})
export class ContactFieldComponent {
  iconName = input<string>();
  contactText = input<string>();
}
