import { Routes } from '@angular/router';
import { Principal } from './pages/layout/principal/principal';
import { Dashboard } from './pages/dashboard/dashboard';
import { Rooms } from './pages/rooms/rooms';

export const routes: Routes = [
     {path: '', redirectTo: 'admin/rooms', pathMatch: 'full'},
      {path: 'admin', component: Principal, canActivateChild: [], children:
        [
            {path: 'home', component: Dashboard},
            {path: 'rooms', component: Rooms},

        ]
    },
];
