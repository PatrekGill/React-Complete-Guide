import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <Card className="expense-item">
            <ExpenseDate
				date={expenseDate}
			/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
