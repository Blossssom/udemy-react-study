import UserFinder from "./components/UserFinder";
import UserContext from "./store/users-context";


function App() {
  const usersContext = {
    users: [
      { id: 'u1', name: 'Max' },
      { id: 'u2', name: 'Manuel' },
      { id: 'u3', name: 'Julie' },
    ] 
  };

  return (
    <UserContext.Provider value={usersContext}>
      <UserFinder />      
    </UserContext.Provider>
  );
}

export default App;
