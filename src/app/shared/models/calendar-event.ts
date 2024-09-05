interface CalendarEvent {
  id: number;
  title: string;
  startDate: Date;
  endDate?: Date;
  recurrenceRule?: string;
  exceptions?: Date[];
  additionalOccurrences?: Date[];
}
