import React from 'react'
import styles from "./budget.module.css"
import { useContext, useState } from "react";
import { FinanceContext } from "../../../context/FinanceContext";
import { CustomizeContext } from '../../../context/CustomizeContext';


function Budget() {
    const { budget, setCategoryBudget, totalBudget, setTotalBudget } = useContext(FinanceContext);
    const { expenseCategory } = useContext(CustomizeContext);

    const [error, setError] = useState("");

    // Arvutab kogukulud ja säästud
    const totalExpenses = Object.values(budget || {}).reduce((sum, value) => sum + Number(value || 0), 0);
    const savings = totalBudget - totalExpenses;

    // Funktsioon salvestamiseks
    const handleSave = () => {
        if (totalExpenses > totalBudget) {
            setError("Total expenses exceed the budget! Please adjust your amounts.");
        } else {
            setError(""); // Eemaldab vea, kui kõik on korras
            alert("Budget saved successfully!");
        }
    };

    return (
        <div className={styles.page}>
            <h2>Budget Planning</h2>

            <label>
                <span>Total Budget (€)</span>
                <input
                    type="number"
                    value={totalBudget}
                    onChange={(e) => setTotalBudget(Number(e.target.value))}
                />
            </label>

            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Budget (€)</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseCategory.map((category) => (
                        <tr key={category}>
                            <td>{category}</td>
                            <td>
                                <input
                                    type="number"
                                    value={budget[category] || ""}
                                    onChange={(e) => {
                                        const newAmount = Number(e.target.value) || 0;
                                        if (totalExpenses - (budget[category] || 0) + newAmount > totalBudget) {
                                            setError(`Setting ${category} budget too high! Reduce other expenses.`);
                                        } else {
                                            setError("");
                                            setCategoryBudget(category, newAmount);
                                        }
                                    }}
                                />
                            </td>
                            <td>
                                {totalBudget > 0 ? ((budget[category] || 0) / totalBudget * 100).toFixed(1) + "%" : "-"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <h3>Total Expenses: €{totalExpenses.toFixed(2)}</h3>
                <h3 className={savings >= 0 ? "text-green-600" : "text-red-600"}>
                    Savings: €{savings.toFixed(2)}
                </h3>
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <button onClick={handleSave} className="mt-4 p-2 bg-blue-500 text-white rounded">Save Budget</button>
        </div>
    );
}

export default Budget;
