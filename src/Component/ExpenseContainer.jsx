import React, { useState,useEffect } from 'react'
import Form  from './Form'
import{v4 as uid} from 'uuid'
import History from './History'
import BalanceContainer from './BalanceContainer'

function ExpenseContainer() {

  const EXPENSE=[{
    id:uid(),
    title:"Food",
    amount:50
  },{
    id:uid(),
    title:"Transport",
    amount:20
  }]

  const [expense, setExpense]= useState(EXPENSE)
  async  function addExpense(title,amount)
   {
    try {
        const newExpense = fetch("http://localhost:3333/post",
      {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({title,amount})
    })
    } catch (error) {
      console.log(error)
    }
   }


  async function getExpenses(){
    const response = await fetch("https://expense-tracker-8mib.onrender.com/get")
    const data= await response.json()
    setExpense(data.expense)
   }
   useEffect(()=>{
    getExpenses();
   },[]) 

  async function deleteExpense(id){
    await fetch (`https://expense-tracker-8mib.onrender.com/delete/${id}`,{
      method:"DELETE"
    }); getExpenses();
  }

  
return (
    <div className='expense-container'>
      <BalanceContainer expense={expense}/>
        <Form addExpense={addExpense}/>
        <History expense={expense}  deleteExpense={ deleteExpense}/>
    </div>
  )
}

export default ExpenseContainer 