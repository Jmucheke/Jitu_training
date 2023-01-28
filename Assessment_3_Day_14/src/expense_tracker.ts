const form = document.getElementById('form-input')! as HTMLFormElement
const add_income = document.getElementById('add-income')! as HTMLButtonElement
const remove_btn = document.getElementById('btn-delete')! as HTMLButtonElement
const sub_expense = document.getElementById('sub-expense')! as HTMLButtonElement







class BudgetTracker {
 balance() {

 }


}


interface expense {
 id: number
 Amount: number
 Description: string
 Date: string
}
interface income {
 id: number
 Amount: number
 Description: string
 Date: string
 Added: boolean
}
const incomes: income[] = [{
 id: 123,
 Amount: 200,
 Description: "Salary",
 Date: '20/01/2023',
 Added: false
}]


class Income extends BudgetTracker {

 showIncome() {
  const incomes: income[] = incomes.filter(a => a.Added === false)

 }

class Expenses extends BudgetTracker {
 showExpenses() {

 }

}