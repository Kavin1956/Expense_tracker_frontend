import React, { useState } from 'react'

function Form(props) {

    const [title , setTitle] = useState("")
    const [amount , setAmount] = useState()

    function handleTitleChange(e)
    {
        setTitle(e.target.value)
    }

    function handleAmountChange(e)
    {
        setAmount(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        props.addExpense(title,amount)
    }

  return (
    <div className='expense-form'>
        <h1>Add Income / Expense</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>

                <label className='form-label'>Title</label>
                <input 
                type='text'
                value={title}
                onChange={handleTitleChange}
                className='form-input'
                />

                <label className='form-label'>Amount</label>
                <input 
                type='number'
                value={amount}
                onChange={handleAmountChange}
                className='form-input'
                />

            </div>

            <button type='submit'>Add amount</button>
        </form>
    </div>
  )
}

export default Form