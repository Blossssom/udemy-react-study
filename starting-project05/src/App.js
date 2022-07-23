import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContexts from './store/authContext';

function App() {
  const ctx = useContext(AuthContexts)

  return (
    <React.Fragment>
      {/* context를 공급(provide)할 범위를 감싸기 */}
      {/* context에 default 값을 지정하고 사용만 한다면 공급자는 필요가 없지만 
          상태 값을 변화시키기 위해서는 반드시 공급자가 필요하다. */}
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
