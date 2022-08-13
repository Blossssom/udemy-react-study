import { useRef, useState } from 'react';
import { useBlocker, usePrompt } from '../../hooks/useBlocker';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();
  usePrompt('really?', isFocus);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusHandler = () => {
    setIsFocus(true);
  };

  const addBtnHandler = () => {
    setIsFocus(false);
  };

  return (
    <Card>
      <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={addBtnHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
