import React, { useContext, useRef, useState } from 'react'
import styles from "./expenses.module.css"
import BasicDatePicker from '../../../components/BasicDatePicker/BasicDatePicker'
import { FinanceContext } from '../../../context/FinanceContext'
import { ToastContainer, toast } from 'react-toastify';
import { Stack, Pagination } from '@mui/material';
import { CustomizeContext } from '../../../context/CustomizeContext'



function Expenses() {
    const { expenses,  addExpense } = useContext(FinanceContext);

    const {expenseCategory} =  useContext(CustomizeContext)
    const amountRef = useRef();
    const categoryRef = useRef();
    const commentRef = useRef()
    // const dateRef = useRef()
    // const [date, setDate] = useState()

    const [selectedDate, setSelectedDate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); 
    const rowsPerPage = 10; 

    const addNewExpense = () => {
         if (!amountRef.current.value || !categoryRef.current.value || !selectedDate) {
                    toast.error("Please fill in all fields");
                    return;
                }
        const expense = {
            "amount" : Number(amountRef.current.value),
            "category" : categoryRef.current.value,
            "date" : selectedDate,
            "comment" : commentRef.current.value
        }
        addExpense(expense);
        amountRef.current.value = "";
        categoryRef.current.value = "";
        setSelectedDate("");
        commentRef.current.value = ""
        // console.log(date)

        toast.success("New Income added");
    }


    const handleDateChange = (date) => {
        setSelectedDate(date); 
    };


    const sortedIncomes = expenses.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

    const totalPages = Math.ceil(sortedIncomes.length / rowsPerPage);
    const paginatedExpenses = sortedIncomes.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    

  return (
    <div className={styles.page}>
        <div className={styles.addincome}>
            <div className={styles.title}>Add New Expense</div>
                <input  ref={amountRef} type="number" placeholder='Amount' />
                <select ref={categoryRef}  name="" id="">
                    {expenseCategory.map((cat) =>
                        <option key={cat}>{cat}</option>
                    )}
                </select>
            <BasicDatePicker onChange={handleDateChange} />
            <input ref={commentRef} type="text" placeholder='Comment'/>
            <button onClick={() => addNewExpense()}>SUBMIT</button>
        </div>
        <div className={styles.history}>
            <div className={styles.title}> Expenses History </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedExpenses.map((item, index) =>
                        <tr key={item.date + index}>
                            <td>{item.date}</td>
                            <td>{item.amount}</td>
                            <td>{item.category}</td>
                            <td>{item.comment}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <Stack spacing={2}>
                <Pagination 
                    count={totalPages} 
                    variant="outlined" 
                    page={currentPage} 
                    onChange={handlePageChange} 
                />
            </Stack>

        <ToastContainer 
                    position="top-left"
                    autoClose={4000}
                    theme="dark"
                    closeOnClick
                    />
    </div>
  )
}

export default Expenses