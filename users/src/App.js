import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://lvh.me:5001/api/users")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("There was an error retreving the users.", error);
      });
  }, []);
  return (
    <div className="App">
      <h1>Users</h1>
    </div>
  );
}

export default App;
