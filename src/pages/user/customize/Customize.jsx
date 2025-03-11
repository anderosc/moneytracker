import React from 'react'
import styles from "./customize.module.css"
import { useContext, useState } from "react";
import { CustomizeContext } from "../../../context/CustomizeContext"; 
import { ToastContainer, toast } from 'react-toastify';



function Customize() {
    const {
        incomeCategory,
        expenseCategory,
        addNewIncomeCategory,
        addNewExpenseCategory,
        removeIncomeCategory,
        removeExpenseCategory,
        updateIncomeCategory,
        updateExpenseCategory,
      } = useContext(CustomizeContext);
    
      const [newIncomeCategory, setNewIncomeCategory] = useState("");
      const [newExpenseCategory, setNewExpenseCategory] = useState("");
      const [incomeEditIndex, setIncomeEditIndex] = useState(null);
      const [expenseEditIndex, setExpenseEditIndex] = useState(null);
      const [editedIncomeCategory, setEditedIncomeCategory] = useState("");
      const [editedExpenseCategory, setEditedExpenseCategory] = useState("");
    
      const IncomeCategoryEdit = (index) => {
        setIncomeEditIndex(index);
        setEditedIncomeCategory(incomeCategory[index]);
        
      };
    
      const ExpenseCategoryEdit = (index) => {
        setExpenseEditIndex(index);
        setEditedExpenseCategory(expenseCategory[index]);
        

      };
    
      const IncomeCategorySave = (index) => {
        updateIncomeCategory(index, editedIncomeCategory); // Update category in context
        setIncomeEditIndex(null); // Hide input
        toast.success("Category saved");

      };
    
      const ExpenseCategorySave = (index) => {
        updateExpenseCategory(index, editedExpenseCategory); // Update category in context
        setExpenseEditIndex(null); // Hide input
        toast.success("Category saved");

      };
    
      return (
        <div className={styles.page}>
          <h2>Income Categories</h2>
          <table className={styles.table}>
            <thead>
              <tr>
            <th>Category</th>
            <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {incomeCategory.map((category, index) => (
                <tr key={index}>
                  <td>
                    {incomeEditIndex === index ? (
                      <input type="text" value={editedIncomeCategory} onChange={(e) => setEditedIncomeCategory(e.target.value)}/>
                    ) : (
                      category
                    )}
                  </td>
                  <td>
                    {incomeEditIndex === index ? (
                      <button onClick={() => IncomeCategorySave(index)}>Save</button>
                    ) : (
                      <button onClick={() => IncomeCategoryEdit(index)}>Edit</button>
                    )}
                    <button onClick={() => removeIncomeCategory(category)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <input type="text" value={newIncomeCategory} onChange={(e) => setNewIncomeCategory(e.target.value)} placeholder="Add new income category" className={styles.input}/>
          <button onClick={() => addNewIncomeCategory(newIncomeCategory)} className={styles.button}>
            Add Income Category
          </button>
    





          {/* Expense Categories */}
          <h2>Expense Categories</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenseCategory.map((category, index) => (
                <tr key={index}>
                  <td>
                    {expenseEditIndex === index ? (
                      <input type="text" value={editedExpenseCategory} onChange={(e) => setEditedExpenseCategory(e.target.value)}/>
                    ) : (
                      category
                    )}
                  </td>
                  <td>
                    {expenseEditIndex === index ? (
                      <button onClick={() => ExpenseCategorySave(index)}> Save </button>
                    ) : (
                      <button onClick={() => ExpenseCategoryEdit(index)}> Edit </button>
                    )}
                    <button onClick={() => removeExpenseCategory(category)}> Delete </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <input type="text" value={newExpenseCategory} onChange={(e) => setNewExpenseCategory(e.target.value)} placeholder="Add new expense category" className={styles.input}/>
          <button onClick={() => addNewExpenseCategory(newExpenseCategory)} className={styles.button}>
            Add Expense Category
          </button>

          <ToastContainer 
                    position="top-left"
                    autoClose={4000}
                    theme="dark"
                    closeOnClick
                    />
        </div>
      );
    };
    

export default Customize