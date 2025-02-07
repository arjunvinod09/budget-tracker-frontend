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

  getBudgetByDate(date : string) : Observable<Budget[]> {
    return this.httpClient.get<Budget[]>(`${this.baseUrl}/date?date=${date}`);
  }

  getTotalSpend() : Observable<number> {
    return this.httpClient.get<number>(`${this.baseUrl}/spend/total`)
  }

  getTotalSpendDaily() : Observable<number> {
    return this.httpClient.get<number>(`${this.baseUrl}/spend/daily`)
  }

  getTotalSpendByCategory() : Observable<BudgetSummary> {
    return this.httpClient.get<BudgetSummary>(`${this.baseUrl}/spend/category`)
  }

  getBudgetByCategory(category : string) : Observable<Budget[]> {
    return this.httpClient.get<Budget[]>(`${this.baseUrl}/category?category=${category}`);
  }
}
