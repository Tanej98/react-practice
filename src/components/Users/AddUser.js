import React, { useState } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const usernameHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			return;
		}
		// adding + will convert numeric string to number
		if (+enteredAge < 1) {
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};
	return (
		<Card className={styles.input}>
			<form>
				<label htmlFor="username">Username</label>
				<input
					value={enteredUsername}
					onChange={usernameHandler}
					type="text"
					id="username"
				/>
				<label htmlFor="age">Age (years)</label>
				<input
					value={enteredAge}
					onChange={ageHandler}
					type="number"
					id="age"
				/>
				<Button type="submit" onClick={addUserHandler}>
					Add User
				</Button>
			</form>
		</Card>
	);
};

export default AddUser;
