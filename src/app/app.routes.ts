import { Routes } from '@angular/router';
import { MembershipComponent } from './components/membership/membership.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LegalNoticesComponent } from './components/legal-notices/legal-notices.component';
import { LocalComponent } from './components/local/local.component';
import { MemberPageComponent } from './components/member-page/member-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'devenir-membre',
    component: MemberPageComponent,
  },
  {
    path: 'local',
    component: LocalComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'calendriers',
    component: ScheduleComponent,
  },
  {
    path: 'mentions-legales',
    component: LegalNoticesComponent,
  },
];
