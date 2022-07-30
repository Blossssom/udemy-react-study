import React, {useRef, useImperativeHandle, forwardRef} from 'react'
import classes from './Input.module.css';

const Input = forwardRef(({isValid, type, changeHandler, validateHandler, value, label, ids}, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
           focus: activate
        };
    });

  return (
    <div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
        <label htmlFor={ids}>{label}</label>
        <input
            ref={inputRef}
            id={ids}
            type={type}
            onChange={changeHandler}
            onBlur={validateHandler}
            value={value}
        />
    </div>
  )
})

export default Input;