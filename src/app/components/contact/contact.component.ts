import { Component, OnInit } from '@angular/core';
import { ContactFieldComponent } from './contact-field/contact-field.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFieldComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Roues libres Charenton - Contact');
    this.meta.updateTag({
      name: 'description',
      content:
        "Vous souhaitez nous contacter ? Vous avez des questions sur nos ateliers de co-réparation, nos évènements ou nos actions ? N'hésitez pas à nous envoyer un message !",
    });
  }
}
