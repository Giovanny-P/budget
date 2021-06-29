class Expenses extends Data {
    static expensesCounter = 0;
    constructor(description, value) {
        super(description, value);
        this._id = ++Expenses.expensesCounter;
    }
    get id() {
        return this._id;
    }
}