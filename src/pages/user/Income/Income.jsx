import React, { useContext, useRef } from 'react'
import styles from "./income.module.css"
import categoriesDATA from "../../../data/incomecategories.json"
import BasicDatePicker from '../../../components/BasicDatePicker/BasicDatePicker'
import { FinanceContext } from "../../../context/FinanceContext";
import { ToastContainer, toast } from 'react-toastify';

function Income() {
    const { incomes,  addIncome } = useContext(FinanceContext);
    const categories =  categoriesDATA
    const incomeRef = useRef();
    const categoryRef = useRef();
    const commentRef = useRef()
    // const dateRef = useRef()
    // const [date, setDate] = useState()

    const addnewincome = () => {
        if (!incomeRef.current.value || !categoryRef.current.value || !selectedDate) {
            toast.error("Please fill in all fields");
            return;
        }

        const newIncome = {
            income: Number(incomeRef.current.value),
            category: categoryRef.current.value,
            date: selectedDate,
            comment: commentRef.current.value,
        };

        addIncome(newIncome); 
        incomeRef.current.value = "";
        categoryRef.current.value = "";
        setSelectedDate("");
        commentRef.current.value = ""
        toast.success("New Income added");

    };

    const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date); 
  };
    

  return (
    <div className={styles.page}>
        <div className={styles.addincome}>
            <div className={styles.title}>Add new income</div>
                <input  ref={incomeRef} type="number" placeholder='Amount' />
                <select ref={categoryRef}  name="" id="">
                    {categories.map((cat) =>
                        <option key={cat}>{cat}</option>
                    )}
                </select>
            <BasicDatePicker onChange={handleDateChange} />
            <input ref={commentRef} type="text" placeholder='Comment'/>
            <button onClick={() => addnewincome()}>SUBMIT</button>
        </div>
        <div className={styles.history}>
            <div className={styles.title}> Income History </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Income</th>
                        <th>Category</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {incomes.map((item, index) =>
                        <tr key={item.date + index}>
                            <td>{item.date}</td>
                            <td>{item.income}</td>
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

export default Income