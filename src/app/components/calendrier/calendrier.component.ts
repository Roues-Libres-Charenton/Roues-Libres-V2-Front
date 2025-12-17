import { Component, OnInit } from '@angular/core';
import { EventsBetweenDates } from '../../shared/models/interfaces/events-between-dates.dto';
import {
  getRecurringEvents,
  mergeEventsLists,
  nonRecurringEventToSingleEvent,
} from '../../shared/utils/EventsBetweenDatesToEvents';
import { SingleEvent } from '../../shared/models/interfaces/single-event';
import { Meta, Title } from '@angular/platform-browser';
import jsonData from '../../../assets/events.json';
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
  isLoading = false; // isLoading est toujours à false maintenant
  error: string | null = null;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.loadEvents();
    this.title.setTitle('Roues libres Charenton - Calendrier');
    this.meta.updateTag({
      name: 'description',
      content:
        "Retrouvez tous les évènements de l'association Roues Libres Charenton dans notre calendrier. Ateliers de co-réparation de vélos, fête du vélo, plein air, tout au long de l'année 2025.",
    });
  }

  formatEventDate(date: string): string {
    const formatedDate = formatDate(date, 'EEEE d MMMM y', 'fr-FR');
    return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
  }

  loadEvents(): void {
    const currentDate = new Date();

    // Cast jsonData en EventsBetweenDates pour éviter les erreurs TypeScript
    const data = jsonData as EventsBetweenDates;

    const lastDayOfCurrentYear = new Date(
      currentDate.getMonth() === 11
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear(),
      11,
      31,
      23,
      59,
      59
    );

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
