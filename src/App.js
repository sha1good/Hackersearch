import {  useState } from "react";
import NewExpenseComponent from "./components/Expense/NewExpenseComponent";
import NewExpense from "./components/NewExpense/NewExpense";
import Search from "./components/Expense/Search";

const DUMMY_EXPENSES = [
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
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [query, setQuery] = useState("");

  const AddExpenseHandler = (expenses) => {
    setExpenses((prevExpense) => {
      return [...prevExpense, expenses];
    });
  };


  const searchQuery = (query) =>{
     setQuery(query)
  }

  // const fetchData = (responseData) => {
  //    setExpenses(prev => [...prev, responseData])
  // };

  // useEffect(() => {
  //   fetchData();
  // })
  
  const keys = ["title"];

   const  handleSearch = (data) =>{
     return data.filter((item) =>
     keys.some((key) => item[key]?.toLowerCase().includes(query.toLowerCase()))
   );
   }

  // const handleSearch = useCallback((moviesInput) => {
  //     console.log(moviesInput);
  //     const response = data?.find((item) => item.title === moviesInput);
  //     setData(response);

  // },[data])

  // useEffect(() =>{
  //   handleSearch()
  // }, [handleSearch])
  //const Search = ((data) => data.)
  //  searchData(movies?.find(item => item.title.toLowerCase() === moviesInput))

  //    const handleSearch = (data) => {
  //     setData((prevExpense) =>{
  //       return [...prevExpense, data]
  //    })

  //  }
  return (
    <div>
      <NewExpense onAddExpenseData={AddExpenseHandler} />
      <Search searchQuery={searchQuery}/>
      <NewExpenseComponent items={handleSearch(expenses)}/>
    </div>
  );
};

export default App;
