import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [newUserName, setNewUserName] = useState("");
    const [newAge, setNewAge] = useState("");
	const [error, setError] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();

        if (newUserName.trim() === "") {
			setError({
				title: "Invlid Username",
				message: "Username can't be blank!"
			});
            return;
        }

        if (+newAge < 1) {
			setError({
				title: "Invlid Age",
				message: "Age must be more then 1!"
			});
            return;
        }

        const user = {
            id: Math.random(),
            userName: newUserName,
            age: +newAge,
        };

        props.onAddUser(user);
        setNewUserName("");
        setNewAge("");
    };

    const changedUserNameHandler = (event) => {
        setNewUserName(event.target.value);
    };
    const changedAgeHandler = (event) => {
        setNewAge(event.target.value);
    };

	const errorHandler = () => {
		setError(null);
	};

    return (
        <div>
            {error && <ErrorModal onErrorReset={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        value={newUserName}
                        type="text"
                        id="username"
                        onChange={changedUserNameHandler}
                    />

                    <label htmlFor="age">Age (Years</label>
                    <input
                        value={newAge}
                        type="number"
                        id="age"
                        onChange={changedAgeHandler}
                    />

                    <Button type="submit">AddUser</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
