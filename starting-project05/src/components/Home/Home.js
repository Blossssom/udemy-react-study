import React, { useContext } from 'react';
import AuthContexts from '../../store/authContext';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const authCtx = useContext(AuthContexts);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Log out</Button>
    </Card>
  );
};

export default Home;
