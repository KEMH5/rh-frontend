import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { Acceuil } from '../pages/components/acceuil/acceuil';

export const routes: Routes = [
    { path: '', component: Acceuil },
    { path: 'login', component: Login },
    { path: '**', redirectTo: '' }
];
