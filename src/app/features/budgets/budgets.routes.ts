import { Routes } from '@angular/router';
import { BudgetsComponent } from './pages/budgets.component';
import BudgetsPAPComponent from './components/budgets-pap.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetsComponent,
  },
];

export default routes;
