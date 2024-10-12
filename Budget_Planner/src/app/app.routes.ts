import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'budget-planner', loadChildren:() => import('./budget-planenr/budget-planenr.module').then(m => m.BudgetPlanenrModule)}
];
