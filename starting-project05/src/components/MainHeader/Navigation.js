import React, {useContext} from 'react';
import AuthContexts from '../../store/authContext';

import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContexts);
  // useContext hook에 사용할 context의 포인터를 전달한다.
  // hook을 사용하거나 Consumer를 사용하거나 기능적 차이는 없으니 성향에 따라 사용하면된다.

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
  // return (
  //     <AuthContexts.Consumer>
  //       {/* context를 사용(소비)할 구간을 감싸기 */}
  //       {(ctx) => {
  //         return (<nav className={classes.nav}>
  //                   <ul>
  //                     {ctx.isLoggedIn && (
  //                       <li>
  //                         <a href="/">Users</a>
  //                       </li>
  //                     )}
  //                     {ctx.isLoggedIn && (
  //                       <li>
  //                         <a href="/">Admin</a>
  //                       </li>
  //                     )}
  //                     {ctx.isLoggedIn && (
  //                       <li>
  //                         <button onClick={props.onLogout}>Logout</button>
  //                       </li>
  //                     )}
  //                   </ul>
  //                 </nav>
  //               )
  //         // context에 접근하기 위해 context의 arg를 넘겨주며 감싼다.
  //       }}
  //     </AuthContexts.Consumer>
  // );
};

export default Navigation;
