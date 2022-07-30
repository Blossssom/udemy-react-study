import React, { useMemo } from 'react';
import styled from 'styled-components';

export default React.memo(function DemoOutpu(props) {
    const {item} = props;

    const sortedList = useMemo(() => {
      // useMemo로 메모리에 저장 후 콜백을 사용해 저장값을 반환한다.
      return item.sort((a, b) => a - b);
    }, [item]);

  return (
    <Container>
      <h2>{props.title}</h2>
      <ul>
        {
          sortedList.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </Container>
  )
});

// React.memo 로 감싸 props의 변화가 있을 때만 재실행이 일어난다.
// 해당 컴포넌트에 어떤 props가 입력되는지 확인 후 입력되는 모든 신규 props값을 확인해 비교하게한다.

const Container = styled.div`

  ul {
    padding: 0;

    li {
      list-style: none;
      border: 1px solid tomato;
      margin-bottom: 10px;
      border-radius: 30px;
      padding: 10px;
      
      &:hover {
        border: 1px solid thistle;
      }
    }
  }
`;

