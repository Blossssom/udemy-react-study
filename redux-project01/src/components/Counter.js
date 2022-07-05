import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
// useStore: store에 바로접근
// useSelector: 자동으로 store 상태의 일부를 선택 가능
// useDispatch: action을 저장소에 보내기위한 hook

// import { INCREMENT } from '../store/store';
// 저장소에서 내보낸 안정성을 위한 상수 값을 이처럼 사용할 수 있다. 

const Counter = () => {
  const dispatch = useDispatch();
  // useDispatch는 함수를 반환하며 이 함수를 이용해 저장소에 action을 전달할 수 있다.

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  // useSelector는 상태의 일부를 전달할 수 있으며, 함수를 전달한다. 단, 함수는 redux에 의해 실행된다.
  // 위 함수를 실행해 상태의 일부를 되찾으며, 저장소에서 값을 반환한다.
  // useSelector를 사용할 때 react-redux가 자동으로 subscribe를 설정하며, 최신상태 값을 받아 컴포넌트가 업데이트 된다.

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
    // action의 type은 저장소(store)에 지정된 identifier 중 하나여야 한다.
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
    // 전달하는 action의 프로퍼티(payload)를 추가해 사용할 수 있다.
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      {/* useState 처럼 useSelector로 반환된 값을 사용할 수 있다. */}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
