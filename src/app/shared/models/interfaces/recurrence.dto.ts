import { DayOfWeek } from '../enums/DayOfWeek.enum';

export interface Recurrence {
  id?: string;
  startDate: Date | string;
  endDate: Date | string;
  daysOfWeek?: DayOfWeek[];
}
