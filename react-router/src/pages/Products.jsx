import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Products() {
  return (
    <Container>
      <h2>This is Products Page!!!</h2>
      <ul>
        <li>
          <Link to='/products/1'>test 01</Link>
        </li>
        <li>
          <Link to='/products/2'>test 02</Link>
        </li>
        <li>
          <Link to='/products/3'>test 02</Link>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.section`

`;