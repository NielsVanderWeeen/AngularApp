import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { TeamsComponent } from './teams';
import { DriversComponent } from './drivers';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'drivers', component: DriversComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);