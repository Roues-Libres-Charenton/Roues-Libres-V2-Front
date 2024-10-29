import { NgStyle } from '@angular/common';
import { Component, input, Input, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './membership-card.component.html',
  styleUrl: './membership-card.component.scss',
})
export class MembershipCardComponent {
  width = input<string>('280px');
  height = input<string>('180px');
  @Input() title: string = 'Membership card';
  @Input() btnText: string = "J'adhère";
  @Input() navigatePath: string = '#';

  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigate([this.navigatePath]);
  }
}
