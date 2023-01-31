import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = React.useState("2020");

  const onChangeYearHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedYear={selectedYear}
          onChangeYear={onChangeYearHandler}
        />
      </div>
      {props.expenses
        .filter(
          (expense) =>
            new Date(expense.date).getFullYear().toString() === selectedYear
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
