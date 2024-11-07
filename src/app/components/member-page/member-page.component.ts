import { Component } from '@angular/core';
import { MemberCardComponent } from './member-card/member-card.component';
import { MatButtonModule } from '@angular/material/button';
import { WheelSeparatorComponent } from '../../shared/components/wheel-separator/wheel-separator.component';

@Component({
  selector: 'app-member-page',
  standalone: true,
  imports: [MemberCardComponent, MatButtonModule, WheelSeparatorComponent],
  templateUrl: './member-page.component.html',
  styleUrl: './member-page.component.scss',
})
export class MemberPageComponent {}
