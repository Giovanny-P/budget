const income = [
  new Income("Salary", 1050000.0),
  new Income("other", 123123.0),
  new Income("AFP", 1000000.0),
];
console.log(income);
const expenses = [
  new Expenses("Apartment rent payment", 243846.0),
  new Expenses("Amenities payout", 94012.0),
  new Expenses("Credit card payment", 200000.0),
  new Expenses("Mom's salary", 100000.0),
  new Expenses("Personal expenses", 100000.0),
];

let loadApp = () => {
  loadHeader();
  loadIncome();
  loadExpenses();
};

let totalIncome = () => {
  let totalIncom = 0;
  for (let incom of income) {
    totalIncom += incom.value;
  }
  return totalIncom;
};

let totalExpenses = () => {
  let totalExpense = 0;
  for (let expense of expenses) {
    totalExpense += expense.value;
  }
  return totalExpense;
};

let loadHeader = () => {
  let budget = totalIncome() - totalExpenses();
  let percentageExpenses = totalExpenses() / totalIncome();
  document.getElementById("budget").innerHTML = currencyFormat(budget);
  document.getElementById("percentage").innerHTML =
    percentageFormat(percentageExpenses);
  document.getElementById("income").innerHTML = currencyFormat(totalIncome());
  document.getElementById("expenses").innerHTML = currencyFormat(
    totalExpenses()
  );
};

const currencyFormat = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const percentageFormat = (value) => {
  return value.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const loadIncome = () => {
  let incomeHTML = "";
  for (let incom of income) {
    incomeHTML += createIncomeHtml(incom);
  }
  document.getElementById("income-list").innerHTML = incomeHTML;
};

const createIncomeHtml = (income) => {
  let incomeHTML = `
    <div class="element cleanStyles">
    <div class="element_description">${income.description}</div>
    <div class="right cleanStyles">
      <div class="element_value">+ ${currencyFormat(income.value)}</div>
      <div class="element_delete">
        <button class="element_delete--btn">
          <ion-icon name="close-circle-outline"
          onclick="deleteIncome(${income.id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>
    `;
  return incomeHTML;
};

const deleteIncome = (id) => {
  let indexDelete = income.findIndex(incom => incom.id === id);
  income.splice(indexDelete, 1);
  loadHeader();
  loadIncome();
};

const loadExpenses = () => {
  let expenseHTML = "";
  for (let expense of expenses) {
    expenseHTML += createExpensesHtml(expense);
  }
  document.getElementById("expenses-list").innerHTML = expenseHTML;
};

const createExpensesHtml = (expense) => {
  let expenseHTML = `
      <div class="element cleanStyles">
      <div class="element_description">${expense.description}</div>
      <div class="right cleanStyles">
        <div class="element_value">- ${currencyFormat(expense.value)}</div>
        <div class="element_percentage"> ${percentageFormat(
          expense.value / totalExpenses()
        )}</div>
        <div class="element_delete">
          <button class="element_delete--btn">
            <ion-icon name="close-circle-outline"
            onclick="deleteExpenses(${expense.id})"></ion-icon>
          </button>
        </div>
      </div>
    </div>
      `;
  return expenseHTML;
};

const deleteExpenses = (id) => {
  let indexDelete = expenses.findIndex(expense => expense.id === id);
  expenses.splice(indexDelete, 1);
  loadHeader();
  loadExpenses();
};
