import { Routes } from '@angular/router';
import { BudgetsComponent } from './features/budgets/pages/budgets.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
console.log('Estou roteando');

export const routes: Routes = [
  { path: '', component: BudgetsComponent },
  { path: '**', component: EmptyRouteComponent },
];
