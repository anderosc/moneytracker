import { useContext } from "react";
import { FinanceContext } from "../../../context/FinanceContext";
import { CustomizeContext } from "../../../context/CustomizeContext";



export function getMonth(){
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth(); 
    const currentMonthName = months[currentMonthIndex]; 
  return currentMonthName;
}



export function getCurrentMonthIncome() {

  const {incomes} = useContext(FinanceContext);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear(); 

  // Filter incomes in this month
  const currentMonthIncomes = incomes.filter(income => {
    const incomeDate = new Date(income.date); 
    return incomeDate.getMonth() === currentMonth && incomeDate.getFullYear() === currentYear;
  });

  const totalIncome = currentMonthIncomes.reduce((total, income) => total + income.income, 0);

  return totalIncome.toFixed(2);
}



export function getCuttentMonthExpenses(){
  const {expenses} = useContext(FinanceContext);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear(); 

  // Filter incomes in this month
  const currentMonthExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date); 
    return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
  });

  const totalExpenses = currentMonthExpenses.reduce((total, expense) => total + expense.amount, 0);

  return totalExpenses.toFixed(2);
}



export function savingRate(){
  const income =  getCurrentMonthIncome();
  const expenses =  getCuttentMonthExpenses();

  let savingrate = Number( ((income - expenses) /income) * 100).toFixed(0)
  return savingrate
}




export function dailyAverageExpenses() {
  const expenses = getCuttentMonthExpenses();  // See tagastab kogu kulu numbrina
  const currentDate = new Date();


  const currentDay = currentDate.getDate();

  const dailyAverage = (expenses / currentDay).toFixed(2);
  
  return dailyAverage;
}






export function prev12monthsData() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const { incomes, expenses } = useContext(FinanceContext);

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const data:{
    month: string,
    income : number,
    expenses : number,
    savings : number

  }[] = [];

  // Every Month incomes and expenses
  for (let i = 0; i < 12; i++) {
    const monthIndex = (currentMonthIndex - i + 12) % 12;
    const year = currentMonthIndex - i < 0 ? currentYear - 1 : currentYear;
    const monthName = months[monthIndex];

    // Filter
    const monthlyIncomes = incomes.filter(income => {
      const incomeDate = new Date(income.date);
      return incomeDate.getMonth() === monthIndex && incomeDate.getFullYear() === year;
    });

    const monthlyExpenses = expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getMonth() === monthIndex && expenseDate.getFullYear() === year;
    });

    // Sum income and expenses
    const totalIncome = monthlyIncomes.reduce((sum, income) => sum + income.income, 0);
    const totalExpenses = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    const totalSavings = totalIncome - totalExpenses

    // make table
    data.push({
      month: monthName,
      income: totalIncome,
      expenses: totalExpenses,
      savings: totalSavings
    });
  }

  return data;
}




export const getCurrentMonthCategoryExpenses = () => {
  const {expenses} = useContext(FinanceContext);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();



  const filteredExpenses = expenses.filter(({ date }) => {
      const expenseDate = new Date(date);
      return expenseDate.getFullYear() === currentYear && expenseDate.getMonth() === currentMonth;
  });

  const categoryTotals = filteredExpenses.reduce((acc, { category, amount }) => {
      acc[category] = (acc[category] || 0) + amount;
      return acc;
  }, {});

  return categoryTotals;
};

