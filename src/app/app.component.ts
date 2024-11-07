import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WheelSeparatorComponent } from "./shared/components/wheel-separator/wheel-separator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MatSidenavModule,
    WheelSeparatorComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public router: Router) {}
  title = 'roues-libres-2';
}
