export class Budget {
    id: number = 0;
    category: string = "";
    amount: number = 0;
    description: string = "";
    type: string = "DEBIT";
    createdDate: string = new Date().toISOString().split("T")[0];
    createdTime: string = new Date().toLocaleTimeString();
}

export class BudgetSummary {
    ENTERTAINMENT: number = 0;
    FOOD: number = 0;
    OTHER: number = 0;
    BILLS: number = 0;
    RENT: number = 0;
    TRAVEL: number = 0;
    EMI: number = 0;
  }
  