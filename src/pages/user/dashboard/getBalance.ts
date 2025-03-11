

export const getBalance = (incomes, expenses) => {
    const totalIncome = incomes.reduce((sum, item) => sum + item.income, 0);
    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    return (totalIncome - totalExpenses).toFixed(2);
};


