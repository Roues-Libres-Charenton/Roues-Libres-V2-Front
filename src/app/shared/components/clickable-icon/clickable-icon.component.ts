import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-clickable-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './clickable-icon.component.html',
  styleUrl: './clickable-icon.component.scss',
})
export class ClickableIconComponent {
  @Input() iconName: string = 'home';
  @Input() iconColor: string = 'primary';
  @Output() iconClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.iconClicked.emit();
  }
}
