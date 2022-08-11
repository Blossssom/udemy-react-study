import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux/es/exports';
import UserProfile from './components/UserProfile';

function App() {
  const authState = useSelector(state => state.auth);
  
  return (
    <>
      <Header />
      {
        authState.isAuthenticated 
          ? <UserProfile />
          : <Auth />
      }
      <Counter />
    </>
  );
}

export default App;
