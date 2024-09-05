import { Component, inject, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);

  nextEvents = [];
  events: { title: string; date: string }[] = [];
  calendarOptions: CalendarOptions = {};

  ngOnInit(): void {
    this.events = [
      { title: 'Atelier Local', date: '2024-09-09' },
      { title: 'Atelier Place Aristide Briand ', date: '2024-09-05' },
    ];

    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, interactionPlugin],
      dateClick: (arg) => this.handleDateClick(arg),
      eventClick: (arg) => {
        this.openSnackBar(arg.event.title, 'Close');
      },
      events: this.events,
    };
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
