import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onCreateNewExpenseHandler = (expense) => {
    const newExpenseData = {
      ...expense,
      id: Math.random.toString(),
    };
    props.onSaveExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onCreateNewExpense={onCreateNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
