import { Component, OnInit, Input } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-budget-category',
    imports: [CommonModule],
    templateUrl: './budget-category.component.html',
    styleUrl: './budget-category.component.css'
})
export class BudgetCategoryComponent implements OnInit{

  @Input() category : string = "";
  budgets : Budget[] = [];

  constructor(private budgetService : BudgetService) { }

  ngOnInit(): void {
    if(this.category){
      this.getBudget(this.category);
    }
  }

  private getBudget(category : string) {
    this.budgetService.getBudgetByCategory(category).subscribe(data => {
      data.sort((a,b) => a.no - b.no)
      this.budgets = data;
    })
  }
}