import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-wheel-separator',
  standalone: true,
  templateUrl: './wheel-separator.component.html',
  styleUrls: ['./wheel-separator.component.scss'],
})
export class WheelSeparatorComponent {
  @HostBinding('style.position') @Input() position = '';
  @HostBinding('style.bottom') @Input() bottom = '';
  @HostBinding('style.left') @Input() left = '';
  @HostBinding('style.width') @Input() width = '';
  rotationStyle = 'rotate(0deg)';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);

    this.rotationStyle = `rotate(${scrollPercentRounded * 1.5}deg)`;
  }
}
