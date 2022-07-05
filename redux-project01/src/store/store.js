import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
// createSlice()는 절대 기존 값을 변형할 수 없다.


const initialState = { counter: 0, showCounter: true };
// 이 처럼 초기 값을 따로 빼내어 사용할 수도 있다.

createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
            // redux toolkit은 내부적으로 원래 상태를 복제하고 새로운 상태를 생성한다.
            // 따라서 기존엔 사용할 수 없었던 위와 같은 문법으로 상태를 변경할 수 있다.
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
            // redux toolkit도 action을 받는 리듀서를 가질 수 있다.
            // action을 통해 받을 payload를 사용해야하는가를 판단해야한다.
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
        // reducer 메소드들을 추가한다. 내부의 reducer의 이름은 임의로 지정할 수 있으나 중요한 역할을하니 잘 생각하고 작성하자.
        // 위 메소드들은 자동으로 최근 상태 값을 가진다. 
    }
});
// createSlice()는 기존 redux의 여러 기능을 단순화하여 사용할 수 있게 해준다.
// 먼저 전역상태의 slice를 미리 만들어야 하므로 초기 값을 위처럼 지정해준다.
// name 속성은 초기 값을 따라갈 필요는 없다.


// export const INCREMENT = 'increment';
// action의 type에 대한 네이밍, 오타 등의 우려가 있으므로 위와 같이 상수를 내보내면 app 에서도 같은 값을 사용할 수 있다.

const counterReducer = (state = { initialState }, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
        // redux는 기본상태에 변화된 것을 합치지 않고 return 값을 판단하기 때문에 초기에 지정한 showCounter도 지정해준다.
        // 즉, 기존 값과 병합되지 않고 기존 state를 덮어쓴다.
        // 위 코드에서 showCounter를 지정하지 않고 내보낸다면 showCounter 프로퍼티는 undefined로 반환될 것이다.
        // 또한 state.counter++ 과 같이 기존 값에 대한 변경은 절대 사용해선 안된다. 객체는 참조 값이라는 것을 항상 생각하자.
    }

    if(action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }

    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if(action.type === 'toggle') {
        return {
            state: state.counter,
            showCounter: !state.showCounter,
        };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
// react app 과 redux를 연결하기 위해 모듈로 내보낸다.
// redux는 단 하나의 스토어만 제공해야하며 제공을 위해 react 렌더가 이뤄지는 index.js를 설정해야한다.
// subscribe는 react app 에서 이뤄진다.