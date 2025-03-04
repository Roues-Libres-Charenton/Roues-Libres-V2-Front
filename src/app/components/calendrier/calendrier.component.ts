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
    return formatDate(date, 'EEEE d MMMM y', 'fr-FR');
  }

  fetchEvents(): void {
    const currentDate = new Date();
    const currentDateNextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );

    const apiUrl = `${
      urls.apiBaseUrl
    }/events?startDate=${currentDate.toISOString()}&endDate=${currentDateNextMonth.toISOString()}`;

    this.http.get<EventsBetweenDates>(apiUrl).subscribe({
      next: (data) => {
        this.events = eventsBetweenDatesToEvents(
          data,
          currentDate.toISOString(),
          currentDateNextMonth.toISOString()
        );
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = "Pas d'évènements à venir.";
        this.isLoading = false;
      },
    });
  }
}
