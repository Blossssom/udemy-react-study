import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { counterActions } from '../store/counter';


const Counter = () => {

  const dispatch = useDispatch();
  // useDispatch는 dispatch 함수를 반환하기 때문에 dispatch를 호출할 수 있다.

  const counter = useSelector(state => state.counter);
  console.log(counter)
  // useStore를 사용할 수 있지만 자동을 상태의 일부를 선택하고 자동으로 구독을 하는 등 더 강력한 useSelector를 사용한다.
  // redux로 부터 state를 받아오며 그 중 일부를 선택해 반환할 수 있다.

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    // dispatch 함수로 action을 reducer로 전달해 값을 갱신시킨다.
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => { 
    dispatch(counterActions.increase(5));
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleShow())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        counter.toggleShow
        &&
        <>
          <div className={classes.value}>{counter.counter}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
