import React, { useRef, useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContexts from '../../store/authContext';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if(action.type === "USER_INPUT") {
    return {value: action.val, isValid: action.val.includes('@')};
  }

  if(action.type === "INPUT_BLUR") {
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {
    value: '',
    isValid: false
  }
};

const passwordReducer = (state, action) => {
  if(action.type === "USER_PW") {
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === "PW_BLUR") {
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {
    value: '',
    isValid: false
  }
};

const nicknameReducer = (state, action) => {
  switch(action.type) {
    case "USER_NICKNAME":
      return {value: action.val, isValid: action.val.trim().length > 4}
    case "NICKNAME_BLUR":
      return {value: state.value, isValid: state.value.trim().length > 4}
    default:
      return;
  }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});
  const [nicknameState, dispatchNickname] = useReducer(nicknameReducer, {value: '', isValid: null});

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nicknameInputRef = useRef();

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = passwordState;
  const { isValid: nicknameValid } = nicknameState;
  // 디스트럭쳐링 => 유효성 검사가 끝난 이후엔 리렌더링을 막기위해 지정

  const authCtx = useContext(AuthContexts);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailValid && passwordValid && nicknameValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid, nicknameValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   // event.target.value.includes('@') && enteredPassword.trim().length > 6
    //   emailValid && passwordValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_PW', val: event.target.value});
  };

  const nicknameChangeHandler = (event) => {
    dispatchNickname({type: "USER_NICKNAME", val: event.target.value});
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'PW_BLUR'});
  };

  const validateNicknameHandler = () => {
    dispatchNickname({type: "NICKNAME_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    }else if(!emailValid){
      emailInputRef.current.focus();
    }else if(!passwordValid) {
      passwordInputRef.current.focus();
    }else {
      nicknameInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} ids='email' label='E-Mail' type='email' isValid={emailValid} changeHandler={emailChangeHandler} validateHandler={validateEmailHandler} value={emailState.value} />
        <Input ref={passwordInputRef} ids='password' label='Password' type='password' isValid={passwordValid} changeHandler={passwordChangeHandler} validateHandler={validatePasswordHandler} value={passwordState.value} />
        <Input ref={nicknameInputRef} ids='nickname' label='NickName' type='text' isValid={nicknameValid} changeHandler={nicknameChangeHandler} validateHandler={validateNicknameHandler} value={nicknameState.value} />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
