import { useEffect, useState } from "react";
import axios from "axios";

import Nav from "./components/Nav";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://lvh.me:5001/api/users")
      .then((response) => {
        console.log(response.data);
        setUsers(...users, response.data);
      })
      .catch((error) => {
        console.log("There was an error retreving the users.", error);
      });
  }, []);
  return (
    <div className="App">
      <Nav />
      <h1>Users</h1>
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
}

export default App;
