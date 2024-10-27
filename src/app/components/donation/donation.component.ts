import { Component } from '@angular/core';
import { MembershipCardComponent } from '../membership/membership-card/membership-card.component';
import { MembershipNoteComponent } from '../membership/membership-note/membership-note.component';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [MembershipCardComponent, MembershipNoteComponent],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss',
})
export class DonationComponent {}
