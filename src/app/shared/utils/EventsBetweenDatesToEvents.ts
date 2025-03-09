import { cu } from '@fullcalendar/core/internal-common';
import {
  EventBetweenDates,
  EventsBetweenDates,
} from '../models/interfaces/events-between-dates.dto';
import { SingleEvent } from '../models/interfaces/single-event';

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

export function getRecurringEvents(
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
        !exceptions.has(currentDate.toDateString())
      ) {
        singleEvents.push({
          id: event.id,
          title: event.title,
          description: event.description,
          date: currentDate.toDateString().split('T')[0],
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

export function nonRecurringEventToSingleEvent(
  event: EventBetweenDates
): SingleEvent {
  if (event.isRecurring || !event.date) {
    throw new Error('Event is recurring or has no date');
  }
  return {
    id: event.id,
    title: event.title,
    description: event.description,
    date: event.date,
    startTime: event.startTime,
    endTime: event.endTime,
    location: event.location,
    type: event.type,
  };
}

export function mergeEventsLists(
  events1: SingleEvent[] | SingleEvent,
  events2: SingleEvent[] | SingleEvent
): SingleEvent[] {
  if (!Array.isArray(events1)) {
    events1 = [events1];
  }

  if (!Array.isArray(events2)) {
    events2 = [events2];
  }

  return [...events1, ...events2].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}

function incrementYear(date: Date): Date {
  const newDate = new Date(date);
  newDate.setFullYear(date.getFullYear() + 1);
  return newDate;
}
