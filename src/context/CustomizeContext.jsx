import incomeCategories from "../data/incomecategories.json"
import expenseCategories from "../data/expensesCategories.json"
import { createContext, useState } from "react"

export const CustomizeContext = createContext();

export const CustomizeContextProvider = ({children}) => {
    const [incomeCategory, setIncomeCategory] = useState(incomeCategories);
    const [expenseCategory, setExpenseCategory] = useState(expenseCategories);

    const addNewIncomeCategory = (category) => {
        setIncomeCategory([...incomeCategory, category]);
    }
    const addNewExpenseCategory = (category) => {
        setExpenseCategory([...expenseCategory, category])
    }

    const removeIncomeCategory = (category) => {
        const updatedIncomeCategories = incomeCategory.filter((cat) => cat !== category);
        setIncomeCategory(updatedIncomeCategories);
    };

    const removeExpenseCategory = (category) => {
        const updatedExpenseCategories = expenseCategory.filter((cat) => cat !== category);
        setExpenseCategory(updatedExpenseCategories);
    };

    const updateIncomeCategory = (index, newCategory) => {
        const updatedCategories = [...incomeCategory];
        updatedCategories[index] = newCategory;
        setIncomeCategory(updatedCategories);
    };

    const updateExpenseCategory = (index, newCategory) => {
        const updatedCategories = [...expenseCategory];
        updatedCategories[index] = newCategory;
        setExpenseCategory(updatedCategories);
    };

    return(
        <CustomizeContext.Provider value={{
            incomeCategory, 
            expenseCategory, 
            addNewIncomeCategory, 
            addNewExpenseCategory, 
            removeIncomeCategory, 
            removeExpenseCategory,
            updateIncomeCategory,
            updateExpenseCategory}}>
            {children}
        </CustomizeContext.Provider>
    )
}