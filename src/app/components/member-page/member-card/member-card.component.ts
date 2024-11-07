import { NgClass, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const baseHeight = 46;

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgClass, NgStyle],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss',
})
export class MemberCardComponent {
  icon = input.required<string>();
  title = input.required<string>();
  openHeight = input<number>(162);

  isActive = false;

  height = baseHeight;

  toggleOpen() {
    this.isActive = !this.isActive;
    this.isActive
      ? (this.height = this.openHeight())
      : (this.height = baseHeight);
  }
}
