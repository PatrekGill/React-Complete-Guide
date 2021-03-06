import React, {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [showingForm, setShowingForm] = useState(false);

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const showingFormHandler = (event) => {
		setShowingForm((currentState) => !currentState);
	};

	if (!showingForm) {
		return (
			<div className="new-expense__actions-center">
				<button type="button" onClick={showingFormHandler}>Add Expense</button>
			</div>
		);
	}

/*
	//Alternative Method of merging into one handler
	const [userInput, setUserInput] = useState(
		{
			enteredTitle: '',
			eneteredDate: '',
			enteredAmount: ''
		}
	)

	const titleChangeHandler = (event) => {
		setUserInput( (prevState) => {
			return {...prevState, enteredTitle: event.target.value};
		});
	};
	const dateChangeHandler = (event) => {
		setUserInput(
			{
				...userInput,
				eneteredDate: event.target.value
			}
		);
	};
	const amountChangeHandler = (event) => {
		setUserInput(
			{
				...userInput,
				enteredAmount: event.target.value
			}
		);
	};
*/
	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate)
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle(""); // reset form after submit
		setEnteredAmount("");
		setEnteredDate("");
		showingFormHandler();
	};
	
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
				</div>
			</div>

			<div className="new-expense__actions">
				<button type="button" onClick={showingFormHandler}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;