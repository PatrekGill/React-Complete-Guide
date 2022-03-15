import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
    const items = props.items;
	
	const [filteredYear, setFilterdYear] = useState("2020"); // set default value
	const filterYearChangeEventHandler = (filterYear) => {
		setFilterdYear(filterYear);
	};

    return (
        <div>
            <Card className="expenses">
            	<ExpenseFilter selected={filteredYear} onFilterYearChanged={filterYearChangeEventHandler}/>
                <ExpenseItem
                    title={items[0].title}
                    date={items[0].date}
                    amount={items[0].amount}
                ></ExpenseItem>

                <ExpenseItem
                    title={items[1].title}
                    date={items[1].date}
                    amount={items[1].amount}
                ></ExpenseItem>

                <ExpenseItem
                    title={items[2].title}
                    date={items[2].date}
                    amount={items[2].amount}
                ></ExpenseItem>

                <ExpenseItem
                    title={items[3].title}
                    date={items[3].date}
                    amount={items[3].amount}
                ></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;
