import { Component, ViewChild } from '@angular/core';
import { CardImageComponent } from '../../shared/components/card-image/card-image.component';
import { ClickableIconComponent } from '../../shared/components/clickable-icon/clickable-icon.component';
import { ContactFieldComponent } from './contact-field/contact-field.component';
import {
  GoogleMap,
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CardImageComponent,
    ClickableIconComponent,
    ContactFieldComponent,
    GoogleMap,
    GoogleMapsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 48.8207602, lng: 2.4020579 };
  mapsOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: 14,
    streetViewControl: false,
    mapTypeControl: false,
    mapId: 'DEMO_MAP_ID',
  };

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | null = null;

  openInfoWindow() {
    if (this.infoWindow != null) {
      this.infoWindow.open();
    }
  }
}
