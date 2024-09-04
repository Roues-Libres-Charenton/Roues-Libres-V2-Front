import { Component } from '@angular/core';
import { MembershipCardComponent } from "./membership-card/membership-card.component";
import { MembershipNoteComponent } from "./membership-note/membership-note.component";

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [MembershipCardComponent, MembershipNoteComponent],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.scss'
})
export class MembershipComponent {

}
