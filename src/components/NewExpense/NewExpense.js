import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpenseHandler(expenseData);
  };

  const [isEditing, setIsEditing] = useState(false);
  const showFormHandler = (showForm = true) => setIsEditing(showForm);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showFormHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onShowFormHandler={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
