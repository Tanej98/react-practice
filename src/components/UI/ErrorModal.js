import React from "react";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = () => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2></h2>
			</header>
			<div className={classes.content}>
				<p></p>
			</div>
			<footer className={classes.actions}>
				<Button></Button>
			</footer>
		</Card>
	);
};

export default ErrorModal;
