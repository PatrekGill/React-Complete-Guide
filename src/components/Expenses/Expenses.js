import React, {useState} from "react";


import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
	const [filteredYear, setFilterdYear] = useState("2020"); // set default value
	const filterYearChangeEventHandler = (filterYear) => {
		setFilterdYear(filterYear);
	};

	const filteredExpenses = props.items.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

    return (
        <li>
            <Card className="expenses">
            	<ExpenseFilter selected={filteredYear} onFilterYearChanged={filterYearChangeEventHandler} />
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses;
