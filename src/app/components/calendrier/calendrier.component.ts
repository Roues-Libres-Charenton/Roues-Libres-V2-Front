import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsBetweenDates } from '../../shared/models/interfaces/events-between-dates.dto';
import {
  getRecurringEvents,
  mergeEventsLists,
  nonRecurringEventToSingleEvent,
} from '../../shared/utils/EventsBetweenDatesToEvents';
import { SingleEvent } from '../../shared/models/interfaces/single-event';
import { urls } from '../../shared/config/url-configs';
import { formatDate } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(
    private http: HttpClient,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.fetchEvents();
    this.title.setTitle('Roues libres Charenton - Calendrier');
    this.meta.updateTag({
      name: 'description',
      content:
        "Retrouvez tous les évènements de l'association Roues Libres Charenton dans notre calendrier. Ateliers, fête du vélo, plein air, tout au long de l'année 2025.",
    });
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
    }/events?startDate=${currentDate.toDateString()}&endDate=${lastDayOfCurrentYear.toDateString()}`;

    this.http.get<EventsBetweenDates>(apiUrl).subscribe({
      next: (data) => {
        let tempEvents: SingleEvent[] = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].isRecurring) {
            tempEvents = mergeEventsLists(
              tempEvents,
              getRecurringEvents(
                data[i],
                currentDate.toDateString(),
                lastDayOfCurrentYear.toDateString()
              )
            );
          } else {
            tempEvents = mergeEventsLists(
              tempEvents,
              nonRecurringEventToSingleEvent(data[i])
            );
          }
        }

        this.events = tempEvents;
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

  getEventTypeColor(type: string): string {
    switch (type) {
      case 'Concert':
        return 'bg-yellow-500';
      case 'Spectacle':
        return 'bg-blue-500';
      case 'Atelier':
        return 'bg-green-500';
      case 'Conférence':
        return 'bg-red-500';
      case 'Autre':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  }

  eventTypeColor(str: string) {
    switch (str) {
      case 'Atelier Plein Air':
        return '#189034';
      case 'Atelier':
        return '#588CB1';
      case 'Fete du vélo':
        return '#E07134';
      default:
        return '#FFCAD4';
    }
  }
}
