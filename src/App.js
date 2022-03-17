import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";

const DUMMY_USERS = [
	{
		id: 0,
		userName: "bob",
		age: 52
	},
	{
		id: 1,
		userName: "Jack",
		age: 22
	},
];

function App() {
	const [users, setUsers] = useState(DUMMY_USERS);

    const addUserHandler = (user) => {
        console.log(user);

		setUsers((previousUsers) => {
			const array = [user, ...previousUsers];
			return array;
		})
    };

    return (
        <React.Fragment>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UsersList items={users}></UsersList>
        </React.Fragment>
    );
}

export default App;
