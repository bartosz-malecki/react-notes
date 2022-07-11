import React, { useState } from "react";

import "./NewComponentExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const NewComponentExpenses = (props) => {
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default NewComponentExpenses;

// Każdy ExpenseItem ma swój stan, dlatego gdy klikamy w przycisk, zmienia nazwy niezależnie od siebie.
