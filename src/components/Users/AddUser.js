import React, { useState } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import { useRef } from "react";

const AddUser = (props) => {
	const nameRef = useRef();

	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const ageHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const addUserHandler = (event) => {
		const enteredName = nameRef.current.value;
		event.preventDefault();
		if (
			enteredName.trim().length === 0 ||
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
		props.onAddUser(enteredName, enteredAge);
		setEnteredAge("");
		nameRef.current.value = ""
	};

	const acknowledgeError = () => {
		setError(null);
	};

	return (
		<Wrapper>
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
						type="text"
						id="username"
						ref={nameRef}
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
		</Wrapper>
	);
};

export default AddUser;
