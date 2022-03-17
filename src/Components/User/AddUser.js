import React, {useState} from "react";

const AddUser = props => {
	const [newUserName, setNewUserName] = useState("");
	const [newAge, setNewAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();

		const user = {
			id: Math.random(),
			userName: newUserName,
			age: +newAge
		};

		props.onAddUser(user);
		setNewUserName("");
		setNewAge("");
	};

	const changedUserNameHandler = event => {
		setNewUserName(event.target.value);
	};
	const changedAgeHandler = event => {
		setNewAge(event.target.value);
	};

	return (
		<form onSubmit={addUserHandler}>
			<label htmlFor="username">UserName</label>
			<input type="text" id="username" onChange={changedUserNameHandler} />

			<label htmlFor="age">Age</label>
			<input type="number" id="age" onChange={changedAgeHandler}/>

			<button type="submit">AddUser</button>
		</form>
	);
};

export default AddUser;