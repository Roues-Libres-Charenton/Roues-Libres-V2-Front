import { Component } from '@angular/core';
import { CardImageComponent } from '../../shared/components/card-image/card-image.component';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [CardImageComponent],
  templateUrl: './local.component.html',
  styleUrl: './local.component.scss',
})
export class LocalComponent {}
