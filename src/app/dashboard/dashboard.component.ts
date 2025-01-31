import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BudgetSummary } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  total : number = 0.0;
  budgets : BudgetSummary = new BudgetSummary();

  constructor(private budgetService : BudgetService) { }

  ngOnInit(): void {
    this.getBudget();
  }

  private getBudget() {
    this.budgetService.getTotalSpend().subscribe(data => {
      this.total = data;
    })

    this.budgetService.getTotalSpendByCategory().subscribe(data => {
      this.budgets = data;
    })
  }
}
