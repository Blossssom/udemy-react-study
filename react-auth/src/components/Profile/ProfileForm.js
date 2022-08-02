import { useContext, useState } from 'react';
import { AuthContext } from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const [password, setPassword] = useState('');

  const authCtx = useContext(AuthContext);
  const onChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDSSh6V0xn25o1OkZF8gtFRiVNOz89IEPo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idToken: authCtx.token,
          password: password,
          returnSecureToken: false
        })
      }).then(res => {
        if(!res.ok) {
          throw new Error('Failed')
        }else {
          return res.json();
        }
      });
    }catch(err) {
      console.log(err);
    }
    
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input onChange={onChangeHandler} value={password} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
