import {
  EventBetweenDates,
  EventsBetweenDates,
} from '../models/interfaces/events-between-dates.dto';
import { SingleEvent } from '../models/interfaces/single-event';

enum DayOfWeek {
  Dimanche = 0,
  Lundi = 1,
  Mardi = 2,
  Mercredi = 3,
  Jeudi = 4,
  Vendredi = 5,
  Samedi = 6,
}
const numberToDay = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
];

export function getXNextOccurences(
  desiredNumberOfOccurences: number,
  events: EventsBetweenDates[]
) {
  let currentDate = new Date();
}

export function eventHappensOnDay(day: Date, event: EventBetweenDates) {
  let results: SingleEvent[] = [];

  const recurrenceStart = new Date(event.recurrence.startDate);
  const recurrenceEnd = new Date(event.recurrence.endDate);

  let currentDate = new Date();

  if (
    event.recurrence.daysOfWeek
      .map((e) => e.toString())
      .includes(numberToDay[currentDate.getDay()])
  ) {
  }
}

export function eventsBetweenDatesToEvents(
  events: EventsBetweenDates,
  startDate: string,
  endDate: string
): SingleEvent[] {
  let result: SingleEvent[] = [];

  for (let event of events) {
    const eventDates = getRecurringEvents(event, startDate, endDate);
    result = [...result, ...eventDates];
  }

  return result;
}

function getRecurringEvents(
  event: EventBetweenDates,
  startDate: string,
  endDate: string
): SingleEvent[] {
  let singleEvents: SingleEvent[] = [];

  const eventStart = new Date(startDate);
  const eventEnd = new Date(endDate);

  const recurrenceStart = new Date(event.recurrence.startDate);
  const recurrenceEnd = new Date(event.recurrence.endDate);

  const exceptions = new Set(
    event.exceptions.map((e) => new Date(e.date).toDateString())
  );

  let currentDate = new Date(eventStart);
  while (currentDate <= eventEnd) {
    if (
      event.recurrence.daysOfWeek
        .map((e) => e.toString())
        .includes(numberToDay[currentDate.getDay()])
    ) {
      if (
        currentDate >= recurrenceStart &&
        currentDate <= recurrenceEnd &&
        !exceptions.has(currentDate.toISOString())
      ) {
        singleEvents.push({
          id: event.id,
          title: event.title,
          description: event.description,
          date: currentDate.toISOString().split('T')[0],
          startTime: event.startTime,
          endTime: event.endTime,
          location: event.location,
          type: event.type,
        });
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return singleEvents;
}

function incrementYear(date: Date): Date {
  const newDate = new Date(date);
  newDate.setFullYear(date.getFullYear() + 1);
  return newDate;
}
