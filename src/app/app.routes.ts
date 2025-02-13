import { Routes } from '@angular/router';
import { MembershipComponent } from './components/membership/membership.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LegalNoticesComponent } from './components/legal-notices/legal-notices.component';
import { LocalComponent } from './components/local/local.component';
import { MemberPageComponent } from './components/member-page/member-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'achat-atelier',
    component: MemberPageComponent,
  },
  {
    path: 'acces-local',
    component: LocalComponent,
  },
  {
    path: 'calendrier',
    component: CalendrierComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent,
  },

  {
    path: 'mentions-legales',
    component: LegalNoticesComponent,
  },
];
