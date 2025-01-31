import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-category.component.html',
  styleUrl: './budget-category.component.css'
})
export class BudgetCategoryComponent implements OnInit{

  budgets : Budget[] = [];

  constructor(private budgetService : BudgetService) { }

  ngOnInit(): void {
    this.getBudget("FOOD");
  }

  private getBudget(category : string) {
    this.budgetService.getBudgetByCategory(category).subscribe(data => {
      this.budgets = data;
    })
  }
}
