import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function createId(){
  if(typeof crypto !== "undefined" && crypto.randomUUID){
    return crypto.randomUUID(); // 8-4-4-4-16
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}


function App() {

  const [expenses, setExpenses] = useState([
    {id:createId(), title:"Jacket", amount: 150, category:"Shopping"},
    {id:createId(), title:"Internet", amount: 25, category:"Bills"},
  ]);

  function handleAddExpense(data){
    const newExpense = {id: createId(), ...data};
    setExpenses((prev)=> [newExpense, ...prev]);
  }

  return (
  <div className="page">
    <header className="header">
      <div>
        <h1 className='title'>Expense Tracker Application</h1>
        <p className='subtitle'>Week 1 + Week 2 Practice Project</p>
      </div>
    </header>

    <Card title={"Add Expense"}>
      <ExpenseForm onAddExpense={handleAddExpense}></ExpenseForm>
    </Card>


    <Card title={"Expenses"}>
      <ExpenseList expenses={expenses}></ExpenseList>
    </Card>


  </div>
  )
}

export default App
