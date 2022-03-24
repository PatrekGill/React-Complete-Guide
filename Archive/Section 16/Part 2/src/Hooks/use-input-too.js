import { useState } from "react";

const useInputToo = (validateValue) => {
	const [enteredValue,setEnteredValue] = useState("");
	const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

	const valueIsValid = validateValue(enteredValue);
	const hasError = !valueIsValid && enteredValueIsTouched;

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};
	const blurHandler = () => {
		setEnteredValueIsTouched(true);
	};
	const reset = (defaultValue = "") => {
		setEnteredValue(defaultValue);
		setEnteredValueIsTouched(false);
	}

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		blurHandler,
		reset
	};
};

export default useInputToo;