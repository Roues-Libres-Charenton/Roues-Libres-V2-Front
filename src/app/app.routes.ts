import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LegalNoticesComponent } from './components/legal-notices/legal-notices.component';
import { LocalComponent } from './components/local/local.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
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
    path: 'mentions-legales',
    component: LegalNoticesComponent,
  },
];
