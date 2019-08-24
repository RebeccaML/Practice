const account = {
    name: "Rebecca",
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount;
        });
        this.income.forEach(function(income) {
            totalIncome += income.amount;
        })
        let balance = totalIncome - totalExpenses;
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense("Coffee", 5);
account.addExpense("Burger", 8);
account.addExpense("Lame", 10);
account.addIncome("Blog", 100);
console.log(account.getAccountSummary());
console.log(account.expenses);
console.log(account.income);

