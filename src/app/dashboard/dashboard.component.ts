import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Budget, BudgetSummary } from '../budget';
import { BudgetService } from '../budget.service';
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { Router, TitleStrategy } from '@angular/router';
import { BudgetCategoryComponent } from '../budget-category/budget-category.component';
import { BudgetListComponent } from '../budget-list/budget-list.component'

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, NgxChartsModule, BudgetCategoryComponent, BudgetListComponent, FormsModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  @ViewChild('budgetModal') modalElement!: ElementRef;

  total: number = 0.0;
  budgets: BudgetSummary = new BudgetSummary();
  view: [number, number] = [700, 400]; // Width and Height of the chart
  currentDay: number = new Date().getDate();
  selectedCategory : string = "ALL";
  showCategory : boolean = false;
  showAll : boolean = false;
  categories: string[] = [
    'FOOD', 'ENTERTAINMENT', 'SHOPPING', 'RENT', 'EMI',
    'BILLS', 'TRAVEL', 'TRANSFER', 'OTHER', 'ALL'
  ];

  newBudget : Budget = new Budget();

  private modalInstance: any;

  budgetData = [
    { name: 'Food', value: 5000 },
    { name: 'Rent', value: 15000 },
    { name: 'Transport', value: 3000 },
    { name: 'Entertainment', value: 2000 },
    { name: 'Others', value: 1000 }
  ];

  showLabels: boolean = true;
  explodeSlices: boolean = false;
  doughnut: boolean = false;
  gradient: boolean = true;

  constructor(private budgetService: BudgetService , private router : Router) { }

  ngOnInit(): void {
    this.getBudget();
  }

  onCategoryClick(category: string) {
    if(category == "ALL"){
      this.showCategory = false;
      this.showAll = true;
      return;
    }
    else{
      this.showAll = false;
      this.showCategory = false;
      setTimeout(() => {
        this.selectedCategory = category;
        this.showCategory = true;
      }, 10);
    }
  }
  

  private getBudget() {
    this.budgetService.getTotalSpend().subscribe(data => {
      this.total = data;
    });

    this.budgetService.getTotalSpendByCategory().subscribe(data => {
      this.budgets = data;
      this.budgetData = Object.entries(this.budgets).map(([category, amount]) => ({
        name: category,
        value: amount
      }));
    });
  }

  getCategoryEntries(): { category: string, amount: number }[] {
    return Object.entries(this.budgets).map(([category, amount]) => ({
        category,
        amount
    }));
  }

  onSliceSelect(event: any): void {
    this.onCategoryClick(event.name)
  }

  openModal(): void {
    this.modalElement.nativeElement.classList.add('show');
    this.modalElement.nativeElement.style.display = 'block';
    document.body.classList.add('modal-open'); // Prevents background scrolling
  }

  closeModal(): void {
    this.modalElement.nativeElement.classList.remove('show');
    this.modalElement.nativeElement.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  submitBudget() : void {
    console.log("Submitted");
    this.closeModal();
  }
}
