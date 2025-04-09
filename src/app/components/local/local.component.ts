import { CardImageComponent } from '../../shared/components/card-image/card-image.component';
import {
  GoogleMap,
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [CardImageComponent, GoogleMap, GoogleMapsModule],
  templateUrl: './local.component.html',
  styleUrl: './local.component.scss',
})
export class LocalComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 48.8207602, lng: 2.4020579 };
  mapsOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: 14,
    streetViewControl: false,
    mapTypeControl: false,
    mapId: 'DEMO_MAP_ID',
  };

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.openInfoWindow();
    }, 1000);

    this.title.setTitle('Roues libres Charenton - Local');
    this.meta.updateTag({
      name: 'description',
      content:
        "Découvrez le local de co-réparation de vélos de l'association des Roues Libres situé à Charenton-le-Pont.",
    });
  }

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | null = null;
  @ViewChild(MapInfoWindow) marker: MapMarker | null = null;

  openInfoWindow() {
    if (this.infoWindow != null && this.marker != null) {
      this.infoWindow.open();
    }
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
