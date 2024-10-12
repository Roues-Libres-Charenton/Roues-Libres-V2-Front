export interface CalendarEvent {
  title: string;
  description?: string | null;
  date?: Date | string | null;
  startTime: string;
  endTime: string;
  location?: string | null;
  type: string;
  isRecurring: boolean;
}
