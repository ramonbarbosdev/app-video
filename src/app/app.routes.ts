import { Routes } from '@angular/router';
import { Principal } from './pages/layout/principal/principal';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
     {path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
      {path: 'admin', component: Principal, canActivateChild: [], children:
        [
            {path: 'dashboard', component: Dashboard},

        ]
    },
];
