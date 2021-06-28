class Income extends Data {
    static incomeCounter = 0;
    constructor(description, value) {
        super(description, value);
        this._idIncome = ++Income.incomeCounter;
    }
    get idIncome() {
        return this._idIncome;
    }
}