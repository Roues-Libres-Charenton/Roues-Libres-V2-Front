import { DayOfWeek } from '../enums/DayOfWeek.enum';
import { EventException } from './exception.dto';

export type EventsBetweenDates = EventBetweenDates[];

export interface EventBetweenDates {
  id: string;
  title: string;
  description: string;
  date: string | null;
  startTime: string;
  endTime: string;
  location: string;
  type: string;
  isRecurring: boolean;
  recurrenceId: string;
  exceptions: EventException[];
  recurrence: {
    id: string;
    startDate: string;
    endDate: string;
    daysOfWeek: DayOfWeek[];
  };
}
