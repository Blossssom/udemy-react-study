import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {
  const [userList, setUserList] = useState([]);

  const getUserData = (userName, userAge) => {
    setUserList((prev) => [...prev, {name: userName, age: userAge, id: Math.random().toString()}]);
  };

  return (
    <>
      <AddUser onAddUser={getUserData} />
      <UsersList userData={userList} />
    </>
  );
}

export default App;
