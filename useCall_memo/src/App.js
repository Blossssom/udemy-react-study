import React, { useCallback, useMemo, useState } from 'react';

import './App.css';
import DemoOutpu from './components/Demo/DemoOutpu';
import Button from './components/UI/Button/Button';

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState('My List');

  console.log("app running!!!");
  const togglePara = useCallback(() => {
    if(allowToggle) {
      setShowPara((prev) => !prev);
    }
  }, [allowToggle]);
  // useCallback은 컴포넌트 실행 전반에 걸쳐 함수를 저장한다.
  // react에 함수를 저장해 매 실행마다 해당 함수를 재생성할 필요가 없음을 알린다.
  // 빈 배열의 경우 해당 함수가 변경될 일이 없음을 알린다. (useEffect와 동일)
  // togglePara의 경우 useCallback으로 인해 클로져 상태이며 빈배열일 경우 재생성 되지 않아 선언당시의 환경을 기억하고 있다.
  // 따라서 종속 배열에 넣을 값이 변할때 재생성을 요구한다.

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [1, 5, 2, 6, 9], []);
  // item props에 하드코딩할 경우 재평가 시 배열이 새로 등록되어 참조값이 다른 배열로 재생성되므로 useMemo를 이용해 값을 저장해야 변경으로 인식하지 않는다.

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutpu title={listTitle} item={listItems} />
      <Button onClick={changeTitleHandler}>Change List</Button>
      {/* <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={togglePara}>Toggle</Button> */}
    </div>
  );
}

export default App;
