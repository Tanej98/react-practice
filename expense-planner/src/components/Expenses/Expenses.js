import React from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = React.useState("2020");

  const onChangeYearHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredItems = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedYear={selectedYear}
          onChangeYear={onChangeYearHandler}
        />
      </div>
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
