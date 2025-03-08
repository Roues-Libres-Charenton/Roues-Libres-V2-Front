import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsBetweenDates } from '../../shared/models/interfaces/events-between-dates.dto';
import { eventsBetweenDatesToEvents } from '../../shared/utils/EventsBetweenDatesToEvents';
import { SingleEvent } from '../../shared/models/interfaces/single-event';
import { urls } from '../../shared/config/url-configs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [],
  templateUrl: './calendrier.component.html',
  styleUrl: './calendrier.component.scss',
  providers: [{ provide: 'LOCALE_ID', useValue: 'fr-FR' }],
})
export class CalendrierComponent implements OnInit {
  events: SingleEvent[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  formatEventDate(date: string): string {
    const formatedDate = formatDate(date, 'EEEE d MMMM y', 'fr-FR');
    return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
  }

  fetchEvents(): void {
    const currentDate = new Date();

    const lastDayOfCurrentYear = new Date(
      currentDate.getFullYear(),
      11,
      31,
      23,
      59,
      59
    );

    const apiUrl = `${
      urls.apiBaseUrl
    }/events?startDate=${currentDate.toISOString()}&endDate=${lastDayOfCurrentYear.toISOString()}`;

    this.http.get<EventsBetweenDates>(apiUrl).subscribe({
      next: (data) => {
        this.events = eventsBetweenDatesToEvents(
          data,
          currentDate.toISOString(),
          lastDayOfCurrentYear.toISOString()
        );
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = "Pas d'évènements à venir.";
        this.isLoading = false;
      },
    });
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
  groupByMonth(events: SingleEvent[]): [string, SingleEvent[]][] {
    const grouped: { [key: string]: SingleEvent[] } = {};

    events.forEach((event) => {
      let month = new Date(event.date).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      });

      month = month.charAt(0).toUpperCase() + month.slice(1);

      if (!grouped[month]) {
        grouped[month] = [];
      }
      grouped[month].push(event);
    });

    return Object.entries(grouped);
  }
}
