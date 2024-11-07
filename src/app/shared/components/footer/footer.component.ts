import { Component, input } from '@angular/core';
import { ClickableIconComponent } from '../clickable-icon/clickable-icon.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ClickableIconComponent, NgStyle],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  bgColor = input<string>('#222222aa');
}
