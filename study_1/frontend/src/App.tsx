import React, { useEffect, useState } from "react";
import api from "./services/api";

interface IUser {
  id: Number;
  name: String;
}

function App() {
  const [getUsers, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      {getUsers.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
