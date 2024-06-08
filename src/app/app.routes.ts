import { Routes } from '@angular/router';
import { RafflePageComponent } from './views/raffle-page/raffle-page.component';

export const routes: Routes = [
    { path: '', component: RafflePageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
