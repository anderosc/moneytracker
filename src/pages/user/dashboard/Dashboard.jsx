import { useContext} from 'react'
import styles from "./dashboard.module.css"
import {getBalance} from "./getBalance"
import { FinanceContext } from "../../../context/FinanceContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Typography from '@mui/material/Typography';
import {getMonth, getCurrentMonthIncome, getCuttentMonthExpenses, savingRate, dailyAverageExpenses,
  prev12monthsData, getCurrentMonthCategoryExpenses
} from "./getMonthData"
import { CustomizeContext } from '../../../context/CustomizeContext';


function Dashboard() {
  const {incomes, expenses, budget  } = useContext(FinanceContext);
  const { expenseCategory } = useContext(CustomizeContext);
 


  const balance = getBalance(incomes, expenses);

  const currentMonth =  getMonth()
  const currentMonthIncome = getCurrentMonthIncome()
  const currentMonthExpenses = getCuttentMonthExpenses() 
  const savingrate = savingRate()
  const dailyaverageexpenses = dailyAverageExpenses()
  const prev12monthsdata = prev12monthsData()
  const currentMonthCatExpenses = getCurrentMonthCategoryExpenses()


  
  const chartSetting = {
    yAxis: [
      {
        label: 'value (€)',
      },
    ],
    width: 1000,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.freemoney}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h7" component="div">
                Avaiable money
              </Typography>
              <Typography variant="h6">
                {balance} €
              </Typography>
            </CardContent>
          </Card>    
        </div>
        <div>        
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h7" component="div">
                {currentMonth} Total Income
              </Typography>
              <Typography variant="h6">
                {currentMonthIncome} €
              </Typography>
              </CardContent>
              </Card>    
          </div>
          <div>        
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h7" component="div">
                {currentMonth} Total Expenses
              </Typography>
              <Typography variant="h6">
                {currentMonthExpenses} €
              </Typography>
              </CardContent>
              </Card>    
          </div>
          <div>        
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h7" component="div">
                {currentMonth} Saving rate
              </Typography>
              <Typography variant="h6">
                {savingrate} %
              </Typography>
              </CardContent>
              </Card>    
          </div>
          <div>
            <Card sx={{ Width: "300px" }}>
            <CardContent>
              <Typography variant="h7" component="div">
                {currentMonth} Daily Average Expenses
              </Typography>
              <Typography variant="h6">
                {dailyaverageexpenses} €
              </Typography>
              </CardContent>
              </Card>    
          </div>

      </div>
      <div className={styles.chart}>
        <br />
        <br /><br />
      <div className={styles.budget}>Previous 12 months income and expenses</div>

      <BarChart
      dataset={prev12monthsdata}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'income', label: 'Income',  },
        { dataKey: 'expenses', label: 'Expenses',  },
      ]}
      {...chartSetting}/>

      <br />
      <br />
      </div>
      <div>
        <div className={styles.budget}>Budget</div> <br />
      <table className={styles.table}>
                <thead>
                    <tr >
                        <th >Category</th>
                        <th >Budget (€)</th>
                        <th >Spent (€)</th>
                        <th >Remaining (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseCategory.map((category) => {
                        const categoryBudget = budget[category] || 0;
                        const spent = currentMonthCatExpenses[category] || 0;
                        const remaining = categoryBudget - spent;

                        return (
                            <tr key={category}>
                                <td >{category}</td>
                                <td >€{categoryBudget.toFixed(2)}</td>
                                <td >€{spent.toFixed(2)}</td>
                                <td >€{remaining.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
      </div>
      <br />
      <br />
      <div>
        <div className={styles.budget}>Previous 12 months savings</div>
        <BarChart
        dataset={prev12monthsdata}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'savings', label: 'Savings',  },
        ]}
        {...chartSetting}/>
      </div>
    </div>
  )
}

export default Dashboard