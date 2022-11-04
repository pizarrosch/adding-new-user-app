import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import NewUser from "./components/Users/NewUser";


function App() {

  const [users, setUsers] = useState([]);

  function handleNewUser(name, age) {
    setUsers((prev) => [{name: name, age: age, id: Math.random()}, ...prev]);
  }

  return (
    <div>
      <AddUser onAddNewUser={handleNewUser}/>
      <NewUser users={users}/>
    </div>
  );
}

export default App;
