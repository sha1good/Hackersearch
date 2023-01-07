import React, { useState } from "react";
import "./NewExpenseComponent.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";



const NewExpenseComponent = ({items}) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  // let finalObject = {};

  // for( let i=0; i< props.items.length; i++){
  //   Object.assign(finalObject, props.items[i])
  // }

  //const finalObject = Object.fromEntries(items.map(item => [item.id, item.title, item.amount, item.date]))

   //console.log(finalObject)
  
 
  const addNewFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

 


  //const keys = useMemo(() => ["title"], []);

const filteredYearHandler = items?.filter((expense) => {
    return expense?.date?.getFullYear().toString() === filteredYear;
  });

  // const handleSearch = (searchData) => {

  //   const response = data.filter(
  //     (expense) => expense.title.toString() === searchData
  //   );
  //   console.log(response);
  //   return response;
  // };

  // useEffect(() => {
  //  setData(data);
  //  console.log(data);
  // }, [data]);

  

  // const handleSearch = (searchData) => {
  //   const response = props.items?.filter((item) =>
  //    keys.some((key) => item[key]?.includes(searchData))
  //   );
  
  //   props.fetchData(response);
  // };

  return (
    <li>
      <Card className="expenses">
      
      
        <ExpenseFilter
          defaltFilteredYear={filteredYear}
          onAddNewFilter={addNewFilterHandler}
        />
        <ExpenseList items={filteredYearHandler} />
      </Card>
    </li>
  );
};

export default NewExpenseComponent;
