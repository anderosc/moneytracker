import { createContext, useState } from "react";
import incomeHistory from "../data/incomehistory.json"
import expensesHistory from "../data/expensesHistory.json"


export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [incomes, setIncomes] = useState(incomeHistory);
    
    const [expenses, setExpenses] = useState(expensesHistory);
    const [budget, setBudget] = useState({});
    const [totalBudget, setTotalBudget] = useState(0);

    
    const addIncome = (newIncome) => {
        setIncomes([...incomes, newIncome]);
    };

    const addExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    const setCategoryBudget = (category, amount) => {
        setBudget({ ...budget, [category]: amount });
    };

    // Arvuta saldo (vaba raha)
    const getBalance = () => {
        const totalIncome = incomes.reduce((sum, item) => sum + item.income, 0);
        const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
        return totalIncome - totalExpenses;
    };

    return (
        <FinanceContext.Provider value={{ 
            incomes, 
            setIncomes, 
            expenses, 
            setExpenses, 
            addIncome, 
            addExpense, 
            getBalance, 
            setCategoryBudget,
            budget,
            totalBudget,
            setTotalBudget }}>
            {children}
        </FinanceContext.Provider>
    );
};

