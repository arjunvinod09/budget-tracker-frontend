import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-list',
  standalone: true,
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

  // private getBudget(){
  //   this.budgetService.getBudgetList().subscribe(data => {
  //     this.budgets = data;
  //   });
  // }

  private getBudget(){
    this.budgetService.getBudgetList().subscribe(
      data => {
        console.log("API Response:", data);  // ✅ Debugging
        this.budgets = data;
      },
      error => {
        console.error("API Error:", error);  // ✅ Check for errors
      }
    );
  }
}
