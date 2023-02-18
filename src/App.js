import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
	const [userList, setUserList] = useState([]);

	const addUserhandler = (uname, uage) => {
		setUserList((previousOutput) => {
			return [
				...previousOutput,
				{ username: uname, age: uage, id: Math.random() },
			];
		});
	};

	return (
		<React.Fragment>
			<AddUser onAddUser={addUserhandler} />
			<UserList users={userList} />
		</React.Fragment>
	);
}

export default App;
