"use strict";
const form = document.getElementById('form-input');
const add_income = document.getElementById('add-income');
const remove_btn = document.getElementById('btn-delete');
const sub_expense = document.getElementById('sub-expense');
class BudgetTracker {
    balance() {
    }
}
const incomes = [{
        id: 123,
        Amount: 200,
        Description: "Salary",
        Date: '20/01/2023',
        Added: false
    }];
class Income extends BudgetTracker {
    showIncome() {
        const incomes = incomes.filter(a => a.Added === false);
    }
}
class Expenses extends BudgetTracker {
    showExpenses() {
    }
}
