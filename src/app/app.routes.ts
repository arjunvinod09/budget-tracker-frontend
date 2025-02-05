import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BudgetCategoryComponent } from './budget-category/budget-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component : DashboardComponent },
    {path: 'category', component : BudgetCategoryComponent },
];
