import React, { useContext, useRef } from 'react'
import styles from "./expenses.module.css"
import categoriesDATA from "../../../data/expensesCategories.json"
import BasicDatePicker from '../../../components/BasicDatePicker/BasicDatePicker'
import { FinanceContext } from '../../../context/FinanceContext'
import { ToastContainer, toast } from 'react-toastify';


function Expenses() {
    const { expenses,  addExpense } = useContext(FinanceContext);

    const categories =  categoriesDATA
    const amountRef = useRef();
    const categoryRef = useRef();
    const commentRef = useRef()
    // const dateRef = useRef()
    // const [date, setDate] = useState()

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

    const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date); 
  };
    

  return (
    <div className={styles.page}>
        <div className={styles.addincome}>
            <div className={styles.title}>Add New Expense</div>
                <input  ref={amountRef} type="number" placeholder='Amount' />
                <select ref={categoryRef}  name="" id="">
                    {categories.map((cat) =>
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
                    {expenses.map((item, index) =>
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