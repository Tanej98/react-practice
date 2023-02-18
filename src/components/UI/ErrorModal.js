import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
	const onClickOkay = () => {
		props.clickOkay();
	};
	return <div onClick={onClickOkay} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
	const onClickOkay = () => {
		props.clickOkay();
	};
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={onClickOkay}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop clickOkay={props.clickOkay} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					clickOkay={props.clickOkay}
				/>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
