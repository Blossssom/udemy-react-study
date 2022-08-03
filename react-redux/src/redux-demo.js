const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
            // 인자로 받은 기존상태를 변경해 반환한다.
        };
    }
    // Action에서 전달받은 type을 판별해 각각의 동작을 수행한다.
    
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
};
// redux에 의해 호출될 Reducer 함수, 기존 상태와 Action을 항상 인자로 받아야한다.

const store = redux.createStore(counterReducer);
// 저장소를 생성하고 Store를 변경할 Reducer를 명시해준다.

const counterSubscriber = () => {
    const lateState = store.getState();
    // store에서 최신상태를 가져오는 method
    console.log(lateState);
};

store.subscribe(counterSubscriber);
// 저장소에 구독을 지정한다.

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
// Action을 발송하는 method



// counterReducer와 subscribe는 모두 리덕스가 호출하기 때문에 우리가 호출하지 않는다.
// redux는 저장소가 초기화 될 때 reducer를 한번 실행시키기 때문에 init 값이 필요하다.