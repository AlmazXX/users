import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

function App() {
  return (
    <React.Fragment>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm />
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
