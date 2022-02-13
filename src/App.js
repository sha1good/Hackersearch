

import { useState } from 'react';
import NewExpenseComponent from './components/Expense/NewExpenseComponent';
import NewExpense from './components/NewExpense/NewExpense'


 const DUMMY_EXPENSES =[
   {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 8, 14),
   },
   {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.88,
    date: new Date(2019, 5, 12),
  },
  ]
const App = () => {
 

   const [ expenses, setExpenses ]  = useState(DUMMY_EXPENSES)

   const AddExpenseHandler =(expenses) =>{
      setExpenses((prevExpense) =>{
         return [...prevExpense, expenses]
      })
   }
  return (
    <div>
       <NewExpense onAddExpenseData={AddExpenseHandler}/>
       <NewExpenseComponent items= {expenses} />
    </div>
  );
};

export default App;
