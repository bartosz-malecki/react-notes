import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // alternatywny zapis
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, // 2. ..dlatego trzeba skopiować pozostałe klucze i potem nadpisuje konkretne wartości.
    //   enteredTitle: event.target.value, // 1. z samym tym trace klucze pozostałych par klucz-wartość. react zastąpi stary stan - nowym, a nie połączy go.. trzeba ręcznie skopiować inne wartości..
    // }); // 3. jednak przy tym podejściu nie mamy pewności, że bazujemy na aktualnym stanie. Aby mieć pewnośc trzeba zastosować:

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // dzięki tej funkcji mamy pewność, że stan będzię zawsze aktualny z zachowaniem wszelkich harmonogramów i aktulizacji. Powinno się używać tej składni, gdy aktualizajca stanu zależy od poprzedniego stanu
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // zapisywanie danych z formularza
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // wartośc ta idzie do NewExpense jako parametr enteredExpeneseData
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // two-way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// Wiązanie dwukierunkowe (two-way binding) - w przypadku danych wejściowych nie tylko nasłuchujemy, ale również przekazujemy nową wartośc z powrotem do wejścia, abyśmy mogli zresetować lub zmienić dane programowo.
// Wystarczy dodać atrybut value od elementu wyjściowego (inputu). Powoduje to ustawienie właściwości wartości wewnętrznej, którą ma każdy element wyjściowy i możemy ustawić ją na nową wartość.
// Tak więc input teraz nie tylko nasłuchuje (onChange) aby zaktualizować nasz stan, ale też przekazujemy stan z powrotem na wejście.
// Zaletą tego jest, że gdy przesyłamy formularz, możemy wywołać np. setEnteredTitle i ustawić go na pusty string. Robiąc to nadpisujemy to co użytkownik wprowadził po przesłaniu formularza, a tym samym usuwamy dane wejsciowe i można to zrobić dla wszystkich danych wejściowych.
// Po ludzku - przesyła nam formularz z danymi wejściowymi i czyści formularz.
