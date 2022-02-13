import React, { useState } from "react";
import "./NewExpenseComponent.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

const NewExpenseComponent = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const AddNewFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearHandler = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          defaltFilteredYear={filteredYear}
          onAddNewFilter={AddNewFilterHandler}
        />
        <ExpenseList items={filteredYearHandler} />
      </Card>
    </li>
  );
};

export default NewExpenseComponent;
