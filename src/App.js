import { useEffect, useState } from "react";
import { Users } from "./users";
import "./app.css";
import Table from "./Table";
import axios from "axios";

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

function App() {
  const [query, setQuery] = useState("");
  const [dataArray, setDataArray] = useState({});
  const [error, setError ] = useState(null)

  // const keys = ["name", "validDate", "email"];
  //const keys = ["name"];
  // const Search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key]?.toLowerCase().includes(query))
  //   );
  // };

  // const Search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   setDataArray(Search(Users)[0]);
  //   setQuery("");
  // };

  const handleClick = (event) => {
      event.preventDefault();
      const data = Users.find(item => item.name.toLowerCase() === query)
      setDataArray(data)
     // setDataArray(Search(Users)[0]);
     if(data === undefined){
      setError(`Could not find  ${query}  in the dataList`)
     }
      setQuery("");
    };

  console.log(dataArray);
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div style={{ marginTop: "30px" }}>
        <button onClick={handleClick}>Add</button>
      </div>
      {<Table data={dataArray} />}
    { error && <span>{error}</span>}
    </div>
  );
}

////////////////////// API SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

//   return (
//     <div className="app">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }

export default App;
