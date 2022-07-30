import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {

  console.log("button running!!!");

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button); 
// props로 참조 값을 전달받아오는 경우 부모 컴포넌트가 재평가되며 새로운 함수를 작성하고 참조값이 바뀌어 변경사항으로 인식한다.
