import { createContext, useState } from "react";
import incomeHistory from "../data/incomehistory.json"
import expensesHistory from "../data/expensesHistory.json"
import { CustomizeContext } from "./CustomizeContext";


export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [incomes, setIncomes] = useState(incomeHistory);
    
    const [expenses, setExpenses] = useState(expensesHistory);
    const [budget, setBudget] = useState({});
    const [totalBudget, setTotalBudget] = useState(0);



    
    const addIncome = (newIncome) => {
        setIncomes([newIncome, ...incomes]);
    };

    const addExpense = (newExpense) => {
        setExpenses([newExpense, ...expenses]);
    };

    const setCategoryBudget = (category, amount) => {
        setBudget({ ...budget, [category]: amount });
    };



    const updateExpenseCategoryData = (oldCategory, newCategory) => {
        const updatedExpenses = expenses.map((expense) => {
            if (expense.category === oldCategory) {
                return {...expense, 
                    category: newCategory, 
                };
            }
            return expense; // HAS TO BE HERE!
        });
    
        setExpenses(updatedExpenses);
    };

    const updateIncomeCategoryData = (oldCategory, newCategory) => {
        const updatedIncomes = incomes.map((income) => {
            if (income.category === oldCategory) {
                return {...income, 
                    category: newCategory, 
                };
            }
            return income;
        });
    
        setIncomes(updatedIncomes);
    };
    

    return (
        <FinanceContext.Provider value={{ 
            incomes, 
            setIncomes, 
            expenses, 
            setExpenses, 
            addIncome, 
            addExpense, 
            setCategoryBudget,
            budget,
            totalBudget,
            setTotalBudget,
            updateExpenseCategoryData,
            updateIncomeCategoryData }}>
            {children}
        </FinanceContext.Provider>
    );
};

