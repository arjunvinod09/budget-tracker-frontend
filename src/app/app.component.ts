import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BudgetListComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budget-frontend';
}
