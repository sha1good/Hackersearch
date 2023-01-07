//import React, { useState, useEffect } from "react";
//import ExpenseDate from "./ExpenseDate";

function Search({ searchQuery}) {
  // const [data, setData] = useState([]);
  // const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   const keys = ["title"];
  //   const response = searchData?.filter((item) =>
  //     keys.some((key) => item[key]?.includes(searchInput))
  //   );
  //   searchInput.length === 2 && setData(response);
  // }, [searchInput, searchData]);

  // searchData(searchInput)
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        onChange={(event) => searchQuery(event.target.value)}
      />
      
    </section>
  );
}

export default Search;
