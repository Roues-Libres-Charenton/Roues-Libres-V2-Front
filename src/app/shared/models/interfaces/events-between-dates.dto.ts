import { DayOfWeek } from '../enums/DayOfWeek.enum';

export interface EventsBetweenDates {
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
  exceptions: [];
  recurrence: {
    id: string;
    startDate: string;
    endDate: string;
    daysOfWeek: DayOfWeek[];
  };
}
