import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { TeamsComponent } from './teams';
import { DriversComponent } from './drivers';
import { CarsComponent } from './cars';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'drivers', component: DriversComponent },
    { path: 'cars', component: CarsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);