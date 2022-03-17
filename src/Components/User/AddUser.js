import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

        if (enteredName.trim() === "") {
			setError({
				title: "Invlid Username",
				message: "Username can't be blank!"
			});
            return;
        }

        if (+enteredAge < 1) {
			setError({
				title: "Invlid Age",
				message: "Age must be more then 1!"
			});
            return;
        }

        const user = {
            id: Math.random(),
            userName: enteredName,
            age: +enteredAge,
        };

        props.onAddUser(user);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";

    };

	const errorHandler = () => {
		setError(null);
	};

    return (
        <Wrapper>
            {error && <ErrorModal onErrorReset={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        id="username"
						ref={nameInputRef}
                    />

                    <label htmlFor="age">Age (Years</label>
                    <input
                        type="number"
                        id="age"
						ref={ageInputRef}
                    />

                    <Button type="submit">AddUser</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
