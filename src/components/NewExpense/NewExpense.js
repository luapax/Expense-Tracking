import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setisEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        console.log(expenseData);
    }

    const startEditingHandler = () => {
        setisEditing(true)
    }

    const stopEditingHandler = () => {
        setisEditing(false)
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} stopEditing={stopEditingHandler} />}
    </div>
}

export default NewExpense;