import { Component } from '@angular/core';
import { ContactFieldComponent } from './contact-field/contact-field.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFieldComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
