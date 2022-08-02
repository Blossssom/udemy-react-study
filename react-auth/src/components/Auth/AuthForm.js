import { useContext, useState } from 'react';
import { AuthContext } from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email:'',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let url = '';
    setIsLoading(true);
    if(isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSSh6V0xn25o1OkZF8gtFRiVNOz89IEPo';
    }else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSSh6V0xn25o1OkZF8gtFRiVNOz89IEPo';
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          returnSecureToken: true
        })
      })
      .then(res => {
        if(!res.ok) {
          throw new Error('Failed')
        }else {
          return res.json();
        }
      });
      // console.log(response);
      authCtx.login(response.idToken);
      setFormData({email: '', password: ''})
    }catch(err) {
      alert(err);
    }finally {
      setIsLoading(false);
    }
  };

  const onChangeHandler = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input onChange={onChangeHandler} value={formData.email} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input onChange={onChangeHandler} value={formData.password} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {
            isLoading 
              ? <p>Loading ...</p>
              : <button>{isLogin ? 'Login' : 'Create Account'}</button>
          }
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
