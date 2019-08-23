let myAccount = {
    name: "Rebecca Lowe",
    expenses: 0,
    income: 0
};

let addExpense = function(account, amount) {
    account.expenses += amount;
}

let addIncome = function(account, amount) {
    account.income += amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses.`;
}

console.log(getAccountSummary(myAccount));
addIncome(myAccount, 500);
addExpense(myAccount, 2.50);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));