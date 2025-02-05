import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-budget-list',
    imports: [CommonModule],
    templateUrl: './budget-list.component.html',
    styleUrl: './budget-list.component.css'
})
export class BudgetListComponent implements OnInit {

  budgets : Budget[] = [];

  constructor(private budgetService : BudgetService) { }

  ngOnInit() : void {
    this.getBudget();
  }

  private getBudget(){
    this.budgetService.getBudgetList().subscribe(data => {
      console.log(data);
      data.sort((a,b) => a.no - b.no)
      this.budgets = data;
    });
  }
  
}
