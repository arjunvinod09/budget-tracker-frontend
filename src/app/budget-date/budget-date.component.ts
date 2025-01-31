import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-date.component.html',
  styleUrl: './budget-date.component.css'
})
export class BudgetDateComponent implements OnInit{

  budgets : Budget[] = [];

  constructor(private budgetService : BudgetService) { }

  ngOnInit(): void {
    this.getBudget("2025-01-31");
  }

  private getBudget(date : string) {
    this.budgetService.getBudgetByDate(date).subscribe(data => {
      this.budgets = data;
    })
  }
}
