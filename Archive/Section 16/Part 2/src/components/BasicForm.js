import useInputToo from "../Hooks/use-input-too";

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        blurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInputToo((value) => value.trim() !== "");

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        blurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInputToo((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInputToo((value) => value.includes("@"));

    let formIsValid = false;
    if (
        enteredEmailIsValid &&
        enteredFirstNameIsValid &&
        enteredLastNameIsValid
    ) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(enteredFirstName);
        console.log(enteredLastName);
        console.log(enteredEmail);

		resetLastName();
		resetFirstName();
		resetEmail();
    };

    const firstNameClasses = firstNameHasError
        ? "form-control invalid"
        : "form-control";
    const lastNameClasses = lastNameHasError
        ? "form-control invalid"
        : "form-control";
    const emailClasses = emailHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={firstNameClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={firstNameChangeHandler}
                        value={enteredFirstName}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameHasError && (
                        <p className="error-text">First name is invalid</p>
                    )}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        onBlur={lastNameBlurHandler}
                        onChange={lastNameChangeHandler}
                        value={enteredLastName}
                    />
                    {lastNameHasError && (
                        <p className="error-text">Last name is invalid</p>
                    )}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Email is invalid.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
