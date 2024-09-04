import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-membership-note',
  standalone: true,
  imports: [],
  templateUrl: './membership-note.component.html',
  styleUrl: './membership-note.component.scss',
})
export class MembershipNoteComponent {
  @Input() title: string = 'Title';
  @Input() note: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
}
