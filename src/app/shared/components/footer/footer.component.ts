import { Component } from '@angular/core';
import { ClickableIconComponent } from '../clickable-icon/clickable-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ClickableIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
