import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardImageComponent {
  @Input() asset: string = '';
  @Input() alt: string = '';
}
