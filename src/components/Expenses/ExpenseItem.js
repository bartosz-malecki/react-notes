import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;

// działanie useState:
// rejstrujemy stan useState(props.title). [title, setTitle] oznaczamy wartość i funkcje aktualizującą.
// wywołujemy funkjce aktulaizującą (clickHandler).
// react zrobi resztę - wykona ponownie funkcję (komponent) i nadpisze JSX.
