import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpeneseData) => {
    const expenseData = {
      ...enteredExpeneseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
      {/*nazwa zaczyna się od 'on' by wyjaśnić, że to wskaźnik funkcji który jest przekazywany jako argument */}
    </div>
  );
};

export default NewExpense;
