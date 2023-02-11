import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [eneteredTitle, setEnteredTitle] = useState('')
    const [eneteredAmount, setEnteredAmount] = useState('')
    const [eneteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDated: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // userInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHander = (event) => {
        event.preventDefault();
        const expenseData = {
            title: eneteredTitle,
            amount: eneteredAmount,
            date: new Date(eneteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return (<form onSubmit={submitHander}>
        <div className='new-expense__constrols'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={eneteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min='0.1' step='0.01' value={eneteredAmount} onChange={amountChangeHandler} />
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' value={eneteredDate} onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </div>
    </form>)
}

export default ExpenseForm;