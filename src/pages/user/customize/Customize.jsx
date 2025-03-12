import React from 'react'
import styles from "./customize.module.css"
import { useContext, useState } from "react";
import { CustomizeContext } from "../../../context/CustomizeContext"; 
import { ToastContainer, toast } from 'react-toastify';
import { FinanceContext } from '../../../context/FinanceContext';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Customize() {

      const { updateExpenseCategoryData, updateIncomeCategoryData } = useContext(FinanceContext);
      const [show, setShow] = useState(false);
      const [catToBeDeleted, setCatToBeDeleted] = useState("");

  
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
        setEditedExpenseCategory(expenseCategory[index])
        

      };
    
      const IncomeCategorySave = (index) => {
        const oldCategory = incomeCategory[index]; 
        const newCategory = editedIncomeCategory;
        updateIncomeCategory(index, editedIncomeCategory)
        setIncomeEditIndex(null); 
        toast.success("Category saved");

        updateIncomeCategoryData(oldCategory, newCategory)

      };
    
      const ExpenseCategorySave = (index) => {
        const oldCategory = expenseCategory[index]; 
        const newCategory = editedIncomeCategory;
        updateExpenseCategory(index, editedExpenseCategory);
        setExpenseEditIndex(null); 
        toast.success("Category saved");

        
        updateExpenseCategoryData(oldCategory, newCategory)
        
      }

      const handleClose = () => setShow(false);
      const handleShow = (cat , num) => {
        setShow(true)
        setCatToBeDeleted([cat, num])
 
      };

      const removeCategory = () => {
        const [cat, num] = catToBeDeleted; 
        if(num === 1){
          removeIncomeCategory(cat)
        }else{
          removeExpenseCategory(cat)
        }
        setShow(false)
      }


      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
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
                    <button onClick={() => handleShow(category, 1)}>Delete</button>
                    {/* <button onClick={() => removeIncomeCategory(category)}>Delete</button> */}

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
                    <button onClick={() => handleShow(category, 2)}> Delete </button>
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


          <div>
          <Modal
        keepMounted
        open={show}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Deleting category
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          You are about to delete category. This is irreversible!
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <button onClick={handleClose}>
            Close
            </button>
            <button onClick={() => removeCategory()}>
            Yes, I want to delete
            </button>
          </Typography>
        </Box>
      </Modal>
          </div>
        </div>
      );
    };
    

export default Customize