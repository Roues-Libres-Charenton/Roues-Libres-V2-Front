import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-card',
  standalone: true,
  imports: [],
  templateUrl: './membership-card.component.html',
  styleUrl: './membership-card.component.scss',
})
export class MembershipCardComponent {
  @Input() title: string = 'Membership card';
  @Input() btnText: string = "J'adhère";
  @Input() navigatePath: string = '#';

  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigate([this.navigatePath]);
  }
}
