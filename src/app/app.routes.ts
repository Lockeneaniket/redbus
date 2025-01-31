import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HelpComponent } from './pages/help/help.component';
import { BusTicketsComponent } from './pages/bus-tickets/bus-tickets.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'help', component: HelpComponent },
  { path: 'bus-tickets', component: BusTicketsComponent }
];