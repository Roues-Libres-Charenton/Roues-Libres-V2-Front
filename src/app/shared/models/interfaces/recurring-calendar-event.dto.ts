import { CalendarEvent } from './calendar-event.dto';
import { Recurrence } from './recurrence.dto';

export type RecurringCalendarEvent = CalendarEvent & Recurrence;
