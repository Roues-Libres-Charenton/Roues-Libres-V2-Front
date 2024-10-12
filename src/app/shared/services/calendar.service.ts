import { HttpClient } from '@angular/common/http';
import { HttpParamsBuilderService } from './http-params-builder.service';
import { Injectable } from '@angular/core';
import { urls } from '../config/url-configs';
import { CalendarEvent } from '../models/interfaces/calendar-event.dto';
import { RecurringCalendarEvent } from '../models/interfaces/recurring-calendar-event.dto';
import { DayOfWeek } from '../models/enums/DayOfWeek.enum';
import { PathParamsBuilderService } from './http-path-params-builder.service';
import { EventsBetweenDates } from '../models/interfaces/events-between-dates.dto';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(
    private http: HttpClient,
    private httpParamsBuilder: HttpParamsBuilderService,
    private pathParamsBuilder: PathParamsBuilderService
  ) {}

  private readonly baseUrl = urls.apiBaseUrl;

  createSingleEvent(
    title: string,
    description: string,
    date: Date | string,
    startTime: string,
    endTime: string,
    location: string,
    type: string
  ) {
    const endpoint = urls.api_endpoints.events.single;
    const body: CalendarEvent = {
      title: title,
      description: description,
      date: date,
      startTime: startTime,
      endTime: endTime,
      location: location,
      type: type,
      isRecurring: false,
    };
    return this.http.post<CalendarEvent>(`${this.baseUrl}${endpoint}`, body);
  }

  createRecurringEvent(
    title: string,
    description: string,
    startTime: string,
    endTime: string,
    location: string,
    type: string,
    startDate: string,
    endDate: string,
    daysOfWeek: DayOfWeek[]
  ) {
    const endpoint = urls.api_endpoints.events.recurring;
    const body: RecurringCalendarEvent = {
      //CalendarEvent
      title: title,
      description: description,
      date: null,
      startTime: startTime,
      endTime: endTime,
      location: location,
      type: type,
      isRecurring: true,
      // Recurrence
      daysOfWeek: daysOfWeek,
      startDate,
      endDate,
    };
    return this.http.post<RecurringCalendarEvent>(
      `${this.baseUrl}${endpoint}`,
      body
    );
  }

  getEventsBetweenDates(startDate: string, endDate: string) {
    const endpoint = urls.api_endpoints.events.getEventBetween;
    const params = this.httpParamsBuilder.buildHttpParams({
      startDate: startDate,
      endDate: endDate,
    });

    return this.http.get<EventsBetweenDates[]>(`${this.baseUrl}${endpoint}`, {
      params,
    });
  }

  deleteSingleEvent(id: string) {
    const endpoint = this.pathParamsBuilder.buildPathParams(
      urls.api_endpoints.events.deleteSingle,
      { id: id }
    );

    return this.http.delete(`${this.baseUrl}${endpoint}`);
  }

  deleteRecurringEvent(id: string) {
    const endpoint = this.pathParamsBuilder.buildPathParams(
      urls.api_endpoints.events.deleteReccuring,
      { id: id }
    );

    return this.http.delete(`${this.baseUrl}${endpoint}`);
  }
}
