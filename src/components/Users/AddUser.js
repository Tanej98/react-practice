import React, { useState } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

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
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age",
			});
			return;
		}
		// adding + will convert numeric string to number
		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age(>0)",
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const acknowledgeError = () => {
		setError(null);
	}

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					clickOkay={acknowledgeError}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
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
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
