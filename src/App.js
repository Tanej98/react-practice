import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
	const [userList, setUserList] = useState([]);

	const addUserhandler = (uname, uage) => {
		setUserList((previousOutput) => {
			console.log(previousOutput);
			return [...previousOutput, { username: uname, age: uage , id: Math.random()}];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserhandler} />
			<UserList users={userList} />
		</div>
	);
}

export default App;
