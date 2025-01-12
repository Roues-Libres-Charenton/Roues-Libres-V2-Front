import { Component, inject, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [FullCalendarModule, CalendarModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  viewDate: Date = new Date();

  nextEvents = [];
  events: { title: string; date: string }[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      start: 'title',
      center: '',
      end: 'prev next',
    },
    initialView: 'dayGridMonth',
    fixedWeekCount: false,
    firstDay: 1,
    titleFormat: { year: 'numeric', month: 'short' },
    editable: false,
    locale: 'frLocale',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg: DateClickArg) => this.handleDateClick(arg),
    eventClick: (arg: EventClickArg) => {
      this.openSnackBar(arg.event.title, 'Close');
    },
    contentHeight: 400,
    events: this.events,
  };

  ngOnInit(): void {
    this.events = [
      { title: 'Atelier Local', date: '2024-09-09' },
      { title: 'Atelier Place Aristide Briand ', date: '2024-09-05' },
    ];
  }
  onDateChange() {}

  handleDateClick(arg: any) {
    const matchingEvents = this.events.filter((e) => e.date === arg.dateStr);
    if (matchingEvents.length > 0) {
      this.openSnackBar(
        `${matchingEvents.length} évènement${
          matchingEvents.length > 1 ? 's' : ''
        } le ${arg.dateStr}`,
        'Voir'
      );
    } else {
      this.openNoEventSnackBar(arg);
    }
  }

  openNoEventSnackBar(arg: any) {
    this._snackBar.open(`Pas d'évènement le ${arg.dateStr}`, 'Fermer', {
      duration: 5000,
    });
  }

  openSnackBar(message: string, action: string) {
    const snackBarRef = this._snackBar.open(message, action, {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
    });
  }
}
