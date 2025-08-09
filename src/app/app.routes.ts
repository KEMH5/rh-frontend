import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { Acceuil } from '../pages/components/acceuil/acceuil';
import { Dashboard } from '../pages/dashboard/dashboard';
import { DashboardMain } from '../pages/components/dashboard-main/dashboard-main';
import { Employee } from '../pages/components/employee/employee';
import { HiringPartComponent } from '../pages/components/hiring-part/hiring-part';
import { Inbox } from '../pages/components/inbox/inbox';
import { Report } from '../pages/components/report/report';
import { HelpSupport } from '../pages/components/help-support/help-support';
import { Settting } from '../pages/components/settting/settting';
import { Attendance } from '../pages/components/attendance/attendance';

export const routes: Routes = [
    { path: '', component: Acceuil },
    { path: 'login', component: Login },
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            { path: '', component: DashboardMain },
            { path: 'main', component: DashboardMain },
            { path: 'employee', component: Employee },
            { path: 'hiring', component: HiringPartComponent },
            { path: 'inbox', component: Inbox },
            { path: 'report', component: Report },
            { path: 'help-support', component: HelpSupport },
            { path: 'setting', component: Settting },
            { path: 'attendance', component: Attendance }
        ]
    },
    { path: '**', redirectTo: '' }
];
