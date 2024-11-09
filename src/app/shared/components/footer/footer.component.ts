import { Component, HostBinding, Input, input } from '@angular/core';
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
  @HostBinding('style.position') @Input() position = '';
  @HostBinding('style.bottom') @Input() bottom = '';
  @HostBinding('style.left') @Input() left = '';
}
