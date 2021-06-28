class Expenses extends Data {
    static expensesCounter = 0;
    constructor(description, value) {
        super(description, value);
        this._idExpenses = ++Expenses.expensesCounter;
    }
    get idExpenses() {
        return this._idExpenses;
    }
}