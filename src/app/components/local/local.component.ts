import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CardImageComponent } from '../../shared/components/card-image/card-image.component';
import { SafeUrlPipe } from '../../shared/services/safe-url.pipe';

@Component({
  selector: 'app-local',
  standalone: true,
  templateUrl: './local.component.html',
  styleUrl: './local.component.scss',
  imports: [CardImageComponent, SafeUrlPipe],
})
export class LocalComponent implements OnInit {
  iframeUrl =
    'https://cartes.app/?allez=Roues+Libres%7Cn9654267843%7C2.4019%7C48.8209#17.5/48.820899/2.402387/0/40';

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Roues libres Charenton - Local');
    this.meta.updateTag({
      name: 'description',
      content:
        "Découvrez le local de co-réparation de vélos de l'association des Roues Libres situé à Charenton-le-Pont.",
    });
  }

  @ViewChild('imageContainer', { static: false }) imageContainer!: ElementRef;

  scrollImages(direction: number) {
    const scrollAmount = 300;
    if (this.imageContainer && this.isScrollable(direction)) {
      this.imageContainer.nativeElement.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  isScrollable(direction: number) {
    if (this.imageContainer) {
      const container = this.imageContainer.nativeElement;
      return direction === 1
        ? container.scrollLeft < container.scrollWidth - container.clientWidth
        : container.scrollLeft > 0;
    }
    return false;
  }
}
