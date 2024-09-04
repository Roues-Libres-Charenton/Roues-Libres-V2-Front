import { Routes } from '@angular/router';
import { MembershipComponent } from './components/membership/membership.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'devenir-membre',
    component: MembershipComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'calendrier',
    component: ScheduleComponent,
  },
];
