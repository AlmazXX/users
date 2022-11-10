import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import { User } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([])

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user])
  }
  
  return (
    <React.Fragment>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-4">
            <Users />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
