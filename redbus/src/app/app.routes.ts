import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HelpComponent } from './pages/help/help.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'help', component: HelpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'aboutus', component: AboutusComponent }
];