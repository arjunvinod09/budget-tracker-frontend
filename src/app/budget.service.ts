import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from './budget';
import { BudgetSummary } from './budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private baseUrl = "http://localhost:8080/api/v1/budget";

  constructor(private httpClient : HttpClient) { }

  getBudgetList() : Observable<Budget[]> {
    return this.httpClient.get<Budget[]>(`${this.baseUrl}`)
  }

  getBudgetByDate() : Observable<Budget[]> {
    return this.httpClient.get<Budget[]>(`${this.baseUrl}/date`)
  }

  getTotalSpend() : Observable<number> {
    return this.httpClient.get<number>(`${this.baseUrl}/spend/total`)
  }

  getTotalSpendByCategory() : Observable<BudgetSummary> {
    return this.httpClient.get<BudgetSummary>(`${this.baseUrl}/spend/category`)
  }
}
