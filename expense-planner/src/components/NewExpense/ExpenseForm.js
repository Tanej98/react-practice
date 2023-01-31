import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(0);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onCreateNewExpense(expense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    closeExpenseFormHandler();
  };

  const addExpenseButtonHandler = () => {
    setShowForm(1);
  };

  const closeExpenseFormHandler = () => {
    setShowForm(0);
  };

  const addExpenseButton = (
    <div className="new-expense__actions">
      <button onClick={addExpenseButtonHandler}>Add New Expense</button>
    </div>
  );

  const expenseFormTemplate = (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2025-01-01"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeExpenseFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  let finalForm = "";

  if (showForm === 0) {
    finalForm = addExpenseButton;
  } else {
    finalForm = expenseFormTemplate;
  }

  return <div>{finalForm}</div>;
};

export default ExpenseForm;
