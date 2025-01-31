import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HelpComponent } from './pages/help/help.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'help', component: HelpComponent }
];