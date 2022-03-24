import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValueIsTouched, setEnteredValueTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && enteredValueIsTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };
    const inputBlurHandler = () => {
        setEnteredValueTouched(true);
    };
    const reset = () => {
        setEnteredValue("");
        setEnteredValueTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
