import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailRecuder = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isVaild: action.val.includes('@')};
  }

  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isVaild: state.value.includes('@')};
  }

  return {
    value: '',
    isVaild: false
  }
};
  // enteredPassword.trim().length > 6
const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isVaild: action.val.trim().length > 6};
  }

  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isVaild: state.value.trim().length > 6};
  }

  return {
    value: '',
    isVaild: false
  }
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailRecuder, {value: '', isVaild: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isVaild: null});

  // useEffect(() => {
  //   const checkInvaild = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   return () => {
  //     clearTimeout(checkInvaild);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const {isVaild: emailVaild} = emailState;
  const {isVaild: passwordVaild} = passwordState;

  useEffect(() => {
    console.log('Effect!!!');
    const checkInvaild = setTimeout(() => {
      setFormIsValid(emailVaild && passwordVaild);
    }, 500);

    return () => {
      clearTimeout(checkInvaild);
    };
  }, [emailVaild, passwordVaild]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(
    //   emailState.isVaild && passwordState.isVaild
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(
    //   emailState.isVaild && passwordState.isVaild
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailVaild === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordVaild === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
