const income = [
    new Income("Salary", 1050000.00),
    new Income("Profit per stock market", 1000000.00)
];

const expenses = [
    new Expenses("Rent apartment", 250000.00),
    new Expenses("Amenities payout", 100000.00)
];

let loadApp = () => {
    loadHeader();
}

let totalIncome = () => {
    let totalIncom = 0;
    for(let incom of income){
        totalIncom += incom.value;
    }
    return totalIncom;
}

let totalExpenses = () => {
    let totalExpense = 0;
    for(let expense of expenses){
        totalExpense += expense.value;
    }
    return totalExpense;
}

let loadHeader = () => {
    let budget = totalIncome() - totalExpenses();
    let percentageExpenses = totalExpenses()/totalIncome();
    document.getElementById("budget").innerHTML = budget;
    document.getElementById("percentage").innerHTML = percentageExpenses;
    document.getElementById("income").innerHTML = totalIncome();
    document.getElementById("expenses").innerHTML = totalExpenses();
}